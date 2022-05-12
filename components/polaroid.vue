<script setup lang="ts">
interface Props {
  src: string
}

defineProps<Props>()
</script>

<template>
  <div class="bg-[#fbf1e9] shadow-xl p-1 sm:p-4">
    <div class="shadow-inner">
      <img :src="src" class="aspect-ratio-1/1 w-full object-cover object-center block" />
    </div>

    <div class="py-4 h-[2ch]">
      <slot />
    </div>
  </div>
</template>