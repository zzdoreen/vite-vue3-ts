<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <router-view></router-view>
  <!--  --><!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss" >
body {
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
:root {
  --black: #2a2a33;
  --white: #fff;
  --grey: #dedede;
  //   --primary-color: #{$primary-color};
  //   --primary-color-dark: #{$primary-color-dark};
  //   --primary-color-tint: #{$primary-color-tint};
  //   --secondary-color: #{$secondary-color};
  --secondary-color-rgba: rgba(104, 232, 215, 0.7);
  //   --secondary-color-dark: #{$secondary-color-dark};
  //   --secondary-color-tint: #{$secondary-color-tint};
  --background-color: #777891;
  --blush-color: #ff6ec7;
  --mouth-inner-color: #633440;
  --face-detail-color: var(--black);
  --choco: #4d4443;
  --choco-dark: #423c3b;
  --shadow-color: #707187;
}
</style>