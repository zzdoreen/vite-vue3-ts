<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="4" v-for="(items, key) in color" :key="key">
        <el-card>
          <div class="box-card">
            <div
              class="circle"
              :style="`background:linear-gradient(to top, ${items.join(',')})`"
            ></div>
            <div class="rect">
              <div
                class="inner-rect"
                :style="`background: ${item};`"
                v-for="(item, index) in items"
                :key="'item' + String(index)"
              >
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, customRef } from "vue";
import { getData } from "../api/api";
export default defineComponent({
  setup: async () => {
    let datas: any = await getData(1, "/1531382", { scope: "response" });
    let color = reactive(JSON.parse(JSON.stringify(datas.data.data.color)));
    return { color };
  },
});
</script>
<style lang="scss" scoped>
.container {
  margin: 20px;
  .el-card {
    margin-bottom: 20px;
    height: 300px;
    position: relative;
  }
  .box-card {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    text-align: center;
    .circle {
      width: 100%;
      height: 200px;
      border-radius: 10px;
      transform: scale(0.7);
    }
    .rect {
      margin-left: 10%;
      width: 80%;
      height: 50px;
      display: flex;
      line-height: 50px;
      font-size: 12px;
      cursor: pointer;
      .inner-rect {
        width: 50%;
        span {
          opacity: 0;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>