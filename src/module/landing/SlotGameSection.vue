<script setup lang="ts">
import { RouterLink } from 'vue-router';

import Carousel from '@/core/component/Carousel.vue';
import SingleGameCard from '@/core/component/SingleGameCard.vue';
import type { singleCardInterface } from '@/core/types/singleCardInterface';

const data: singleCardInterface[] = [
  {
    imgUrl: "/images/landing/WonkasFactoryTotalFudgeUp.jpg",
    rating: 2,
    rtp: "96.2%",
    link: "/",
    newLabel: true,
    payout: "$10,0000"
  }
]

const handleSlideChange = (index: number) => {
  // console.log('Current slide:', index)
}

const multiplyData = Array.from({ length: 20 }).map(() => data);
const sortedData: any[] = [];
const remainder = multiplyData.length % 2;
for (let i = 0; i < Math.floor(multiplyData.length / 2); ++i) {
  const x = [
    multiplyData[i],
    multiplyData[i + 1]
  ]
  sortedData.push(x);
}

if (remainder) {
  sortedData.push(multiplyData[multiplyData.length - 1])
}
</script>


<template>
  <Carousel :slides="sortedData" :id="3094893" height="auto" :space-between="0" :min-slide-width="195"
    @slide-change="handleSlideChange">
    <template #header>
      <div class="flex items-center gap-2">
        <div class="flex items-center text-[16px] text-white font-[700] gap-2">
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" class="text-skinTextMuted"
            xmlns="http://www.w3.org/2000/svg" size="20">
            <path
              d="M6.77888 13.0967C7.81648 12.8696 8.89427 12.75 10 12.75C10.2242 12.75 10.4472 12.7549 10.669 12.7647C10.7091 10.8732 11.134 9.09354 11.8328 7.58265L11.906 7.41006C12.7927 5.49954 13.8433 3.70363 14.9995 2.10248V0.25H4.75011V3.74444H10.5821C9.47138 5.21595 8.53795 6.86838 7.7743 8.78559L7.8043 8.70393C7.25522 10.0589 6.89966 11.5383 6.77888 13.0967Z"
              fill="currentColor"></path>
            <path
              d="M5.13532 13.5564C5.02103 13.0141 4.96033 12.4471 4.96033 11.8651C4.96033 11.2573 5.02657 10.6665 5.14157 10.1516L5.16656 10.0198C5.46092 8.70659 5.87402 7.44844 6.34961 6.37071L6.1165 5.27298L0 6.95358V9.74131L2.49757 9.06374C1.96941 10.2768 1.6724 11.646 1.6724 13.094C1.6724 13.8159 1.74632 14.518 1.8758 15.1384C2.88551 14.4866 3.97852 13.9528 5.13532 13.5564Z"
              fill="currentColor"></path>
            <path
              d="M17.3326 11.3545C16.7922 12.1337 16.384 13.0586 16.1595 14.0689C15.1161 13.5984 14.0092 13.2438 12.8553 13.0214C13.3561 11.4806 14.1953 10.1582 15.2691 9.15182L15.2834 9.1389L12.7836 8.5754L13.8335 6.03547L20 7.42964L19.8081 8.53738C18.8957 9.39378 18.0851 10.3168 17.3571 11.3208L17.3326 11.3545Z"
              fill="currentColor"></path>
            <path
              d="M9.99979 17.75C11.7576 17.75 13.4095 18.2035 14.8448 19H18.9266C16.6579 16.6858 13.4965 15.25 9.99979 15.25C6.50305 15.25 3.34165 16.6858 1.073 19H5.15478C6.59009 18.2035 8.24197 17.75 9.99979 17.75Z"
              fill="currentColor"></path>
          </svg>
          Slot
        </div>

        <RouterLink to="/slots" class="text-lemon font-bold">View All</RouterLink>
      </div>
    </template>
    <template #slide="{ slide }">
      <div class="grid grid-rows-2 gap-y-2">
        <SingleGameCard v-bind="slide[0][0]" class="min-w-[198px] w-full" />
        <SingleGameCard v-bind="slide[0][0]" class="min-w-[198px] w-full" />
      </div>
    </template>
  </Carousel>
</template>