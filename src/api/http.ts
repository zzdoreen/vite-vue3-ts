import axios from 'axios'

// axios.defaults.baseT1URL = '/api'//'http://rap2api.taobao.org/app/mock/data'  不代理
axios.defaults.timeout = 10000

export function get(type: number, url: string, params: any) {
    // if (type === 1) {
    //     url = '/api' + url
    //     console.log('1', url)
    // } else {
    //     url = '/music-api' + url
    //     console.log('2', url)
    // }

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
