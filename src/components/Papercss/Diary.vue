<template>
  <div class="contain">
    <div class="card" style="width: 20rem">
      <div class="card-body">
        <h4 class="card-title">舔狗日记</h4>
        <h5 class="card-subtitle">{{ date }}</h5>
        <p class="card-text">
          {{ diray.content }}
        </p>
        <button class="card-link" @click="handleNext">next diary !</button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import "papercss/dist/paper.css";
import "papercss/dist/paper.min.css";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  emits: ["handle-next"],
  props: {
    diray: {
      type: Object,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  setup: (props, context) => {
    onMounted(() => {});
    // console.log("diray----", props.diray, props.date);
    function handleNext() {
      context.emit("handle-next",'diray');
    }

    return { handleNext };
  },
});
</script>
<style lang="scss" scoped>
.card {
  margin-top: 70px;
  left: 50%;
  margin-left: -10rem;
  text-align: center;
  .card-text {
    text-indent: 2em;
    text-align: left;
  }
}
</style>