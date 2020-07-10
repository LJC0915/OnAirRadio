<template>
  <div>
    <on-air />
    <info-wrapper />
    <live-stream />
  </div>
</template>

<script>
import OnAir from "@/components/OnAir.vue";
import InfoWrapper from "@/components/InfoWrapper.vue";
import LiveStream from "../components/LiveStream";

export default {
  name: "Home",
  components: {
    LiveStream,
    OnAir,
    InfoWrapper
  }
};
</script>

<style scoped lang="scss">
.info-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
