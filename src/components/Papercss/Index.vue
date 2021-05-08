<template>
  <div class="contain">
    <h1 class="article-title"><a @click.prevent href="">Article Title</a></h1>
    <p class="article-meta">
      Written by
      <a @click.prevent>doreen</a>
    </p>
    <p class="text-lead">手绘风格的<kbd>ui</kbd>样式，英文字体也好看</p>
    <code> function (){ console.log('hello world') } </code>
    <br />
    <br />
    <hr />
    <br />
    <button class="border border-primary">hello</button>
    <button class="border border-2 border-secondary">hello</button>
    <button class="border border-3 border-success">hello</button>
    <button class="border border-4 border-warning">hello</button>
    <button class="border border-5 border-danger">hello</button>
    <button class="border border-6 border-white">hello</button>
  </div>
</template>
<script lang='ts'>
import "papercss/dist/paper.css";
import "papercss/dist/paper.min.css";
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  setup: async () => {
    onMounted(() => {});

    /*   let list = await getData(4, "/xlive/web-interface/v1/webMain/getList", {
      platform: "web",
    }); */

    return {};
  },
});
</script>
<style lang="scss" scoped>
::v-deep .border {
  margin-left: 20px;
}
</style>