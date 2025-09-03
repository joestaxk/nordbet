<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { bigWinInterface } from '../types/bigWin'

defineProps<{ data: bigWinInterface }>()
</script>

<template>
  <div
    class="sm:min-w-[440px] h-[220px] py-1 bg-skinLight rounded-[16px] overflow-hidden hover:scale-[1.01] duration-300 ease-in"
  >
    <div class="flex items-center w-full h-full">
      <RouterLink to="">
        <div
          class="sm:w-[190px] w-[130px] h-[220px] shrink-0"
          :style="{ background: `url(${data.imgUrl})` }"
          style="background-position: 100%; background-repeat: no-repeat; background-size: cover"
        ></div>
      </RouterLink>

      <div
        class="flex-[1_1_0%] sm:p-[0px_24px] px-3 overflow-hidden whitespace-nowrap text-ellipsis"
      >
        <div
          class="mb-[10px] font-[700] text-[16px] overflow-hidden whitespace-nowrap overflow-ellipsis"
        >
          {{ data?.gameName }}
        </div>
        <div class="flex items-center flex-wrap gap-[4px_9px] pb-[24px]">
          <div class="flex items-center gap-[0_6px]">
            <svg
              v-for="i in 5"
              :key="i"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              size="11"
              :color="`${i <= data.rating ? '#2aee88' : 'rgba(255, 255, 255, 0.3)'}`"
            >
              <path
                d="M8.09574 6.85519L8.09574 0.555211C8.09574 0.0457089 7.47299 -0.193718 7.13826 0.187089L0.139331 8.14936C-0.174773 8.5067 0.0760766 9.07158 0.548866 9.07158H5.53868L5.84005 15.4713C5.86341 15.9674 6.47062 16.1843 6.7969 15.8131L13.8604 7.77741C14.1745 7.42007 13.9236 6.85519 13.4508 6.85519H8.09574Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div class="font-[700] text-[12px]">RTP {{ data?.rtp }}</div>
        </div>
        <div class="xs:text-[14px] text-[12px]">
          <div class="flex items-center text-skinTextMuted justify-between">
            Payout:
            <span class="font-[600] text-success">
              {{ data?.gameProps?.payout }}
            </span>
          </div>

          <div class="flex items-center text-skinTextMuted justify-between">
            Multiplier:
            <span class="font-[600] text-success">
              {{ data?.gameProps?.multiplier }}
            </span>
          </div>

          <div class="flex items-center text-skinTextMuted justify-between">
            Bet:
            <span class="font-[600] text-white">
              {{ data?.gameProps?.bet }}
            </span>
          </div>

          <div class="flex items-center text-skinTextMuted justify-between">
            Player:
            <span
              style="display: flex; align-items: center; cursor: pointer"
              class="font-[600] text-white"
            >
              <img
                src="/images/landing/crown.webp"
                alt="Diamond 2"
                size="16"
                class="w-5"
                style="margin-right: 12px"
              />
              5o...JJqsK
            </span>
          </div>
        </div>

        <div class="flex gap-4 mt-4 xs:text-[14px] text-[12px]">
          <a href="" target="_blank" rel="noopener noreferrer" class="underline-link">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              size="15"
              top="0.5"
              class="css-11mqljs"
            >
              <path
                d="M7.65181 1.53553C8.635 0.552348 9.96849 0 11.3589 0C14.2544 0 16.6016 2.34721 16.6016 5.24264C16.6016 6.63308 16.0492 7.96656 15.066 8.94975L13.3693 10.6464C13.1741 10.8417 12.8575 10.8417 12.6622 10.6464L11.9551 9.93934C11.7599 9.74408 11.7599 9.4275 11.9551 9.23223L13.6518 7.53553C14.2599 6.92742 14.6016 6.10264 14.6016 5.24264C14.6016 3.45178 13.1498 2 11.3589 2C10.4989 2 9.67414 2.34163 9.06603 2.94975L7.36933 4.64645C7.17407 4.84171 6.85748 4.84171 6.66222 4.64645L5.95512 3.93934C5.75985 3.74408 5.75985 3.4275 5.95512 3.23223L7.65181 1.53553Z"
                fill="currentColor"
              ></path>
              <path
                d="M8.1371 13.0503L9.8338 11.3536C10.0291 11.1583 10.3456 11.1583 10.5409 11.3536L11.248 12.0607C11.4433 12.2559 11.4433 12.5725 11.248 12.7678L9.55131 14.4645C8.56812 15.4477 7.23464 16 5.8442 16C2.94877 16 0.601562 13.6528 0.601562 10.7574C0.601562 9.36693 1.15391 8.03344 2.1371 7.05025L3.8338 5.35355C4.02906 5.15829 4.34564 5.15829 4.5409 5.35355L5.24801 6.06066C5.44327 6.25592 5.44327 6.5725 5.24801 6.76777L3.55131 8.46447C2.9432 9.07258 2.60156 9.89736 2.60156 10.7574C2.60156 12.5482 4.05334 14 5.8442 14C6.70421 14 7.52898 13.6584 8.1371 13.0503Z"
                fill="currentColor"
              ></path>
              <path
                d="M5.95512 11.3536C6.15038 11.5488 6.46696 11.5488 6.66222 11.3536L11.9551 6.06066C12.1504 5.8654 12.1504 5.54882 11.9551 5.35355L11.248 4.64645C11.0527 4.45118 10.7362 4.45118 10.5409 4.64645L5.24801 9.93934C5.05275 10.1346 5.05275 10.4512 5.24801 10.6464L5.95512 11.3536Z"
                fill="currentColor"
              ></path>
            </svg>
            View
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" class="underline-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              size="15.5"
              top="-0.5"
              class="css-5f3l5y"
            >
              <path
                d="M8.00013 0C7.42412 0 6.95679 0.467203 6.95679 1.0434V2.7826H9.04347V1.0434C9.04347 0.467203 8.57639 0 8.00013 0Z"
                fill="currentColor"
              ></path>
              <path
                d="M0 9.94796H5.54991C5.54991 11.478 4.30515 12.723 2.77496 12.723C1.24502 12.723 0 11.478 0 9.94796Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.4501 9.94796H16C16 11.478 14.7552 12.723 13.225 12.723C11.6951 12.723 10.4501 11.478 10.4501 9.94796Z"
                fill="currentColor"
              ></path>
              <path
                d="M14.2686 4.65918C14.2686 4.84834 14.218 5.02568 14.1302 5.17854L15.6234 9.18716H14.4585L13.2256 5.70284L11.9929 9.18716H10.8278L12.3207 5.1788C12.2326 5.02568 12.182 4.84834 12.182 4.65918H9.04398V13.9131H10.0873L10.7828 14.9565H11.0413C11.4747 14.9565 11.8261 15.308 11.8261 15.7415V15.9999H4.17361V15.7415C4.17361 15.308 4.52507 14.9565 4.95875 14.9565H5.21772L5.91319 13.9131H6.95653V4.65918H3.81855C3.81855 4.8486 3.76794 5.02568 3.67982 5.1788L5.1725 9.18716H4.00764L2.77496 5.70284L1.54201 9.18716H0.377154L1.8701 5.17854C1.78197 5.02542 1.73162 4.84834 1.73162 4.65918C1.73162 4.08305 2.19869 3.61585 2.77496 3.61585L6.41315 2.89076V3.32591H9.5871V2.89076L13.2253 3.61585C13.8016 3.61585 14.2686 4.08305 14.2686 4.65918Z"
                fill="currentColor"
              ></path>
            </svg>
            Verify Fairness
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
