<template>
  <div class="info">
    <div class="current">Current Song: {{ currentSong }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Info extends Vue {
  @Prop({ type: String, default: "" }) readonly currentSong!: string;
}
</script>

<style scoped lang="scss">
.info {
  background: #ffcd3c;
  color: #342b38;
  padding: 50px;
  margin-top: 30px;
  width: 40%;
  text-align: left;
  border-radius: 5px;
}

.current {
  font-size: 2em;
  font-weight: bold;
}

.other {
  font-size: 1em;
  font-weight: bold;
}
</style>
