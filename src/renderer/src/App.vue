<script setup>
import { onMounted, ref } from 'vue'
// import { useConfig } from './utils/registerConfig';

const mainConfig = ref(null);
onMounted(() => {
  mainConfig.value = JSON.parse(window.electron.readConfig());
  window.electron.ipcRenderer.send('alert')
});

</script>

<template>
  <div 
    class="w-full h-screen flex justify-center items-center" 
    :style="{backgroundColor: mainConfig?.colors?.background}"
  >
    <h1 
      class="text-3xl font-bold"
      :style="{color: mainConfig?.colors?.text}"
    >
      {{ mainConfig?.name }}
    </h1>
  </div>
</template>
