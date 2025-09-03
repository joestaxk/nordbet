<script setup lang="ts">
import { debounce } from 'lodash-es'
import { ref, onMounted, onBeforeUnmount } from 'vue'

import type { singleCardInterface } from '../types/singleCardInterface';

const props = defineProps<{
  datas: singleCardInterface[]
  cardWidth: number,
  column: number
}>()

console.log(props.datas)

const containerRef = ref<HTMLElement | null>(null)
const columnCount = ref(0)
const childWidth = props.cardWidth  // Fixed width of each card
// const gapSize = 8 // Gap between cards

// Calculate optimal columns based on container width
const calculateColumns = () => {
  if (!containerRef.value) return

  const containerWidth = containerRef.value.clientWidth
  // Calculate max columns that fit (childWidth + gapSize)
  const maxColumns = Math.round(containerWidth / childWidth)

  // Ensure at least 1 column
  columnCount.value = Math.max(props.column ?? 2, maxColumns)
}

// Debounced resize handler
const handleResize = debounce(() => {
  calculateColumns()
}, 100)

onMounted(() => {
  calculateColumns()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div ref="containerRef" class="w-full overflow-hidden grid gap-2" :style="{
    'grid-template-columns': `repeat(${columnCount}, 1fr)`,
  }">

    <slot v-for="(data, index) in datas" :key="index" name="card" :data="data" />
  </div>
</template>