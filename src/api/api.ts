import { get } from './http'
export const getData = (url: string, params: any) => get(url, params)