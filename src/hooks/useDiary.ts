import { reactive, ref } from "vue";
import { getData } from "../api/api";
import EasyDate from "../utils/EasyDate";

export async function useDiary() {
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
}