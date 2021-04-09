<template>
  <div class="text">
    <span>雨纷纷</span>
    <el-divider direction="vertical"></el-divider>
    <span>旧故里</span>
    <el-divider direction="vertical"></el-divider>
    <span>草木深</span>
  </div>
</template>

<script lang="ts">
import { time, handleChange } from "../hooks/useDatas";
import { ref, defineComponent, reactive } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  setup: () => {
    let { count, handleCountAdd } = useCount();
    let datas = reactive({
      name: "doreen",
      info: {
        age: 23,
        sex: "女",
      },
    });
    return { count, handleCountAdd, datas, time, handleChange };
  },
});
function useCount(): any {
  const count = ref(0);
  function handleCountAdd() {
    count.value++;
    console.log(count.value);
  }
  return { count, handleCountAdd };
}
</script>
<style lang="scss" scoped>
.text {
  color: red;
}
</style>