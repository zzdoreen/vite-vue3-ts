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
              <router-link to="/home" @click="handleRouterChange"
                >Home</router-link
              >
              <!-- <a href="javascript:;" @click="handleRouterChange">home</a> -->
            </li>
            <li>
              <router-link to="test-1">test</router-link>
            </li>
            <li><router-link to="article">article</router-link></li>
            <!-- <li><a href="#" @click.prevent>Github</a></li> -->
          </ul>
        </div>
      </div>
    </nav>
    <br />
    <!-- <hr /> -->
    <router-view />
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted } from "vue";
import Index from "./Papercss/Index.vue";

export default defineComponent({
  components: {
    Index,
  },
  setup: async () => {
    onMounted(() => {});

    return {};
  },
  methods: {
    handleRouterChange() {
      console.log("click");
      this.$emit("refresh");
    },
  },
});
</script>
<style lang="scss" scoped>
@import "papercss/dist/paper.css";
@import "papercss/dist/paper.min.css";
</style>