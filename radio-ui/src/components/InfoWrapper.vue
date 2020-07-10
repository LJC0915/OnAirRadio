<template>
  <div class="info-wrapper">
    <current :currentSong="currentSong" />
    <songs :queue="queue" :songs="songs" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Songs from "@/components/Songs.vue";
import Current from "@/components/Current.vue";
import { interval } from "rxjs";
@Component({
  components: { Current, Songs }
})
export default class InfoWrapper extends Vue {
  currentSong = "";
  queue = [];
  songs = [];

  getInfo() {
    axios.get("/all").then(res => {
      const { currentSong, queue, songs } = res.data;
      this.currentSong = currentSong;
      this.queue = queue.map((song: string, index: number) => {
        return `${index + 1}. ${song.slice(0, -4)}`;
      });
      this.songs = songs.map((song: string) => {
        return song.slice(0, -4);
      });
    });
  }

  mounted() {
    this.getInfo();
    const $getInfo = interval(10000).subscribe(() => this.getInfo());
  }
}
</script>

<style scoped lang="scss">
.info-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
