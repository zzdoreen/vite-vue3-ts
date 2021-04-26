<template>
  <div class="bg">
    <div
      class="bg-img"
      :style="`background-image:url(${music.value.picurl})`"
    ></div>
    <div class="content">
      <h1 class="title">
        {{ music.value.artistsname }}:{{ music.value.name }}
      </h1>
      <div class="container">
        <div
          class="pic"
          :style="`background-image:url(&quot;https:${
            music.value.picurl.split(':')[1]
          }`"
        ></div>
        <!-- <img :src="music.value.picurl" class="pic" alt="" srcset="" /> -->
      </div>
      <audio
        class="audio"
        ref="audio"
        :autoplay="true"
        controls
        :src="music.value.url"
      ></audio>
      <el-button class="btn" @click="handleChangeMusic">切换</el-button>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { getData } from "../api/api";
export default defineComponent({
  setup: async () => {
    let audio = ref(null);
    onMounted(() => {
      console.log("audoi", audio);
    });
    let datas: any = await getData(2, "", {});
    let music = reactive({ value: datas.data.data });

    function handleChangeMusic() {
      getData(2, "", {}).then((res: any) => {
        music.value = res.data.data;
      });
    }
    return { audio, music, handleChangeMusic };
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
  background: #2c3e50;
  .bg-img {
    width: 110vw;
    left: -5vw;
    top: -5vh;
    height: 110vh;
    position: absolute;
    background: white;
    filter: blur(20px);
    background-size: cover;
  }
  .content {
    padding-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

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
        background-size: cover;
      }

      &:before {
        @include ab_in_center;
        content: "";
        width: 15px;
        height: 15px;
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
      letter-spacing: 5px;
    }
    .audio {
      margin: 20px 0;
    }
    .el-button {
      z-index: 99;
    }
  }
}

@keyframes move {
  to {
    transform: rotate(360deg);
  }
}
</style>