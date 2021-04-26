import { get } from './http'
export const getData = (type: number, url: string, params: any) => get(type, url, params)