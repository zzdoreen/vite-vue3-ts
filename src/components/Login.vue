<template>
  <div class="cover">
    <div class="paint">
      <div class="sun"></div>
      <div class="mountain">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="contain-box">
      <div class="login-box">
        <div class="title">登录</div>
        <el-input
          class="input-style"
          v-model="username"
          placeholder="请输入名称"
        ></el-input>
        <el-input
          class="input-style"
          v-model="password"
          placeholder="请输入密码"
          show-password
        ></el-input>
        <router-link to="/home">
          <button class="input-style login-button" @click="handleLogin">
            登录
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  setup: () => {
    let username = ref("");
    let password = ref("");

    function handleLogin() {
      sessionStorage.setItem("username", username.value);
      sessionStorage.setItem("password", password.value);
      console.log(username.value, password.value);
    }

    console.log(`
                           -8                             
                6886%66 !6$$$61i!! 8833668        
             8&&$6&%%3%!%%%%i%$i88i6%%$88%8%$     
           888866%88$8&#866&&&3$i3$i88 $$%%#%%$   
        .888%3#&&$.$36i!68#!%!i!&!3$1$i  %%$&#%%  
       8&8&66&    11i!&#&#&&!ii36#!3u36   %8%&&%$8
     $%&&&68    8%3&$8$1$$$8$$$i3i$!3u%    %&z&&&$
  .8%8%66%     1u!&8$83*!!!-3-6&&&!3$13    8&8%&&#
 3&66!666        %6$u#!o;va!6&#8$6&33!u     && 8&%
8386 633       !$8%8n;^a----.+o-%%&3i3      6$ 8$#
 3! 6!!       i.&6 ^ *-.......-;!!v3  +     66 ^86
11  ii6   !   u6 8 6  - .;.... ii6ii  i     38  8$
 u  11    u    6  .~  ...    oai# u  ~~     6$  88
z   uu   .~    8     .oo +^8&8!%            6   86
a   *z    .    &u83nz. o; ^^#&&&i~         36   $%
a    o        i6i31!a  z. z*v!+---8----.+  6    %6
      +       i!6$%%&%3-+v^i+---%-------- 6     3!
              36&8%&$%&i8-.----o...-....6       3 
              6%$&&##&#&^33!33!u..+.            i 
             *8%#&&&&$&$$$$$&&$&%oi     .      z  
            ~6$%&&6#&&#&&&&&&33!3v            **  
           .83$%@!!%$##$6i$$$i!!@+           .-   
          +i&%%#%!6&!$$633&$$i33%           n     
     z - 3&1$&&n6i%$&&6#66#&8666                  
   i~z 6&1%$#&n63#66&!366!%&!36%....             i
    +;8.ui3$$$z !ii6!#%i$$&%!!6....z            i 
    *..#!3%$$$&&$$#$&&#&&&$%&$%z-.n              i
     ~~113%%$$&&&#&$$#&$$$#&&$$&#o           . u11
       nii%$&&#%%&&%&$8&&&#8#&&#$6!       .  uuu  
         ui&&#%&.#&6#&8&8##88!6###.      ^aa.     
         uu6!1i33!!$86&##666%!!i!!!i             a
          aai%3#&#!36!$3&#&!!6!3!!i&&!          + 
          %%%6!!!!!3383!366$$!$&&&&##&&$          
        %au1i!!!!!!3#@&366666&3!!!##&&&$$%3       
      ^%##&!ii!3&@@#$@66##3!!!!!!&@##$$&$%6!1u    
        `);
    return { username, password, handleLogin };
  },
});
</script>
<style lang="scss" >
$logincolor: rgb(71, 102, 148);
$treeColor: #40789c;
.cover {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(to bottom, #4d6da7 5%, #9dc1df);
  .paint {
    width: 100%;
    height: 550px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    .sun {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: absolute;
      left: 300px;
      top: 100px;
      background: radial-gradient(rgb(180, 176, 162), #ece9e5);
      box-shadow: 0px 0px 15px #eed3ab;
      z-index: -1;
      &::before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 13px;
        height: 17px;
        background: rgba(180, 176, 162, 0.5);
        border-radius: 50%;
        margin-left: -50px;
        margin-top: 30px;
      }
      &::after {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        background: rgba(180, 176, 162, 0.5);
        border-radius: 50%;
        margin-left: -40px;
        margin-top: 55px;
      }
    }
    .mountain {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 500px;
      div {
        position: absolute;
        bottom: 0;
        display: inline-block;
        &:nth-of-type(1) {
          width: 25%;
          height: 500px;
          left: -5%;
          background: rgba($treeColor, 0.3);
          clip-path: polygon(50% 0, 0 100%, 100% 100%);
        }
        &:nth-of-type(2) {
          width: 30%;
          height: 300px;
          left: 30%;
          background: rgba($treeColor, 0.3);
          clip-path: polygon(50% 0, 0 100%, 100% 100%);
        }
        &:nth-of-type(3) {
          width: 20%;
          height: 300px;
          left: 10%;
          background: rgba($treeColor, 0.5);
          clip-path: polygon(50% 0, 0 100%, 100% 100%);
        }
        &:nth-of-type(4) {
          width: 25%;
          height: 500px;
          right: 0px;
          background: rgba($treeColor, 0.7);
          clip-path: polygon(0 100%, 25% 0, 50% 50%, 60% 20%, 100% 100%);
        }
        &:nth-of-type(5) {
          width: 25%;
          height: 300px;
          right: -10%;
          background: rgba($treeColor, 0.3);
          clip-path: polygon(50% 0, 0 100%, 100% 100%);
        }
        &:nth-of-type(6) {
          width: 20%;
          height: 350px;
          right: 25%;
          background: rgba($treeColor, 0.3);
          clip-path: polygon(50% 0, 0 100%, 100% 100%);
        }
        &:nth-of-type(7) {
          width: 30%;
          height: 200px;
          left: 20%;
          background: rgba($treeColor, 1);
          clip-path: polygon(50% 0, 0 100%, 100% 100%);
        }
      }
    }
  }
  .contain-box {
    margin-top: -100px;
    width: 400px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    .login-box {
      width: 90%;
      height: 90%;
      background: #fff;
      border-radius: 15px;
      &::after {
        content: "";
        display: inline-block;
        width: 85%;
        height: 85%;
        background: rgba(248, 246, 246, 0.5);
        border-radius: 8px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0px;
        bottom: 0;
        margin: 12px auto;
        z-index: -1;
      }
      .title {
        text-align: left;
        padding-left: 50px;
        font-size: 30px;
        color: $logincolor;
        border-left: 5px solid $logincolor;
        margin-top: 15%;
      }
      .input-style {
        margin-top: 10%;
        width: 80%;
        &::v-deep .el-input__inner {
          border: none;
          background: white;
          border-bottom: 1px solid #ccc;
        }
      }
      .login-button {
        font-size: 20px;
        margin-top: 30px;
        height: 50px;
        text-indent: 40px;
        letter-spacing: 40px;
        color: white;
        background: $logincolor;
        border: none;
        border-radius: 10px;
        &:hover {
          border: 2px solid $logincolor;
          background: white;
          color: $logincolor;
        }
        &:active {
          outline: none;
        }
      }
    }
  }
}
</style>