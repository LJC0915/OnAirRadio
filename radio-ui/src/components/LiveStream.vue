<template>
  <div id="radio" class="live-stream">
    <audio id="audio" src="/stream" preload="none" controls autoplay></audio>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LiveStream extends Vue {
  @Prop({ type: String, default: "" }) readonly currentSong!: string;
}
</script>

<style scoped lang="scss">
.live-stream {
  margin-top: 30px;
}
</style>
