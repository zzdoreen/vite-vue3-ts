
import { ref, reactive } from 'vue'
import { getData } from "../api/api";
import { toSeconds } from '../utils/time'
export async function useMusic() {
    let datas: any = await getData(2, "", {});
    let music = reactive({ value: datas.data.data });

    let music_id = ref(music.value.url.split("?id=")[1]);
    let lyric: any = await getData(3, "", {
        type: "lyric",
        id: music_id.value,
    });
    let arr = lyric.data.lrc.lyric.split('\n')
    let obj: any = []
    arr.forEach((element: string) => {
        let key = toSeconds(element.split(']')[0].slice(1))
        let value = element.split(']')[1]
        obj.push({ text: value, time: key })
    });

    let music_lyric = reactive({ lyric: obj });
    let index = ref(0)

    function handleChangeMusic() {
        index.value = 0
        getData(2, "", {}).then((res: any) => {
            music.value = res.data.data;
            music_id.value = music.value.url.split("?id=")[1];
            console.log(music_id);
            getData(3, "", {
                type: "lyric",
                id: music_id.value,
            }).then((lrc: any) => {
                arr = lrc.data.lrc.lyric.split('\n');
                obj = []
                arr.forEach((element: string) => {
                    let key = toSeconds(element.split(']')[0].slice(1))
                    let value = element.split(']')[1]
                    obj.push({ text: value, time: key })
                });
                music_lyric.lyric = obj
                // lyricData = obj
                console.log(obj)
            });
        });
    }

    return { handleChangeMusic, index, obj, music, music_lyric }
}
