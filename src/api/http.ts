import axios from 'axios'

// axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/data'
axios.defaults.timeout = 10000

export function get(type: number, url: string, params: any) {
    if (type === 1) {
        url = '/api' + url
    } else {
        url = 'https://api.uomg.com/api/rand.music?format=json&sort=%E7%83%AD%E6%AD%8C%E6%A6%9C'
        // url = '/music-api' + url
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