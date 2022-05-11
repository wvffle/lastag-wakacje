<script setup lang="ts">
const crew = [
  { name: 'Maciek', url: '../../assets/crew/maciek.jpg' },
  { name: 'Agata', url: '../../assets/crew/agata.jpg' },
  { name: 'Sylwia', url: '../../assets/crew/sylwia.jpg' },
  { name: 'Kuba', url: '../../assets/crew/kuba.jpg' },
  { name: 'Monika', url: '../../assets/crew/monika.jpg' },
  { name: 'Edyta', url: '../../assets/crew/edyta.jpg' },
]
</script>

<template>
  <div class="relative crew flex justify-center pt-[40px]">
    <crew-member v-for="member, i in crew" :key="member.name" class="relative" :url="member.url" :down="i % 2 === 1" />
  </div>
  {{ meta }}
</template>

<style scoped>
.crew > .crew__member:not(:last-child) {
  margin-right: -50px;
}

.crew > .crew__member:nth-child(2n) {
  top: -40px;
  margin-bottom: 40px;
}
</style>