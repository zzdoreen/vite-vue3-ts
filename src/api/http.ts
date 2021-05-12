import axios from 'axios'

// axios.defaults.baseT1URL = '/api'//'http://rap2api.taobao.org/app/mock/data'  不代理
axios.defaults.timeout = 10000

export function get(type: number, url: string, params: any) {

    switch (type) {
        case 1: url = '/api' + url; break;
        case 2: url = '/music-api' + url; break;
        case 3: url = '/music-lyric' + url; break
        case 4: url = '/one-api' + url; break
        case 5: url = '/diary-api' + url; break
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
