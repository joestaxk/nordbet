<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div
    class="relative xs:w-[198px] !w-[150px] xs:h-[240px] h-[200px] rounded-[16px] overflow-hidden hover:scale-[1.01] duration-100 ease-in group">
    <RouterLink :to="link">
      <img :src="imgUrl" alt="" class="w-full h-full absolute object-bottom object-cover border-none">
      <div class="w-full h-full relative p-2">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-[0_2px]">
            <svg v-if="rating" v-for="i in 5" :key="i" width="8" height="10" viewBox="0 0 14 16" fill="none"
              xmlns="http://www.w3.org/2000/svg" size="11"
              :style="{ color: `${i <= rating ? '#2aee88' : 'rgba(255,255,255,0.4)'}` }">
              <path
                d="M8.09574 6.85519L8.09574 0.555211C8.09574 0.0457089 7.47299 -0.193718 7.13826 0.187089L0.139331 8.14936C-0.174773 8.5067 0.0760766 9.07158 0.548866 9.07158H5.53868L5.84005 15.4713C5.86341 15.9674 6.47062 16.1843 6.7969 15.8131L13.8604 7.77741C14.1745 7.42007 13.9236 6.85519 13.4508 6.85519H8.09574Z"
                fill="currentColor"></path>
            </svg>
            <div class="font-[700] text-[8px]">RTP {{ rtp }}</div>
          </div>

          <!-- verify -->
          <div class="flex gap-2 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" size="13"
              color="#2aee88" top="-1" style="margin-left: auto;" class="css-g26q68">
              <path
                d="M8.00013 0C7.42412 0 6.95679 0.467203 6.95679 1.0434V2.7826H9.04347V1.0434C9.04347 0.467203 8.57639 0 8.00013 0Z"
                fill="currentColor"></path>
              <path
                d="M0 9.94796H5.54991C5.54991 11.478 4.30515 12.723 2.77496 12.723C1.24502 12.723 0 11.478 0 9.94796Z"
                fill="currentColor"></path>
              <path
                d="M10.4501 9.94796H16C16 11.478 14.7552 12.723 13.225 12.723C11.6951 12.723 10.4501 11.478 10.4501 9.94796Z"
                fill="currentColor"></path>
              <path
                d="M14.2686 4.65918C14.2686 4.84834 14.218 5.02568 14.1302 5.17854L15.6234 9.18716H14.4585L13.2256 5.70284L11.9929 9.18716H10.8278L12.3207 5.1788C12.2326 5.02568 12.182 4.84834 12.182 4.65918H9.04398V13.9131H10.0873L10.7828 14.9565H11.0413C11.4747 14.9565 11.8261 15.308 11.8261 15.7415V15.9999H4.17361V15.7415C4.17361 15.308 4.52507 14.9565 4.95875 14.9565H5.21772L5.91319 13.9131H6.95653V4.65918H3.81855C3.81855 4.8486 3.76794 5.02568 3.67982 5.1788L5.1725 9.18716H4.00764L2.77496 5.70284L1.54201 9.18716H0.377154L1.8701 5.17854C1.78197 5.02542 1.73162 4.84834 1.73162 4.65918C1.73162 4.08305 2.19869 3.61585 2.77496 3.61585L6.41315 2.89076V3.32591H9.5871V2.89076L13.2253 3.61585C13.8016 3.61585 14.2686 4.08305 14.2686 4.65918Z"
                fill="currentColor"></path>
            </svg>

            <button v-if="newLabel"
              class="text-[10px] bg-success rounded-[4px] w-fit text-black px-1 font-bold">NEW</button>
          </div>
        </div>


        <div
          class="absolute bg-gradient-to-t from-[#141414] to-transparent inset-0 flex items-end justify-center h-full group-hover:opacity-100 opacity-0 duration-200">
          <div class="flex flex-col items-center gap-1  translate-y-[-1.4rem]">
            <Button class="xs:w-[150px] w-[100px]">Play</Button>
            <div class="font-bold xs:text-[14px] text-[12px]">Max. Payout: <span class="text-success">
                {{ payout }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

import type { singleCardInterface } from '../types/singleCardInterface';
import Button from './Button.vue';

defineProps<singleCardInterface>()
</script>