<script setup>
import Carousel from '@/core/component/Carousel.vue'

import BigWinsCardGamesSection from './component/BigWinsCardGamesSection.vue'

const data = [
  {
    imgUrl: '/images/landing/MadameFortune.jpg',
    gameName: 'Madame Fortune',
    rating: 4,
    rtp: '96.2%',
    gameProps: {
      payout: '$1,661,000.00',
      multiplier: '1,661.00x',
      bet: '$1,000.00',
    },
  },
]

const handleSlideChange = (index) => {
  console.log('Current slide:', index)
}

const multiplyData = Array.from({ length: 10 }).map(() => data[0])
</script>

<template>
  <Carousel
    :slides="multiplyData"
    height="auto"
    :id="1223492"
    :min-slide-width="440"
    :space-between="10"
    @slide-change="handleSlideChange"
  >
    <template #header>
      <div class="">
        <div class="flex items-center text-[16px] text-white font-[700] gap-2">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            class="text-skinTextMuted"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            size="17"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.72391 1.68291C0.413064 1.37905 -0.106915 1.68265 0.0194045 2.09425L3 11H13L15.9806 2.09425C16.1069 1.68265 15.5869 1.37905 15.2761 1.68291L11 6L8.37847 0.228651C8.22253 -0.0762171 7.77747 -0.0762171 7.62153 0.228651L5 6L0.72391 1.68291ZM10.4074 9C10.6901 9 10.8317 8.66584 10.6318 8.47041L8.37401 6.05884C8.16745 5.85692 7.83255 5.85692 7.62599 6.05884L5.36819 8.47041C5.16826 8.66584 5.30986 9 5.59259 9H10.4074Z"
              fill="currentColor"
            ></path>
            <path
              d="M13 13L13.9363 14.2153C13.955 14.2395 13.9721 14.2653 13.9836 14.2936C14.1194 14.6275 13.8686 15 13.4913 15H2.50867C2.13136 15 1.88062 14.6275 2.01637 14.2936C2.02791 14.2653 2.04499 14.2395 2.06369 14.2153L3 13H13Z"
              fill="currentColor"
            ></path>
          </svg>
          Big Wins
        </div>
      </div>
    </template>

    <template #slide="{ slide, index }">
      <BigWinsCardGamesSection :data="slide" :key="index" />
    </template>
  </Carousel>
</template>
