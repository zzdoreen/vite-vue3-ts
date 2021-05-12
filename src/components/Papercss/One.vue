<template>
  <div class="contain">
    <div class="card" style="width: 20rem">
      <img
        ref="image"
        :src="oneInfo.newsList.imgurl"
        alt="Card example image"
      />

      <div class="card-body">
        <h4 class="card-title">
          {{ oneInfo.newsList.wordfrom ? oneInfo.newsList.wordfrom : "--" }}
        </h4>
        <h5 class="card-subtitle">
          {{ oneInfo.newsList.imgauthor + " " + oneInfo.newsList.date }}
        </h5>
        <p class="card-text">
          {{ oneInfo.newsList.word }}
        </p>
        <button @click="handleNextOne">next one !</button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import "papercss/dist/paper.css";
import "papercss/dist/paper.min.css";
import { defineComponent, ref, onMounted, reactive } from "vue";
import { getData } from "../../api/api";

export default defineComponent({
  setup: async () => {
    onMounted(() => {});
    let data: any = await getData(4, "", {});
    let oneInfo = reactive({ newsList: (data as any).data.newslist[0] });

    function handleNextOne() {
      getData(4, "", {}).then((res: any) => {
        oneInfo.newsList = res.data.newslist[0];
      });
    }
    return { oneInfo, handleNextOne };
  },
});
</script>
<style lang="scss" scoped>
.card {
  margin-top: 70px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>