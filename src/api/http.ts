import axios from 'axios'

// axios.defaults.baseT1URL = '/api'//'http://rap2api.taobao.org/app/mock/data'  不代理
axios.defaults.timeout = 10000

export function get(type: number, url: string, params: any) {
    // axios.defaults.baseT1URL = ''
    if (type === 1) {
        url = '/api' + url
        console.log('1', url)
    } else {
        url = '/music-api' + url
        console.log('2', url)
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

export function musicGet() {

}