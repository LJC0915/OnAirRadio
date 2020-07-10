<template>
  <div class="info">
    <div class="other">Queue : {{ queue.join(" > ") }}</div>
    <div class="other">Songs : {{ songs.join(", ") }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Songs extends Vue {
  @Prop({ type: Array, default: () => [] }) readonly queue!: [];
  @Prop({ type: Array, default: () => [] }) readonly songs!: [];
}
</script>

<style scoped lang="scss">
.info {
  background: #ffcd3c;
  color: #342b38;
  margin-top: 30px;
  padding: 30px 50px;
  width: 40%;
  text-align: left;
  border-radius: 5px;
}

.other {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 20px;
  height: 40%;
}
</style>
