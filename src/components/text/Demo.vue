<template>
  <div>
    <!-- <h1>{{ color.data }}</h1> -->
    <span v-for="item in color.data" :key="item">{{ item }}<br /></span>
    <el-button @click="handleChange">button</el-button>
  </div>
</template>
<script lang='ts'>
// import {  } from "node:fs";
import {
  watch,
  defineComponent,
  onErrorCaptured,
  reactive,
  computed,
} from "vue";
import { getData } from "../../api/api";

export default defineComponent({
  setup: async () => {
    let color: any = reactive({ data: [] });
    let datas: any = await getData(1,"/1531382", { scope: "response" });
    // console.log("color", datas.data.data.color);
    color.data = JSON.parse(JSON.stringify(datas.data.data.color));
    function handleChange() {
      color.data[1] = ["hhhh"];
    }
    // watch(color, (newV: any, oldV: any) => {
    // //   console.log(newV, oldV);
    // });
    computed({
      get: () => color.data[1],
      set: (val) => {
        color.data[1] = val;
        console.log('computed',color.data[1]);
      },
    });
    return { handleChange, color };
  },
});
</script>