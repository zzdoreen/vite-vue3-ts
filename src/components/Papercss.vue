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
            <li>
              <router-link to="one">ONE一个</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br />
    <router-view
      v-loading="!flag"
      :diray="diary"
      :one="oneInfo"
      :date="date"
      @handle-next="nextPage"
    />
  </div>
</template>
<script lang='ts'>
import { defineComponent, inject, onMounted, ref, watch } from "vue";
import { useDiary } from "../hooks/useDiary";
import { useOne } from "../hooks/useOne";

export default defineComponent({
  setup: async () => {
    onMounted(() => {});

    let { diary, date, handleNext } = await useDiary();
    let { oneInfo, handleNextOne } = await useOne();
    let flag = diary.content || oneInfo.newsList;
    function nextPage(type: string) {
      return type === "one" ? handleNextOne() : handleNext();
    }

    return {
      flag,
      oneInfo,
      diary,
      date,
      nextPage,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "papercss/dist/paper.css";
@import "papercss/dist/paper.min.css";
</style>