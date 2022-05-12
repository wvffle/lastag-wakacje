<script setup lang="ts">
interface Props {
  url: string
  down?: boolean
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  down: false,
  size: 200
})

const augmented = computed(() => [props.down ? 'all-hexangle-down' : 'all-hexangle-up', 'border'].join(' '))
</script>

<template>
  <div
    :data-augmented-ui="augmented"
    class="crew__member"
    :style="`--aug-all-width: ${size}px; --aug-border-bg: #04c1f1`"
  >
    <div class="h-full w-full bg-cover bg-center" :style="{ backgroundImage: `url(${url})` }" />
  </div>
</template>