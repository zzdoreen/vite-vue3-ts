<template>
  <div>
    <h1>{{ par }}</h1>
    <!-- <error-component :name="str" :age="count" @~="emitFun" /> -->
    <!-- <router-link to='null'></router-link> -->
    <router-link to="/undefined/null">1111</router-link>
    <!-- <h1>hhh</h1> -->
    <!-- <component :is="asyncPage"></component> -->
    <!-- <asyncPage /> -->
  </div>
</template>
<script lang="ts">
import ErrorComponent from "./common/ErrorComponent.vue";
import LoadingComponent from "./common/LoadingComponent.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    ErrorComponent,
  },
  setup: () => {
    let str = ref("doreen");
    let count = ref(0);
    let par = ref("");
    function emitFun(val: string) {
      console.log("parents", val);
      par.value = val;
    }
    return { par, str, count, emitFun };
  },
});
// const asyncPage = defineAsyncComponent({
//   loader: () => import("./text/Demo.vue"),
//   delay: 1000,
//   timeout: 3000,
//   errorComponent: ErrorComponent,
//   loadingComponent: LoadingComponent,
// });
// export default asyncPage;
</script>
<style lang="scss" scoped>
</style>