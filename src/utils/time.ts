// [00: 31.900]
// [04:25.610]
export function formatSeconds(value: number) {
    var secondTime: string | number = value.toFixed(3) // 秒
    var minuteTime: string | number = 0 // 分

    var result = ''
    if (value < 60) {
        result = '00:' + secondTime.toString()
    } else {
        minuteTime = Number(secondTime) / 60
        secondTime = Number(secondTime) % 60
        result = '0' + parseInt(minuteTime.toString()) + ':' + secondTime
    }
    return result
}

export function toSeconds(value: string) {
    var secondTime: number | string = Number(value.split(':')[1])
    var minuteTime: number | string = Number(value.split(':')[0]) * 60
    return (minuteTime + secondTime).toFixed(3)
}

