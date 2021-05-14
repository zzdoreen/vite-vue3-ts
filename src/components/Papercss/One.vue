<template>
  <div class="contain">
    <div class="card" style="width: 20rem">
      <img ref="image" :src="one.newsList.imgurl" alt="Card example image" />

      <div class="card-body">
        <h4 class="card-title">
          {{ one.newsList.wordfrom ? one.newsList.wordfrom : "--" }}
        </h4>
        <h5 class="card-subtitle">
          {{ one.newsList.imgauthor + " " + one.newsList.date }}
        </h5>
        <p class="card-text">
          {{ one.newsList.word }}
        </p>
        <button @click="handleNextOne">next one !</button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import "papercss/dist/paper.css";
import "papercss/dist/paper.min.css";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  props: {
    one: {
      required: true,
      type: Object,
    },
  },
  emits: ["handle-next"],
  setup: (props, context) => {
    onMounted(() => {});
    // console.log("one----", props.one);
    function handleNextOne() {
      context.emit("handle-next", "one");
    }
    return { handleNextOne };
  },
});
</script>
<style lang="scss" scoped>
.card {
  margin-top: 70px;
  left: 50%;
  margin-left: -10rem;
  text-align: center;
}
</style>