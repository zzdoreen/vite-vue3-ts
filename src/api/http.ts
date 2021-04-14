import axios from 'axios'

axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/data'
axios.defaults.timeout = 10000

export function get(url: string, params: any) {
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