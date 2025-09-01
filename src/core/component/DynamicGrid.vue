<script setup lang="ts">
import { debounce } from 'lodash-es'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
    datas: []
    cardWidth: number
}>()

const containerRef = ref<HTMLElement | null>(null)
const columnCount = ref(0)
const childWidth = props.cardWidth  // Fixed width of each card
const gapSize = 8 // Gap between cards

// Calculate optimal columns based on container width
const calculateColumns = () => {
    if (!containerRef.value) return

    const containerWidth = containerRef.value.offsetWidth
    const availableWidth = containerWidth - gapSize // Account for potential scrollbar

    // Calculate max columns that fit (childWidth + gapSize)
    const maxColumns = Math.floor(availableWidth / (childWidth + gapSize))

    // Ensure at least 1 column
    columnCount.value = Math.max(1, maxColumns)
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
    <div ref="containerRef" class="w-full overflow-hidden" :style="{
        'grid-template-columns': `repeat(${columnCount}, minmax(0, 1fr))`
    }">
        <div class="grid gap-4 w-full" :style="{
            'grid-template-columns': `repeat(auto-fill, minmax(${childWidth}px, 1fr))`
        }">
            <slot v-for="(data, index) in datas" :key="index" name="card" :data="data" />
        </div>
    </div>
</template>