import { ref } from 'vue'
let time = ref("00:00:00");
let handleChange = () => {
    let date = new Date();
    const hour =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const min =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const sec =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time.value = hour + ":" + min + ":" + sec;
    setTimeout(() => {
        handleChange()
    }, 1000);
};
export { time, handleChange }