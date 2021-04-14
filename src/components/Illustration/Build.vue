<template>
    <div class="container">
        <div class="build">
            <svg version="1.1" width="100vw" height="70vh" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M 100,700
                L 100,300
                L 200,200
                L 300,300
                L 320,275
                L 340,300
                L 600,100
                L 620,120
                L 800,0
                L 1400,300
                L 1700,200
                L 1700,700
                Z"
                    fill="#649ECD"
                />
                <path
                    d="M 300,700
                L 300,400   
                L 450,300
                L 600,400
                Z"
                    fill="#6096C4"
                />
                <path
                    d="M 100,700
                L 700,250
                L 1300,700
                Z"
                    fill="#508BB3"
                />
                <path
                    d="M 0,200
                L 500,470 
                L 800,470
                L 1030,350
                L 1075,200
                L 1025,200
                L 1112.5,100
                L 1200,200
                L 1150,200
                L 1195,350
                L 1700,500
                L 1700,900
                L 0,900
                "
                    fill="#14222d"
                    stroke="#14222d"
                />
                <defs>
                    <g id="tree">
                        <path d="M 0,250
                L 25,100
                L 50,250" />
                    </g>
                </defs>
                <g id="trees1">
                    <use href="#tree" x="150" y="60" fill="#14222d" />
                    <use href="#tree" x="190" y="120" fill="#14222d" />
                    <use href="#tree" x="900" y="220" fill="#14222d" />
                    <use href="#tree" x="1300" y="150" fill="#14222d" />
                    <use href="#tree" x="1400" y="250" fill="#14222d" />
                </g>
                <g id="trees2">
                    <use href="#tree" x="1000" y="620" fill="#508BB3" transform="scale(.5)" />
                    <use href="#tree" x="1200" y="420" fill="#508BB3" transform="scale(.5)" />
                    <use href="#tree" x="1150" y="500" fill="#508BB3" transform="scale(.5)" />
                    <use href="#tree" x="1500" y="420" fill="#508BB3" transform="scale(.5)" />
                    <use href="#tree" x="1600" y="520" fill="#508BB3" transform="scale(.5)" />
                    <use href="#tree" x="1660" y="520" fill="#508BB3" transform="scale(.5)" />
                </g>
                <g id="trees3">
                    <use href="#tree" x="1300" y="900" transform="scale(.3)" fill="#6096C4" />
                    <use href="#tree" x="1250" y="950" transform="scale(.3)" fill="#6096C4" />
                    <use href="#tree" x="1150" y="1025" transform="scale(.3)" fill="#6096C4" />
                    <use href="#tree" x="1750" y="980" transform="scale(.3)" fill="#6096C4" />
                    <use href="#tree" x="1550" y="880" transform="scale(.3)" fill="#6096C4" />
                </g>
                <g>
                    <rect
                        x="950"
                        y="150"
                        width="300"
                        height="50"
                        stroke="#14222d"
                        fill="none"
                        stroke-width="5"
                        transform="rotation"
                    >
                        <animateTransform
                            attributeType="XML"
                            attributeName="transform"
                            begin="0s"
                            dur="5s"
                            type="rotate"
                            from="0 1100 175"
                            to="270 1100 175"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        id="windmill"
                        x="950"
                        y="150"
                        width="300"
                        height="50"
                        stroke="#14222d"
                        fill="none"
                        stroke-width="5"
                        transform="rotation"
                    >
                        <animateTransform
                            attributeType="XML"
                            attributeName="transform"
                            begin="0s"
                            dur="5s"
                            type="rotate"
                            from="90 1100 175"
                            to="360 1100 175"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <!-- <line x1="830" y1="100" x2="830" y2="150" stroke="#14222d" stroke-width="5" />
                    <line x1="860" y1="100" x2="860" y2="150" stroke="#14222d" stroke-width="5" />
                    <line x1="890" y1="100" x2="890" y2="150" stroke="#14222d" stroke-width="5" />
                    <line x1="920" y1="100" x2="920" y2="150" stroke="#14222d" stroke-width="5" />
                    <line x1="950" y1="100" x2="950" y2="150" stroke="#14222d" stroke-width="5" />
                    <line x1="980" y1="100" x2="980" y2="150" stroke="#14222d" stroke-width="5" />
                    <line x1="1010" y1="100" x2="1010" y2="150" stroke="#14222d" stroke-width="5" />
                    <line x1="1070" y1="100" x2="1070" y2="150" stroke="#14222d" stroke-width="5" />
                    <line x1="1040" y1="100" x2="1040" y2="150" stroke="#14222d" stroke-width="5" />-->
                </g>
            </svg>
        </div>
        <div class="moon"></div>
        <div class="snow">
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
            <div class="snow_item"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$bgColor: #81b6de;
$themeColor: #14222d;
.container {
    background: $bgColor;
    height: 100vh;
    .build {
        position: absolute;
        bottom: 0;
    }
    .moon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: rgb(238, 231, 231);
        opacity: 0.7;
        box-shadow: 0 0 30px white;
        position: absolute;
        top: 200px;
        left: 300px;
    }
    .snow {
        position: absolute;
        width: 100%;
        height: 100%;
        .snow_item {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: white;
            top: 30px;
            left: 50px;
            animation: snow_animation 5s infinite;
            &:nth-of-type(1) {
                top: 50px;
                right: 140px;
                animation-delay: 3s;
            }
            &:nth-of-type(2) {
                top: 0px;
                right: 50px;
                animation-delay: 3s;
            }
            &:nth-of-type(3) {
                top: 50px;
                right: 140px;
                animation-delay: 1.3s;
            }
            &:nth-of-type(4) {
                top: 50px;
                left: 1040px;
                animation-delay: 3s;
            }
            &:nth-of-type(6) {
                top: 0px;
                left: 840px;
            }
            &:nth-of-type(7) {
                top: 150px;
                left: 640px;
                animation-delay: 2.3s;
            }
            &:nth-of-type(8) {
                top: 90px;
                left: 350px;
                animation-delay: 1.3s;
            }
            &:nth-of-type(9) {
                top: 100px;
                right: 140px;
                animation-delay: 1s;
            }
            &:nth-of-type(10) {
                top: 150px;
                left: 400px;
                animation-delay: 0.5s;
            }
            &:nth-of-type(11) {
                top: 0px;
                left: 900px;
                animation-delay: 1.5s;
            }
            &:nth-of-type(12) {
                top: 20px;
                left: 760px;
                animation-delay: 0.7s;
            }
            &:nth-of-type(13) {
                top: 20px;
                right: 160px;
                animation-delay: 0.7s;
            }
            &:nth-of-type(14) {
                top: 40px;
                right: 60px;
                animation-delay: 1.7s;
            }
        }
    }
}

@keyframes snow_animation {
    from {
        opacity: 1;
        transform: translate(0, 0);
    }
    to {
        opacity: 0;
        transform: translate(100px, 400px);
    }
}
</style>