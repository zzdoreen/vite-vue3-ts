<template>
  <div class="container">
    <div class="_3Dbox">
      <div class="cube">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div ref="ball"></div>
    </div>
    <div class="bottom">
      <div class="button" @click="handleStartEnd"></div>
      <div class="gifts">
        <div
          v-show="showFlag"
          class="choosed-ball"
          ref="gift"
          @click="handleOpenGifts"
        ></div>
        <div class="open-ball" v-show="showOpenBallFlag">
          <h2 class="font">{{msg}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted } from "@vue/runtime-core";
import { reactive, Ref, ref } from "vue";

export default defineComponent({
  //   left: 0 - 280px;
  //   bottom:150px - -50px;
  // animation: ballMove 2s ease-in-out alternate;

  setup: () => {
    let ball: Ref<null> = ref(null);
    let gift: Ref<null> = ref(null);
    let showFlag: Ref<boolean> = ref(false);
    let showOpenBallFlag: Ref<boolean> = ref(false);
    let str = [
      "谢谢惠顾",
      "再来一次",
      "还没有想好",
      "休息一小时",
      "A赏",
      "B赏",
      "C赏",
      "D赏",
    ];
    let msg: Ref<string> = ref("");

    onMounted(() => {
      for (let i = 0; i < 100; i++) {
        let aBalls = document.createElement("div");
        aBalls.setAttribute("class", "ball");
        aBalls.setAttribute(
          "style",
          `
        left:${Math.random() * 280}px;
        bottom:${Math.random() * 200 - 50}px;
        background: radial-gradient(circle at 20px 20px, white, rgb(${parseInt(
          Math.random() * 255 + ""
        )},${parseInt(Math.random() * 255 + "")},${parseInt(
            Math.random() * 255 + ""
          )}));
        `
        );
        (ball.value as any)?.parentNode?.insertBefore(
          aBalls,
          (ball.value as any).nextElementSibling
        );
      }
    });

    function handleStartEnd(event: any) {
      let aBalls = document.getElementsByClassName("ball");

      if (event.target.getAttribute("class") === "button") {
        event.target.setAttribute("class", "button active");

        for (let i = 0; i < aBalls.length; i++) {
          let str = aBalls[i].getAttribute("style");
          aBalls[i].setAttribute(
            "style",
            str + `animation: ballMove .5s ease-out ${Math.random()}s infinite;`
          );
        }
      } else {
        event.target.setAttribute("class", "button");
        for (let i = 0; i < aBalls.length; i++) {
          let str = aBalls[i].getAttribute("style");
          aBalls[i].setAttribute("style", str + "animation: none;");
        }
      }
      setTimeout(() => {
        event.target.setAttribute("class", "button");
        for (let i = 0; i < aBalls.length; i++) {
          let str = aBalls[i].getAttribute("style");
          aBalls[i].setAttribute("style", str + "animation: none;");
        }

        (gift.value as any).setAttribute(
          "style",
          "animation: ballOut 1s ease-out normal;"
        );
        showFlag.value = true;
      }, 2000);
    }

    function handleOpenGifts() {
      showOpenBallFlag.value = true;
      msg.value = str[parseInt(Math.random() * 8 + "")];
      setTimeout(() => {
        showOpenBallFlag.value = false;
        showFlag.value = false;
      }, 2000);
    }

    return {
      handleStartEnd,
      handleOpenGifts,
      showFlag,
      msg,
      showOpenBallFlag,
      gift,
      ball,
    };
  },
});
</script>
<style lang="scss" >
.container {
  height: 100vh;
}
._3Dbox {
  width: 300px;
  margin-left: calc(50% - 175px);
  margin-top: 70px;
  perspective: 1000px; /* 视距 */
}
._3Dbox .cube {
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d; /* 以3d的形式展示 ！！！ */
  // animation: _3dmove 10s linear infinite;
}
._3Dbox .cube div {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 20px solid lightblue;
  line-height: 300px;
  font-size: 30px;
  //   opacity: 0.9;
  text-align: center;
  background-size: contain;
  //   border: 23px solid red;
}
._3Dbox .cube div:nth-child(1) {
  /* 上 */
  transform: rotateX(90deg) translateZ(170px);
}
._3Dbox .cube div:nth-child(2) {
  /* 下 */
  transform: rotateX(-90deg) translateZ(170px);
}
._3Dbox .cube div:nth-child(3) {
  /* 前 */
  transform: translateZ(170px);
}
._3Dbox .cube div:nth-child(4) {
  /* 后 */
  transform: translateZ(-170px);
}
._3Dbox .cube div:nth-child(5) {
  /* 左 */
  transform: translateX(-170px) rotateY(90deg);
}
._3Dbox .cube div:nth-child(6) {
  /* 右 */
  transform: translateX(170px) rotateY(-90deg);
}
@keyframes _3dmove {
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

._3Dbox .ball {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  bottom: -50px;
  left: 0;
  background: radial-gradient(circle at 20px 20px, #fcfcfc, #b993d6);
}

@keyframes ballMove {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateY(-80px);
  }
  50% {
    transform: translateY(-90px) translateX(20px);
  }
  70% {
    transform: translateY(-100px) translateX(30px);
  }
  100% {
    transform: translateY(-0px) translateX(20px);
  }
}
.active {
  animation: _2dmove 2s ease-out infinite;
}
.bottom {
  width: 410px;
  height: 200px;
  background: lightblue;
  margin-left: calc(50% - 206px);
  margin-top: 75px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: relative;
  .button {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: calc(50% - 30px);
    border: 10px solid white;
    box-shadow: 0 0px 15px #777 inset;
    &::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 65px;
      background: white;
      margin-top: -2px;
      box-shadow: 0px 0px 10px 0px #777;
    }
  }
  .gifts {
    width: 80px;
    height: 80px;
    background: #333;
    position: absolute;
    bottom: 0;
    border: 10px solid white;
    border-bottom-color: transparent;
    left: calc(50% - 40px);
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    .choosed-ball {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: radial-gradient(circle at 20px 20px, #fcfcfc, #b993d6);
      margin-left: 10px;
      margin-top: 50px;
    }
  }
  .open-ball {
    top: -300px;
    position: absolute;
    width: 200px;
    height: 200px;
    background: #fcfcfc;
    border-radius: 50%;
    box-shadow: 0 0 50px 50px #fcfcfc;
    left: calc(50% - 100px);
    transform: rotate(-30deg);
    z-index: inherit;
    animation: ballOpen 0.3s ease-in normal;
    &::before {
      content: "";
      display: inline-block;
      width: 160px;
      height: 160px;
      clip-path: polygon(0 50%, 0 100%, 100% 100%, 100% 50%);
      background: radial-gradient(circle at 0 0, white, #b993d6);
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 0;
      transform: rotate(120deg);
    }
    &::after {
      content: "";
      display: inline-block;
      width: 160px;
      height: 160px;
      clip-path: polygon(0 50%, 0 100%, 100% 100%, 100% 50%);
      background: radial-gradient(circle at 0 0, white, #b993d6);
      border-radius: 50%;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: rotate(-30deg);
    }
    .font {
      transform: rotate(30deg);
      width: 200px;
      position: absolute;
      z-index: 100;
      left: calc(50% - 100px);
      top: 30%;
      animation: ballOpen 0.5s ease-in 0.2s normal;
    }
  }
}

@keyframes _2dmove {
  to {
    transform: rotateZ(360deg);
  }
}

@keyframes ballOut {
  from {
    transform: scale(0.5);
    margin-top: 0px;
  }
  to {
    transform: scale(1);
    margin-top: 50px;
  }
}

@keyframes ballOpen {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
  }
}
</style>