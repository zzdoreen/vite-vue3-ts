<template>
  <div class="contain">
    <div class="card" style="width: 20rem">
      <div class="card-body">
        <h4 class="card-title">舔狗日记</h4>
        <h5 class="card-subtitle">{{ date }}</h5>
        <p class="card-text">
          {{ diary.content }}
        </p>
        <button class="card-link" @click="handleNext">next diary !</button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import "papercss/dist/paper.css";
import "papercss/dist/paper.min.css";
import { defineComponent, ref, onMounted, reactive } from "vue";
import { getData } from "../../api/api";
import EasyDate from "../../utils/EasyDate";

export default defineComponent({
  setup: async () => {
    onMounted(() => {});
    let data: any = await getData(5, "", {});
    let diary = reactive(data.data.newslist[0]);
    let date: any = ref(new EasyDate().format("yyyy-MM-dd"));
    let index = 0;
    function handleNext() {
      getData(5, "", {}).then((res: any) => {
        diary.content = res.data.newslist[0].content;
        date.value = new EasyDate(new EasyDate().intervalNDay(--index)).format(
          "yyyy-MM-dd"
        );
      });
    }

    return { diary, date, handleNext };
  },
});
</script>
<style lang="scss" scoped>
.card {
  margin-top: 70px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  .card-text {
    text-indent: 2em;
    text-align: left;
  }
}
</style>