<template>
  <div class="cover-box">
    <nav class="border fixed split-nav">
      <div class="nav-brand">
        <h3>
          <a href="https://www.getpapercss.com/" target="_blank">PaperCSS</a>
        </h3>
      </div>
      <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1" />
        <label for="collapsible1">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </label>
        <div class="collapsible-body">
          <ul class="inline">
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link to="diary">Diary</router-link>
            </li>
            <!-- <li><router-link to="article">article</router-link></li> -->
            <li><router-link to="one">ONE一个</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <br />
    <router-view />
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup: async () => {
    onMounted(() => {});
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "papercss/dist/paper.css";
@import "papercss/dist/paper.min.css";
</style>