import axios from 'axios'

// axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/data'
axios.defaults.timeout = 10000

export function get(type: number, url: string, params: any) {
    switch (type) {
        // case 1: url = '/api' + url; break;
        case 2: url = 'https://api.uomg.com/api/rand.music?format=json&sort=%E7%83%AD%E6%AD%8C%E6%A6%9C' + url; break;
        case 3: url = 'https://api.imjad.cn/cloudmusic/' + url; break
        case 4: url = 'https://api.tianapi.com/txapi/one/index?key=7764228bedff0b2310879d47173c4603&rand=1' + url; break
        case 5: url = 'https://api.tianapi.com/txapi/tiangou/index?key=7764228bedff0b2310879d47173c4603' + url; break
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
