<template>
  <div ref="div_box">
    <gashapon v-show="count === 0" />
    <build v-show="count === 1" />
    <light v-show="count === 2" />
    <h1>暂未开发...</h1>
    <el-button
      round
      class="btn btn-right"
      @click="handleNextClick"
      icon="el-icon-arrow-right"
    ></el-button>
    <el-button
      round
      class="btn btn-left"
      @click="handlePrevClick"
      icon="el-icon-arrow-left"
    ></el-button>
  </div>
</template>
<script lang='ts'>
import Build from "./Illustration/Build.vue";
import Gashapon from "./Illustration/Gashapon.vue";
import Light from "./Illustration/Light.vue";
import { defineComponent, ref } from "vue";
import { ElMessageBox } from "element-plus";

export default defineComponent({
  components: {
    Build,
    Light,
    Gashapon,
  },
  setup: () => {
    let count = ref(0);
    function handleNextClick() {
      if (count.value < 3) {
        count.value++;
      } else {
        ElMessageBox.alert("别慌，等我在肝会儿", "提示");
      }
    }
    function handlePrevClick() {
      if (count.value) {
        count.value--;
      } else {
        ElMessageBox.alert("到顶了！", "提示");
      }
    }
    return { count, handleNextClick, handlePrevClick };
  },
});
</script>
<style lang="scss" scoped>
.btn {
  position: fixed;
  top: 50%;
  // opacity: 0;
  border: none;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  text-align: center;
  margin: 0 20px;
  padding: 0;
  // &:hover {
  //     opacity: 1;
  // }
}
.btn-right {
  right: 0;
}
.btn-left {
  left: 0;
}
</style>
