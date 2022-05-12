<script setup lang="ts">
interface Props {
  fill?: string
}

withDefaults(defineProps<Props>(), {
  fill: "#1a86c7"
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="block">
    <path :fill="fill" fill-opacity="1" d="M0,192L80,170.7C160,149,320,107,480,117.3C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
  </svg>
</template>