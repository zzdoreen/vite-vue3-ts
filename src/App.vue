<template>
  <suspense>
    <template #default>
      <router-view></router-view>
    </template>
    <template #fallback>
      <h1>hello world</h1>
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  setup: () => {
    const route = useRoute();
    watch(
      () => route.path,
      (to, from) => {
        if (from.includes("papercss") && from !== to) {
          location.reload();
        }
      }
    );
  },
  methods: {
    handleRefresh() {
      console.log("refresh");
      setTimeout(() => {
        location.reload();
      }, 10);
    },
  },
});
</script>

<style lang="scss">
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
  font-size: 15px;
}
a {
  text-decoration: none;
  color: white;
  &:hover,
  &:visited,
  &:active {
    color: white;
  }
}
:root {
  --black: #2a2a33;
  --white: #fff;
  --grey: #dedede;
  --animation: 6s infinite ease;
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