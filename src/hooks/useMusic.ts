
import { ref, reactive } from 'vue'
import { getData } from "../api/api";
import { toSeconds } from '../utils/time'
export async function useMusic() {
    let datas: any = await getData(2, "", {});
    let music = reactive({ value: datas.data.data });
    console.log('datas', datas)
    let music_id = ref(music.value.url.split("?id=")[1]);
    // let lyric: any = await getData(3, "", {
    //     type: "lyric",
    //     id: music_id.value,
    // });
    // console.log(lyric)
    // let arr = lyric.data.lrc.lyric.split('\n')
    let obj: any = reactive({ data: [] })
    // arr.forEach((element: string) => {
    //     let key = toSeconds(element.split(']')[0].slice(1))
    //     let value = element.split(']')[1]
    //     obj.data.push({ text: value, time: key })
    // });

    let index = ref(0)

    function handleChangeMusic() {
        index.value = 0
        obj.data = []
        getData(2, "", {}).then((res: any) => {
            music.value = res.data.data;
            music_id.value = music.value.url.split("?id=")[1];
            console.log(music_id);
            // getData(3, "", {
            //     type: "lyric",
            //     id: music_id.value,
            // }).then((lrc: any) => {
            //     arr = lrc.data.lrc.lyric.split('\n');

            //     arr.forEach((element: string) => {
            //         let key = toSeconds(element.split(']')[0].slice(1))
            //         let value = element.split(']')[1]
            //         obj.data.push({ text: value, time: key })
            //     });
            // });
        });
    }

    return { handleChangeMusic, index, obj, music }
}
