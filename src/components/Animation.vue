<template>
    <div class="container">
        <svg
            ref="svg"
            version="1.1"
            id="svg"
            width="100vw"
            height="100vh"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="light">
                <g>
                    <radialGradient
                        id="SVGID_1_"
                        cx="580.5708"
                        cy="330.8928"
                        r="257.2822"
                        fx="470.0911"
                        fy="563.2468"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.1569" style="stop-color:#F1C593" />
                        <stop offset="1" style="stop-color:#CB332B" />
                    </radialGradient>
                    <path
                        fill="url(#SVGID_1_)"
                        d="M427.94,167.181l-74.628,290.46l261.747,118.223c0,0,159.03-198.845,187.478-271.878
			c0,0,44.794-113.208-126.219-187.298C676.318,116.689,466.937,20.976,427.94,167.181z"
                    />

                    <radialGradient
                        id="SVGID_2_"
                        cx="484.1505"
                        cy="516.197"
                        r="192.6884"
                        fx="485.5024"
                        fy="420.1404"
                        gradientTransform="matrix(0.9291 0.3698 -0.1937 0.4867 134.3187 85.9354)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.2763" style="stop-color:#F9DC8D" />
                        <stop offset="0.6608" style="stop-color:#EFAE3B" />
                    </radialGradient>
                    <path
                        fill="url(#SVGID_2_)"
                        d="M615.059,575.864c-12.044,23.706-82.826,18.543-154.879-14.484
			c-80.556-36.925-118.913-80.032-106.869-103.738s91.923-21.983,162.587,13.92S627.103,552.158,615.059,575.864z"
                    />
                    <radialGradient
                        id="SVGID_3_"
                        cx="512.8211"
                        cy="272.6941"
                        r="134.7785"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.1569" style="stop-color:#C9643B" />
                        <stop offset="1" style="stop-color:#B83838" />
                    </radialGradient>
                    <path
                        fill="url(#SVGID_3_)"
                        d="M595.131,100.777c0,0-89.853,40.039-164.62,343.383l2.851,0.452
			C433.362,444.611,489.83,178.351,595.131,100.777z"
                    />
                    <radialGradient
                        id="SVGID_4_"
                        cx="668.8254"
                        cy="346.6765"
                        r="134.697"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.1569" style="stop-color:#C9643B" />
                        <stop offset="1" style="stop-color:#B83838" />
                    </radialGradient>
                    <path
                        fill="url(#SVGID_4_)"
                        d="M752.367,176.144c0,0,27.593,97.104-167.575,341.066l-0.85-1.114
			C583.943,516.095,754.914,306.909,752.367,176.144z"
                    />
                    <linearGradient
                        id="SVGID_5_"
                        gradientUnits="userSpaceOnUse"
                        x1="316.899"
                        y1="697.691"
                        x2="458.9744"
                        y2="697.691"
                    >
                        <stop offset="0" style="stop-color:#F09E73" />
                        <stop offset="1" style="stop-color:#CB332B" />
                    </linearGradient>
                    <path
                        fill="url(#SVGID_5_)"
                        d="M392.722,598.283c-1.782,3.297,53.605,27.477,66.252,29.247
			c-6.17,7.393-19.513,17.471-40.479,80.235c-10.284,30.786-19.134,57.4-45.476,89.334c-8.373-4.824-31.684-34.858-56.12-44.018
			c0,0,25.845-37.413,37.357-64.395C368.88,654.41,376.882,618.075,392.722,598.283z"
                    />
                    <radialGradient
                        id="SVGID_6_"
                        cx="453.5772"
                        cy="543.9395"
                        r="64.5634"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.1569" style="stop-color:#C9643B" />
                        <stop offset="1" style="stop-color:#B83838" />
                    </radialGradient>

                    <path
                        fill="none"
                        stroke="url(#SVGID_6_)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="
			M496.085,464.665c0,0-77.483,140.499-85.015,158.549"
                    />
                </g>
            </g>
            <use class="lights" href="#light" x="0" y="50" />
            <use class="lights" href="#light" x="300" y="400" />
            <use class="lights" href="#light" x="500" y="300" />
            <use class="lights" href="#light" x="900" y="100" />
            <use class="lights" href="#light" x="1200" y="0" />
            <use class="lights" href="#light" x="800" y="450" />
            <use class="lights" href="#light" x="1200" y="500" />
        </svg>
        <el-button round class="btn-right" @click="handleNextClick" icon="el-icon-arrow-right"></el-button>
        <el-button round class="btn-left" @click="handlePrevClick" icon="el-icon-arrow-left"></el-button>
    </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
    setup: () => {
        let svg = ref(null)
        let datas = ''
        onMounted(() => {
            datas = (svg.value as any).innerHTML
        })
        function handleNextClick() {
            (svg.value as any).innerHTML = ''
        }
        function handlePrevClick() {
            if (!(svg.value as any).innerHTML) {
                (svg.value as any).innerHTML = datas
            }

        }
        return { svg, handleNextClick, handlePrevClick }
    }

})
</script>
<style lang="scss" scoped>
.container {
    background: linear-gradient(to bottom, #4c58a4, #976986, #e27a67);
    height: 100vh;
    .btn-right {
        position: fixed;
        right: 0;
        top: 50%;
        opacity: 0;
        border: none;
        background: rgba(0, 0, 0, 0.3);
        color: white;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        text-align: center;
        margin: 0;
        padding: 0;
        &:hover {
            opacity: 1;
        }
    }
    .btn-left {
        position: fixed;
        left: 0;
        top: 50%;
        opacity: 0;
        border: none;
        background: rgba(0, 0, 0, 0.3);
        color: white;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        text-align: center;
        margin: 0;
        padding: 0;
        &:hover {
            opacity: 1;
        }
    }
}
#light {
    transform: scale(0.2);
    animation: play 2s ease-in-out infinite alternate;
}
.lights {
    &:nth-of-type(1) {
        transform: rotate(-24deg) scale(1.5) translate(150px, 100px);
        animation: play1 3s ease-in-out infinite alternate;
    }
    &:nth-of-type(2) {
        opacity: 0.6;
        transform: rotate(-40deg) scale(1.2) translate(-500px, 50px);
        animation: play2 1s ease-in-out infinite alternate;
    }
    &:nth-of-type(3) {
        transform: rotate(-20deg) scale(2) translate(-300px, -100px);
    }
    &:nth-of-type(4) {
        transform: scale(1.3) translate(-150px, -50px);
        animation: play4 0.5s ease-in-out infinite alternate;
    }
    &:nth-of-type(5) {
        opacity: 0.7;
        transform: scale(0.9) translate(300px, -250px) rotate(15deg);
    }
    &:nth-of-type(6) {
        opacity: 0.8;
        transform: scale(1.1) translate(-100px, 750px) rotate(-45deg);
        animation: play6 1s ease-in-out infinite alternate;
        animation-delay: 0.3s;
    }
}
@keyframes play {
    0% {
        transform: scale(0.2) translate(-100px, -50px);
    }
    50% {
        transform: scale(0.2) translate(0, 0px);
    }
    100% {
        transform: scale(0.2) translate(100px, -50px);
    }
}
@keyframes play1 {
    0% {
        transform: rotate(-24deg) scale(1.5) translate(100px, 50px);
    }
    50% {
        transform: rotate(-24deg) scale(1.5) translate(150px, 100px);
    }
    100% {
        transform: rotate(-24deg) scale(1.5) translate(200px, 50px);
    }
}
@keyframes play2 {
    0% {
        opacity: 0.6;
        transform: rotate(-40deg) scale(1.2) translate(-475px, 0px);
    }
    100% {
        opacity: 0.6;
        transform: rotate(-40deg) scale(1.2) translate(-500px, 0px);
    }
}
@keyframes play4 {
    0% {
        transform: scale(1.3) translate(-155px, -50px);
    }
    100% {
        transform: scale(1.3) translate(-150px, -50px);
    }
}
@keyframes play6 {
    0% {
        opacity: 0.8;
        transform: scale(1.1) translate(-100px, 775px) rotate(-45deg);
    }
    100% {
        opacity: 0.8;
        transform: scale(1.1) translate(-100px, 750px) rotate(-45deg);
    }
}
</style>