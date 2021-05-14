import { reactive } from "vue";
import { getData } from "../api/api";

export async function useOne() {
    let data: any = await getData(4, "", {});
    let oneInfo = reactive({ newsList: (data as any).data.newslist[0] });

    function handleNextOne() {
        getData(4, "", {}).then((res: any) => {
            oneInfo.newsList = res.data.newslist[0];
        });
    }
    return { oneInfo, handleNextOne };
}