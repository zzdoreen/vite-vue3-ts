# [效果展示](https://zzdoreen.github.io/vite-vue3-ts/dist/index#/login)
> `vue-router`路由配置的时候要选择`hash`模式,打包后才能在`GitHubPage`里面正常显示



### Music Page

#### API文档

+ [网易云音乐随机歌曲](https://www.free-api.com/doc/302)

> 接口说明  

| | |
|  :----  | :----:  |
| 地址 | https://api.uomg.com/api/rand.music |
| 返回格式 | json / mp3 |
|  请求方式  | get / post  |

---

> 请求参数

| 名称 | 类型 | 必填 | 描述 |
|  :----  | :----:  | :----:  | :----:  |
| sort | string | 选填 | 默认为热歌榜 [热歌榜,新歌榜,飙升榜,抖音榜,电音榜] |
| mid | int | 选填 | 网易云歌单ID |
| format | string | 选填 | 选择输出的格式 |

---

> 返回参数

| 名称 | 类型 |   描述 |
|  :----  | :----: | :----:  |
| code | string | 状态码 |
| name | string | 歌曲名称 |
| url | string |  歌曲地址 |
| picurl | string |  歌曲封面地址 |

---

> 返回示例

```json
{
    "code": 1,
    "data": {
        "name": "江南",
        "url": "http://music.163.com/song/media/outer/url?id=26305527",
        "picurl": "http://p4.music.126.net/CcthX_ZCexIdriZADoNn3g==/109951165628166191.jpg",
        "artistsname": "林俊杰"
    }
}
```

+ 歌词接口

> 接口说明  

| | |
|  :----  | :----:  |
| 地址 | https://api.imjad.cn/cloudmusic |
| 返回格式 | json |
|  请求方式  | get / post  |

---

> 请求参数

| 名称 | 类型 | 必填 | 描述 |
|  :----  | :----:  | :----:  | :----:  |
| type | string | 必填 | 值为`lyric`时，返回歌词 |
| id | int | 必填 | 网易云歌区ID |

---

> 返回参数

| 名称 | | 类型 |   描述 |
|  :----  | :----: | :----: | :----:  |
| code | | string | 状态码 |
| lrc | | object |  歌词数据 |
| | version| int | 版本 |
| | lyric| string | 歌词 |

---

> 返回示例

```json
{
    "sgc": false,
    "sfy": false,
    "qfy": false,
    "lrc": {
        "version": 8,
        "lyric": "[00:00.000] 作曲 : 祝何\n[00:00.693] 作词 : 祝何\n[00:02.80]编曲 Arranger：祝何\n[00:06.84]楚河流沙几聚散 日月沧桑尽变换\n[00:35.08]乱世多少红颜换一声长叹\n[00:40.38]谁曾巨鹿踏破了秦关 千里兵戈血染\n[00:46.45]终究也不过是风轻云淡\n[00:51.51]长枪策马平天下 此番诀别却为难\n[00:57.72]一声虞兮虞兮泪眼已潸然\n[01:03.07]与君共饮这杯中冷暖 西风彻夜回忆吹不断\n[01:09.38]醉里挑灯看剑 妾舞阑珊\n[01:14.91]垓下一曲离乱 楚歌声四方\n[01:20.31]含悲 辞君 饮剑 血落凝寒霜\n[01:25.87]难舍一段过往 缘尽又何妨\n[01:31.77]与你魂归之处便是苍茫\n[02:00.25]长枪策马平天下 此番诀别却为难\n[02:06.17]一声虞兮虞兮泪眼已潸然\n[02:11.70]与君共饮这杯中冷暖 西风彻夜回忆吹不断\n[02:18.00]醉里挑灯看剑 妾舞阑珊\n[02:23.25]垓下一曲离乱 楚歌声四方\n[02:28.74]含悲 辞君 饮剑 血落凝寒霜\n[02:34.73]难舍一段过往 缘尽又何妨\n[02:40.11]与你魂归之处便是苍茫\n[02:46.39]汉兵刀剑纷乱 折断了月光\n[02:51.55]江畔 只身 孤舟 余生不思量\n[02:57.42]难舍一段过往 缘尽又何妨\n[03:03.01]与你来生共寄山高水长\n[03:13.11]混音师 Mixing Engineer：唐瑜\n[03:13.78]和声 Backing vocals：田跃君\n[03:14.24]制作人 Produced by ：蒋雪儿 Snow.J\n[03:14.67]监制 Executive producer: 蒋雪儿 Snow.J\n[03:15.18]OP/SP ：乐无限 ETERNAL MUSIC\n[03:15.90]【未经授权不得翻唱或使用】\n"
    },
    "klyric": {
        "version": 0,
        "lyric": null
    },
    "tlyric": {
        "version": 0,
        "lyric": null
    },
    "code": 200
}
```

#### 基本思路

##### 音乐播放 —— [audio](https://www.w3school.com.cn/jsref/dom_obj_audio.asp)

> html内添加audio标签进行相关配置  

```html
<audio
    ref="audio"
    autoplay
    @pause="handlePause"
    @play="handlePlay"
    @timeupdate="handleMusicTimeChange"
    :src="music.value.url"
></audio>

<!-- 

    绑定ref方便用js对Audio对象进行操作
    
    用到的属性：
        autoplay 是否自动播放
        src 音频地址
    
    用到的方法：
        pause 暂停当前播放的音频时触发
        play  开始播放音频时触发
        timeupdate 播放位置发生改变时触发
 -->

```

##### 歌词获取和展示

1. 首先将获取随机歌曲和歌词数据的方法封装成一个方法

```typescript

import { ref, reactive } from 'vue'
import { getData } from "../api/api";
import { toSeconds } from '../utils/time'
export async function useMusic() {

    // 随机歌曲相关信息获取
    let datas: any = await getData(2, "", {});
    let music = reactive({ value: datas.data.data });
    let music_id = ref(music.value.url.split("?id=")[1]);

    // 歌词通过歌曲id获取
    let lyric: any = await getData(3, "", {
        type: "lyric",
        id: music_id.value,
    });
    // 对歌词数据进行处理 [{text:'歌词',time:2.333 (歌词开始秒数)},...] 
    let arr = lyric.data.lrc.lyric.split('\n')
    let obj: any = reactive({ data: [] })
    arr.forEach((element: string) => {
        let key = toSeconds(element.split(']')[0].slice(1))
        let value = element.split(']')[1]
        obj.data.push({ text: value, time: key })
    });

    // 设置一个index作为歌词数据的索引
    let index = ref(0)

    return { index, obj, music }
}

```

2. 对audio标签绑定ref，对audio对象进行操作。

+ 对`timeupdate`事件进行监听
  + 通过`audio.value.currentTime`获取到当前播放的秒数
  + 从前向后与歌词数据 (`obj.data[index.value + 1].time`) 的`time`进行对比
  + 如果当前秒数小于当前索引的歌词数据的秒数、就展示该条歌词数据；否则`index++`与下一条数据进行比较

```typescript
export default defineComponent({
  setup: async () => {
    // 在异步组合api中，生命周期函数必须写在 数据/方法前面 
    onMounted(() => {});

    let { index,obj,music } = await useMusic();

    // 绑定audio对象
    let audio = ref(); 

    // 每条歌词数据
    let msg = obj.data && obj.data[0].text ? ref(obj.data[0].text) : ref(" ");

    // 进度条改变触发事件
    function handleMusicTimeChange() {
      if (audio.value.currentTime >= obj.data[index.value + 1].time) {
        index.value++;
      }
      msg.value = obj.data[index.value].text;
      
    }
    return {
      msg,
      index,
      obj,
      audio,
      music,
      handleMusicTimeChange,
    };
  },
});

```

##### 未解决的问题

```JavaScript
 /**
  * 目前的播放器进度条不能进行控制 控制之后 不知道怎么获取对应索引的歌词
  * （ 
  * 进度条长度和音频总时长是按比例的
  * 所以进度条播放位置发生改变时 timeupdate对于不同长度的歌曲触发秒数间隔都是不一样的
  * currentTime也不一定能和time对应上 所以不知道怎么获取到歌词
  * 
  * 不知道怎么实现, 所以就没展示audio的控件(controls) 
  * ）
 */
```

