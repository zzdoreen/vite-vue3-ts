<template>
  <div class="bg">
    <div
      v-loading="!music.value.picurl.length"
      class="bg-img"
      :style="`background-image:url(${music.value.picurl})`"
    ></div>
    <div class="content">
      <h1 class="title">
        {{ music.value.artistsname }} : {{ music.value.name }}
      </h1>
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

      <p class="lyric">{{ msg }}</p>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted } from "vue";
import { useMusic } from "../hooks/useMusic";

export default defineComponent({
  setup: async () => {
    onMounted(() => {});

    let {
      handleChangeMusic,
      index,
      obj,
      music,
      music_lyric,
    } = await useMusic();

    let audio = ref();
    let isMusicPlay = ref(false);
    let msg = ref(obj[0].text);

    function handleMusicTimeChange() {
      if (audio.value.currentTime >= obj[index.value + 1].time) {
        index.value++;
      }
      msg.value = obj[index.value].text;
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
      music_lyric,
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
  .bg-img {
    width: 110vw;
    left: -5vw;
    top: -5vh;
    height: 110vh;
    position: absolute;
    filter: blur(50px);
    background-size: 100% 100%;
  }
  .content {
    padding-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .icon {
      font-size: 50px;
      color: #333;
      z-index: 99;
      cursor: pointer;
      letter-spacing: 50px;
      margin-left: 50px;
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
        width: 30px;
        height: 30px;
        background: white;
        z-index: 99;
        border-radius: 50%;
        box-shadow: 0px 0px 3px #333 inset;
      }
    }

    .title {
      color: white;
      z-index: 99;
      font-size: 14px;
      font-weight: 100;
    }
    
    .lyric {
      z-index: 99;
      color: #333;
    }
  }
}

@keyframes move {
  to {
    transform: rotate(360deg);
  }
}
</style>