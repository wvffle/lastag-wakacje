<script setup lang="ts">
interface Props {
  url: string
  down: boolean
}

const props = defineProps<Props>()
const augmented = computed(() => [props.down ? 'all-hexangle-down' : 'all-hexangle-up', 'border'].join(' '))
</script>

<template>
  <div
    :data-augmented-ui="augmented"
    class="crew__member"
    style="--aug-all-width: 200px; --aug-border-bg: #fce784"
  >
    <div class="h-full w-full bg-cover bg-center" :style="{ backgroundImage: `url(${url})` }" />
  </div>
</template>