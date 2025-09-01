<template>
    <div class="relative w-full rounded-2xl bg-skin p-3 space-y-5" ref="containerRef" :style="{ height: dynamicHeight }">
        <slot name="header" />

        <swiper :modules="modules" :slides-per-view="dynamicSlidesPerView" :space-between="spaceBetween" :navigation="{
            nextEl: `.swiper-button-next-${id}`,
            prevEl: `.swiper-button-prev-${id}`,
        }" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="(slide, index) in slides" :key="index"
                class="flex justify-center items-center transition-transform duration-300">
                <slot name="slide" :slide="slide" :index="index" />
            </swiper-slide>slide
        </swiper>

        <!-- Navigation buttons -->
        <div class="flex items-center gap-px absolute top-3 right-[2%]">
            <button :class="`swiper-button-next-${id}`"
                class="translate-x-12 inline-flex items-center justify-center transition-all select-none min-w-10 h-8 px-3.5 rounded-lg font-bold text-sm text-white bg-[#242829] cursor-pointer hover:scale-[0.9] outline-none">
                <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.12874 6L0.954562 2.82582C0.808115 2.67937 0.808115 2.44194 0.954562 2.29549L2.54555 0.7045C2.692 0.558054 2.92944 0.558054 3.07588 0.7045L8.10621 5.73483C8.25266 5.88128 8.25266 6.11871 8.10621 6.26516L3.07588 11.2955C2.92944 11.4419 2.692 11.4419 2.54555 11.2955L0.954562 9.7045C0.808115 9.55805 0.808115 9.32062 0.954562 9.17417L4.12874 6Z"
                        fill="currentColor" />
                </svg>
            </button>
            <button :class="`swiper-button-prev-${id}`"
                class="-translate-x-10 inline-flex items-center justify-center transition-all select-none min-w-10 h-8 px-3.5 rounded-lg font-bold text-sm text-white bg-[#242829] cursor-pointer hover:scale-[0.9] outline-none">
                <svg width="9" height="12" class="rotate-180" viewBox="0 0 9 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.12874 6L0.954562 2.82582C0.808115 2.67937 0.808115 2.44194 0.954562 2.29549L2.54555 0.7045C2.692 0.558054 2.92944 0.558054 3.07588 0.7045L8.10621 5.73483C8.25266 5.88128 8.25266 6.11871 8.10621 6.26516L3.07588 11.2955C2.92944 11.4419 2.692 11.4419 2.54555 11.2955L0.954562 9.7045C0.808115 9.55805 0.808115 9.32062 0.954562 9.17417L4.12874 6Z"
                        fill="currentColor" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { debounce } from 'lodash-es'

// Props
const props = defineProps({
    id: { type: Number, required: true },
    slides: {
        type: Array,
        required: true,
        default: () => []
    },
    height: {
        type: [String, Number],
        default: 'auto'
    },
    minSlideWidth: {
        type: Number,
        default: 250 // Minimum width for each slide
    },
    spaceBetween: {
        type: Number,
        default: 20
    }
})

// Emits
const emit = defineEmits(['slide-change'])

// Reactive state
const swiperInstance = ref(null)
const currentSlide = ref(0)
const containerWidth = ref(0)
    const containerRef = ref<HTMLElement | null>(null)

const modules = [Navigation, Autoplay, EffectFade]

// Computed
const dynamicHeight = computed(() => {
    if (typeof props.height === 'number') {
        return `${props.height}px`
    }
    return props.height
})

const dynamicSlidesPerView = computed(() => {
    if (!containerWidth.value) return 1;
    const availableWidth = containerWidth.value - 48 // Account for padding
    return Math.max(1, availableWidth / (props.minSlideWidth + props.spaceBetween))
})

// Methods
const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper
}

const onSlideChange = () => {
    if (swiperInstance.value) {
        currentSlide.value = swiperInstance.value.activeIndex
        emit('slide-change', currentSlide.value)
    }
}

const updateContainerWidth = () => {
    if (containerRef.value?.offsetWidth) {
        containerWidth.value = containerRef.value.offsetWidth
    }
}

// Debounced resize handler
const handleResize = debounce(() => {
    updateContainerWidth()
    if (swiperInstance.value) {
        swiperInstance.value.update()
    }
}, 100)

// Lifecycle hooks
onMounted(() => {
    updateContainerWidth()
    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>