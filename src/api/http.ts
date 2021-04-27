import axios from 'axios'

// axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/data'
axios.defaults.timeout = 10000

export function get(type: number, url: string, params: any) {
    switch (type) {
        // case 1: url = '/api' + url; break;
        case 2: url = 'https://api.uomg.com/api/rand.music?format=json&mid=2343249232' + url; break;
        case 3: url = 'https://api.imjad.cn/cloudmusic/' + url; break
    }

    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}