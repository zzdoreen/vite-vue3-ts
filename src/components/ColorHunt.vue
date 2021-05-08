<template>
    <div class="container">
        <el-row :gutter="20">
            <el-col :span="4" v-for="(items,key) in color" :key="key">
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
                                v-for="(item,index) in items"
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
import { defineComponent, reactive, customRef } from 'vue'
import { getData } from '../api/api'
export default defineComponent({
    setup: async () => {
        // let datas: any = await getData('/1531382', { scope: 'response' })
        // console.log('color', datas.data.data.color)
        let color = [
            [
                "#d9afd9",
                "#97d9e1"
            ],
            [
                "#13547a",
                "#80d0c7"
            ],
            [
                "#473B7B",
                "#3584A7",
                "#30D2BE"
            ],
            [
                "#CBBACC",
                "#2580B3"
            ],
            [
                "#B6CEE8",
                "#F578DC"
            ],
            [
                "#FFE29F",
                "#FFA99F",
                "#FF719A"
            ],
            [
                "#798777",
                "#f8ede3"
            ],
            [
                "#754F44",
                "#EC7357"
            ],
            [
                "#046582",
                "#f39189"
            ],
            [
                "#56445D",
                "#C5E99B"
            ],
            [
                "#6C49B8",
                "#4FB0C6"
            ],
            [
                "#eb9f9f",
                "#f1bbba",
                "#f8ecc9",
                "#a79c8e"
            ]
        ]//reactive(JSON.parse(JSON.stringify(datas.data.data.color)))
        return { color }

    }
})


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