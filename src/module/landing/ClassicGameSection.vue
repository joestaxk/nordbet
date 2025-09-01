<script setup lang="ts">
import { RouterLink } from 'vue-router';

import Carousel from '@/core/component/Carousel.vue';
import SingleGameCard from '@/core/component/SingleGameCard.vue';
import type { singleCardInterface } from '@/core/types/singleCardInterface';

const data: singleCardInterface[] = [
    {
        imgUrl: "/images/landing/plinko.jpg",
        rating: 2,
        rtp: "96.2%",
        link: "/",
        newLabel: true,
        payout: "$10,0000"
    }
]

const handleSlideChange = (index: number) => {
    console.log('Current slide:', index)
}

const multiplyData = Array.from({ length: 20 }).map(() => data[0]);
</script>


<template>
    <Carousel :slides="multiplyData" :id="1223" height="auto" :min-slide-width="198" :space-between="10"
        @slide-change="handleSlideChange">
        <template #header>
            <div class="flex  items-center gap-2">
                <div class="flex items-center text-[16px] text-white font-[700] gap-2">
                    <svg width="16" height="16" class="text-skinTextMuted" viewBox="0 0 16 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg" size="20">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.50518 0.136616C8.19257 -0.0455388 7.80743 -0.0455388 7.49482 0.136616L1.50518 3.62676C1.19257 3.80891 1 4.14555 1 4.50986V11.4901C1 11.8545 1.19257 12.1911 1.50518 12.3732L7.49482 15.8634C7.80743 16.0455 8.19257 16.0455 8.50518 15.8634L14.4948 12.3732C14.8074 12.1911 15 11.8545 15 11.4901V4.50986C15 4.14555 14.8074 3.80891 14.4948 3.62676L8.50518 0.136616ZM9.58702 5.81565L8 3L6.41298 5.81565L3.24472 6.45492L5.43215 8.83435L5.06107 12.0451L8 10.7L10.9389 12.0451L10.5679 8.83435L12.7553 6.45492L9.58702 5.81565Z"
                            fill="currentColor"></path>
                    </svg>
                    Classics
                </div>

                <RouterLink to="/classics" class="text-lemon font-bold">View All</RouterLink>
            </div>
        </template>

        <template #slide="{ slide, index }" class="border">
            <SingleGameCard v-bind="slide" class="min-w-[200px] w-full" />
        </template>
    </Carousel>
</template>