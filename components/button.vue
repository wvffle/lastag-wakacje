<script setup lang="ts">

</script>

<template>
  <button class="relative font-bold text-xl border-0 group cursor-pointer hover:scale-105 bg-transparent p-0 duration-200" type="button">
    <div class="absolute inset-0 bg-[#04c1f1] rounded shadow -z-1 rotate-3 group-hover:rotate-8 duration-200" />
    <div class="py-1 px-4 text-white bg-[#1a86c7] rounded shadow-lg">
      <slot />
    </div>
  </button>
</template>
