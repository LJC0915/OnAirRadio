<template>
  <div class="on-air">
    <h1>LIVE</h1>
    <h1>ON AIR</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
.on-air {
  background: #d92027;
  color: #f4f4f4;
  padding: 50px;
}

h1 {
  font-size: 5em;
  margin: 0.1em;
}
</style>
