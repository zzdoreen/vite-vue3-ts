<template>
  <div>
    <h1>hello world</h1>
    <!-- <button @click="handleRequest('/api')">/api</button> -->
    <br />
    <br />
    <button @click="handleRequest('/music-api')">/music-api</button>
    <br />
    <br />
    <button @click="handleRequest('/music-lyric')">/music-lyric</button>
    <br /><br />
    <button @click="handleRequest('/one-api')">/one-api</button>
    <br /><br />
    <button @click="handleRequest('/diary-api')">/diary-api</button>

    <h3>{{ showData }}</h3>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";
import { commonRequest } from "../api/http";

export default defineComponent({
  setup: () => {
    let showData = ref("e");

    function handleRequest(api: string) {
      commonRequest(api, {}).then((res) => (showData.value = res));
    }
    return { showData, handleRequest };
  },
});
</script>
