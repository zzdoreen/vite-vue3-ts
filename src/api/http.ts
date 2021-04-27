import axios from 'axios'

// axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/data'
axios.defaults.timeout = 10000

export function get(type: number, url: string, params: any) {
    switch (type) {
        case 1: url = '/api' + url; break;
        case 2: url = '/music-api' + url; break;
        case 3: url = '/music-lyric' + url; break
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