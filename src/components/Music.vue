<template>
  <div v-loading="!music.value.picurl.length" class="bg">
    <div
      v-loading="!music.value.picurl.length"
      class="bg-img"
      :style="`background-image:url(${music.value.picurl})`"
    ></div>
    <div class="content">
      <div class="container">
        <div
          v-loading="!music.value.picurl.length"
          class="pic"
          :style="`background-image:url(&quot;https:${
            music.value.picurl.split(':')[1]
          }`"
        ></div>
      </div>
      <audio
        v-loading="!music.value.picurl.length"
        class="audio"
        ref="audio"
        :autoplay="true"
        @pause="handlePause"
        @play="handlePlay"
        @timeupdate="handleMusicTimeChange"
        :src="music.value.url"
      ></audio>
      <div class="title">
        <p>{{ music.value.name }}</p>
        <p>歌手：{{ music.value.artistsname }}</p>
      </div>
      <p class="lyric">{{ msg ? msg : " " }}</p>
      <div class="icon">
        <i
          :class="[
            isMusicPlay ? 'el-icon-video-play' : 'el-icon-video-pause',
            '',
          ]"
          @click="handleMusicPlay"
        ></i>

        <i class="el-icon-refresh" @click="handleChangeMusic"></i>
      </div>

      <br />
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted } from "vue";
import { useMusic } from "../hooks/useMusic";

export default defineComponent({
  setup: async () => {
    onMounted(() => {});

    let { handleChangeMusic, index, obj, music } = await useMusic();

    let audio = ref();
    let isMusicPlay = ref(false);
    let msg = obj.data && obj.data[0].text ? ref(obj.data[0].text) : ref(" ");

    function handleMusicTimeChange() {
      if (audio.value.currentTime >= obj.data[index.value + 1].time) {
        index.value++;
      }
      msg.value = obj.data[index.value].text;
      if (audio.value.ended) {
        handleChangeMusic();
      }
    }

    function handleMusicPlay() {
      if (audio.value.paused) {
        audio.value.play();
      } else {
        audio.value.pause();
      }
    }

    function handlePause() {
      isMusicPlay.value = true;
    }

    function handlePlay() {
      isMusicPlay.value = false;
    }

    return {
      msg,
      isMusicPlay,
      index,
      obj,
      audio,
      music,
      handlePlay,
      handlePause,
      handleMusicPlay,
      handleMusicTimeChange,
      handleChangeMusic,
    };
  },
});
</script>
<style lang="scss" scoped>
@mixin ab_in_center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.bg {
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  .bg-img {
    width: 110vw;
    left: -5vw;
    top: -5vh;
    height: 110vh;
    position: absolute;
    filter: blur(20px);
    background: #000;
    background-size: 100% 100%;
    &::before {
      content: "";
      display: inline-block;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 98;
      background-color: black;
      opacity: 0.7;
    }
  }
  .content {
    margin-top: 20px;
    z-index: 99;
    width: 300px;
    height: 500px;
    // border: 5px solid #ccc;
    padding-top: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .icon {
      font-size: 50px;
      color: rgb(214, 213, 213);
      z-index: 99;
      cursor: pointer;
      letter-spacing: 50px;
      margin-left: 50px;
      position: absolute;
      top: 450px;
    }

    .container {
      width: 250px;
      height: 250px;
      background: linear-gradient(
          150deg,
          rgba(20, 20, 20, 0.75),
          rgba(20, 20, 20, 0.75) 40%
        ),
        linear-gradient(
          150deg,
          rgba(20, 20, 20, 0.75) 40%,
          rgba(20, 20, 20, 0.75) 50%
        ),
        repeating-radial-gradient(#1f1e1d, #1f1e1d 4px, white 5px, #1f1e1d 6px);
      border: 1px solid #333;
      box-shadow: 0 0 15px #333;
      border-radius: 50%;
      animation: move 5s linear infinite;
      position: relative;
      margin-bottom: 20px;

      .pic {
        @include ab_in_center;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 15px solid #1f1e1d;
        box-sizing: border-box;
        background-size: contain;
      }

      &:before {
        @include ab_in_center;
        content: "";
        width: 15px;
        height: 15px;
        background: rgb(214, 213, 213);
        z-index: 99;
        border-radius: 50%;
        box-shadow: 0px 0px 3px #333 inset;
      }
    }

    .title {
      color: rgb(214, 213, 213);
      z-index: 99;
      margin-top: -20px;
      :nth-child(2) {
        font-size: 12px;
      }
    }

    .lyric {
      z-index: 99;
      color: rgb(214, 213, 213);
      font-size: 12px;
    }
  }
}

@keyframes move {
  to {
    transform: rotate(360deg);
  }
}
</style>