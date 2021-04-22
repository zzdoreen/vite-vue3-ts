<template>
  <div class="container">
    <div class="svg-box">
      <svg-star class="svg-pic" />
    </div>
    <div class="banner">
      <el-row>
        <el-col :span="4">
          <router-link to="/color-hunt">ColorHunt</router-link>
        </el-col>
        <el-col :span="4">
          <router-link to="/animation">Animation</router-link>
        </el-col>
        <el-col :span="8" class="clear-title-hover"></el-col>
        <el-col :span="4">
          <router-link to="/illustration" @click="() => console.log('d')"
            >Illustration</router-link
          >
        </el-col>
        <el-col :span="4">
          <router-link to="/undefined" @click="() => console.log('d')"
            >Undefined</router-link
          >
        </el-col>
      </el-row>
    </div>
    <div class="pic">
      <svg
        width="100vw"
        height="300px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="tree">
            <path
              d="M676.40428923 602.84551775h146.12333758L644.95011613 
          395.67796907h99.96735222L570.13616033 
          201.43509049h58.29771871l-116.53329957-155.34459259-116.48358932 
          155.34459259h58.40956681l-174.73159774 
          194.24287858h99.81822142L201.47237319 
          602.84551775h146.09848244L162.71079045 
          835.73813097h271.57963055v142.41992248h155.3445926V835.73813097h271.85303703z"
            />
          </g>
        </defs>

        <g id="house">
          <path
            d="
          M 150,0
          L 0,150
          L 300,150
          "
            fill="#193154"
            stroke="#193154"
          />
          <rect x="25" y="150" height="150" width="250" fill="#193154" />
          <g id="light">
            <rect x="100" y="150" height="100" width="100" fill="#FFD43B" />
          </g>

          <path
            class="building"
            d="M 200 300
          L 200 0
          L 300 0
          L 300 100
          L 400 100
          L 400 -100
          L 600 -100
          L 600 300
          L 550 300 
          L 550 200
          L 500 200
          L 500 300
          "
            fill="#193154"
            stroke="#193154"
          />
          <use class="lights" href="#light" x="-1000" y="-250" />
          <use class="lights" href="#light" x="-1050" y="-250" />
          <use class="lights" href="#light" x="-1000" y="-100" />
          <use class="lights" href="#light" x="-1050" y="-100" />
        </g>
        <use href="#tree" x="0" y="550" class="tree-box" />
        <use href="#tree" x="100" y="700" class="tree-box" />
        <use href="#tree" x="5500" y="1050" class="tree-box" />
        <use href="#tree" x="5900" y="550" class="tree-box" />
        <use href="#tree" x="6300" y="550" class="tree-box" />
      </svg>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import SvgStar from "./SvgStar.vue";
export default defineComponent({
  components: { SvgStar },
});
</script>
<style lang="scss" scoped>
$themeColor: #515e7b;
$deepThemeColor: #183153;
.container {
  width: 100%;
  height: 100%;
  text-align: center;
  position: fixed;
  background: linear-gradient($deepThemeColor, $themeColor);
  display: flex;
  justify-content: center;
  .svg-box {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: relative;
    margin-top: 100px;
    box-shadow: 0 0 100px white;
    .svg-pic {
      width: 300%;
      height: 300%;
      position: absolute;
      left: 50%;
      margin-left: -150px;
      top: -65px;
      animation: move 2s infinite alternate;
    }
  }
  .banner {
    width: 700px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    color: white;
    top: 200px;
    cursor: pointer;
    // border: 1px solid #ccc;

    div {
      :hover {
        transform: scale(1.1);
        background: linear-gradient(
          transparent 50%,
          rgba($deepThemeColor, 0.5) 50%
        );
      }
    }
    div.clear-title-hover {
      background: none;
      :hover {
        background: none;
      }
    }
  }
  .pic {
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 300px;
    // border: 1px solid #ccc;
    #house {
      transform: scale(0.7) translate(950px, 150px);
      .building {
        transform: translate(-900px, 0px);
      }
      .lights {
        transform: scale(0.5);
        &:nth-of-type(1) {
          transform: scale(0.5) translateX(150px);
        }
        &:nth-of-type(4) {
          transform: scale(0.5) translateX(200px);
        }
        &:nth-of-type(3) {
          transform: scale(0.5) translateX(-50px);
        }
      }
    }
    .tree-box {
      fill: $deepThemeColor;
      transform: scale(0.2);
      &:nth-of-type(2) {
        fill: white;
        transform: translate(70px, 50px) scale(0.15);
      }
      &:nth-of-type(3) {
        fill: #ccc;
        transform: scale(0.15);
      }
      &:nth-of-type(4) {
        fill: rgba($deepThemeColor, 0.5);
      }
    }
  }
}

@keyframes move {
  from {
    transform: rotateZ(30deg);
  }
  to {
    transform: rotateZ(60deg);
  }
}
</style>