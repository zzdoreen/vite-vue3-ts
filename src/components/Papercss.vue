<template>
  <div class="cover-box">
    <nav class="border fixed split-nav">
      <div class="nav-brand">
        <h3><a href="#" @click.prevent>PaperCSS</a></h3>
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
              <router-link to="test-1">nav1</router-link>
            </li>
            <li><router-link to="test">nav2</router-link></li>
            <li><a href="#" @click.prevent>Github</a></li>
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
});
</script>
<style lang="scss" scoped>
@import "papercss/dist/paper.css";
@import "papercss/dist/paper.min.css";
</style>