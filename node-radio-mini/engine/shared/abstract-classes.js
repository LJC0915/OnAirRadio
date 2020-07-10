const NeoBlessed = require('neo-blessed');
const { keys }  = require('../../config');

class _FocusIndexer {

    constructor({ getIndexLimit }) {
        this._index = 1;
        this._getIndexLimit = getIndexLimit;
    }

    get() {
        return this._index;
    }

    incr() {
        if (this._index < this._getIndexLimit()) {
            this._index++;
        }
    }

    decr() {
        if (this._index > 1) {
            this._index--;
        }
    }
}

/**
 * Base Class that wraps neo-blessed library and creates a view box i.e. window
 */
class TerminalBox {

    constructor(config) {
        this.box = NeoBlessed.box(config);
    }
}

/**
 * Class extended over TerminalBox class,
 * wraps neo-blessed library and creates a view box i.e. window with scrollable children
 */
class TerminalItemBox extends TerminalBox {

    constructor({ config, childConfig, bgBlur, bgFocus }) {

        super(config);
        this._childConfig = childConfig;
        this._bgBlur = bgBlur;
        this._bgFocus = bgFocus;
        this._focusIndexer = new _FocusIndexer({
            getIndexLimit: this._getNavigationLimit.bind(this)
        });
    }

    _getHeight() {
        // neo-blessed box has two invisible items prepended, so we need '-2'
        return this.box.height - 2;
    }

    _getNavigationLimit() {
        return Math.min(this.box.children.length - 1, this._getHeight());
    }

    _setActiveChildColor(color) {
        const activeChild = this.box.children[this._focusIndexer.get()];
        if (activeChild) {
            activeChild.style.bg = color;
        }
    }

    focus() {
        this._setActiveChildColor(this._bgFocus);
        this.box.focus();
    }

    blur() {
        this._setActiveChildColor(this._bgBlur);
    }

    scroll(scrollKey) { 
        
        if (this.box.children.length === 1) {
            return;
        }

        const unfocusedIndex = this._focusIndexer.get();
        const unfocusedChild = this.box.children[unfocusedIndex];
        unfocusedChild.style.bg = this._bgBlur;

        if (scrollKey === keys.SCROLL_UP) {
            this._focusIndexer.decr();
        }
        else if (scrollKey === keys.SCROLL_DOWN) {
            this._focusIndexer.incr();
        }

        const focusedIndex = this._focusIndexer.get();
        const focusedChild = this.box.children[focusedIndex];
        focusedChild.style.bg = this._bgFocus;
    }

    _createBoxChild() {
        throw new Error('_createBoxChild() method not implemented');
    }

    createBoxChildAndAppend(content) {
        const boxChild = this._createBoxChild(content);
        this.box.append(boxChild);
    }
}

module.exports = {
    TerminalBox,
    TerminalItemBox
};
