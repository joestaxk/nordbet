<script setup lang="ts">
import Button from '@/core/component/Button.vue';

import ExplainCardHeroBanner from './component/ExplainCardHeroBanner.vue';
import ExploreCardHeroBanner from './component/ExploreCardHeroBanner.vue';

</script>

<template>
  <div
    style="background:  url('/images/landing/home-hero-1.webp'); background-size: cover; background-repeat: no-repeat; background-position: top center; "
    class="min-h-[400px] p-3 rounded-[16px] space-y-4">
    <div class="">
      <ExploreCardHeroBanner />
      <div class="my-3 flex flex-wrap gap-4 xs:text-[13px] text-[11.5px]">
        <a href="" class="underline-link">
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" size="14"
            class="css-ckrezq">
            <path
              d="M0 3.34646C0 3.13804 0.129286 2.95148 0.324438 2.8783L7.67842 0.120556C7.88683 0.0424007 8.11536 0.036013 8.32782 0.102405L15.6491 2.39032C15.8579 2.45555 16 2.64887 16 2.86756V4.49996C16 4.7761 15.7761 4.99996 15.5 4.99996H0.5C0.223858 4.99996 0 4.7761 0 4.49996V3.34646Z"
              fill="currentColor"></path>
            <path
              d="M9 7.49996C9 7.22382 9.22386 6.99996 9.5 6.99996H10.5C10.7761 6.99996 11 7.22382 11 7.49996V12H13V7.49996C13 7.22382 13.2239 6.99996 13.5 6.99996H14.5C14.7761 6.99996 15 7.22382 15 7.49996V13H15.5C15.7761 13 16 13.2238 16 13.5V14.5C16 14.7761 15.7761 15 15.5 15H0.5C0.223858 15 0 14.7761 0 14.5V13.5C0 13.2238 0.223858 13 0.5 13H1V7.49996C1 7.22382 1.22386 6.99996 1.5 6.99996H2.5C2.77614 6.99996 3 7.22382 3 7.49996V12H5V7.49996C5 7.22382 5.22386 6.99996 5.5 6.99996H6.5C6.77614 6.99996 7 7.22382 7 7.49996V12H9V7.49996Z"
              fill="currentColor"></path>
          </svg>
          Verify Bankroll
        </a>

        <a href="" class="underline-link">
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" size="10.3"
            class="css-dxif1j">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0 0.8C0 0.358172 0.358172 0 0.8 0H11.2C11.6418 0 12 0.358172 12 0.8V15.2C12 15.6418 11.6418 16 11.2 16H10L8 14L6 16L4 14L2 16H0.8C0.358172 16 0 15.6418 0 15.2V0.8ZM3 4.8C3 4.35817 3.35817 4 3.8 4H8.2C8.64183 4 9 4.35817 9 4.8V5.2C9 5.64183 8.64183 6 8.2 6H3.8C3.35817 6 3 5.64183 3 5.2V4.8ZM9 8.8C9 8.35817 8.64183 8 8.2 8H3.8C3.35817 8 3 8.35817 3 8.8V9.2C3 9.64183 3.35817 10 3.8 10H8.2C8.64183 10 9 9.64183 9 9.2V8.8Z"
              fill="currentColor"></path>
          </svg>
          View Smart Contracts
        </a>


        <a href="" class="underline-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" size="14"
            class="css-ckrezq">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8.00263 0C3.58581 0 0.00526614 3.58055 0.00526614 7.99737C0.00526614 9.21905 0.279198 10.3767 0.76899 11.4124L0.0052473 15.3045C-0.0511359 15.6428 0.357215 16.0511 0.695515 15.9947L4.58761 15.231C5.62326 15.7208 6.78095 15.9947 8.00263 15.9947C9.93531 15.9947 11.7079 15.3092 13.0904 14.168C13.2876 14.0052 13.4769 13.8331 13.6576 13.6524C15.1049 12.2051 16 10.2058 16 7.99737C16 3.58055 12.4195 0 8.00263 0ZM6.20612 9.82286V8.99704C6.20612 8.09148 6.7554 7.82896 7.4417 7.50096L7.52453 7.46132L8.87191 6.80936L8.88686 6.80189C9.1992 6.64583 9.46592 6.51256 9.46592 6.07047V5.88213C9.46592 5.24465 8.90089 5.01285 7.97366 5.01285C7.0754 5.01285 6.51037 5.27363 6.51037 5.96905V6.40369C6.51037 6.70794 6.39447 6.83833 6.09022 6.83833H4.40961C4.10537 6.83833 4.00395 6.70794 4.00395 6.40369V5.59237C4.00395 4.27396 5.01811 2.99901 7.97366 2.99901C10.9727 2.99901 12.0013 4.21601 12.0013 5.53441V6.01252C12.0013 7.53376 11.1465 8.11328 10.2338 8.48996L9.45143 8.8087C8.91538 9.02602 8.7705 9.12744 8.7705 9.5331V9.82286C8.7705 10.1271 8.66908 10.243 8.36483 10.243H6.62628C6.32203 10.243 6.20612 10.1271 6.20612 9.82286ZM8.7705 11.3151V12.5756C8.7705 12.8798 8.66908 12.9957 8.36483 12.9957H6.62628C6.32203 12.9957 6.20612 12.8798 6.20612 12.5756V11.3151C6.20612 11.0109 6.32203 10.8805 6.62628 10.8805H8.36483C8.66908 10.8805 8.7705 11.0109 8.7705 11.3151Z"
              fill="currentColor"></path>
          </svg>

          How it Works
        </a>
      </div>
    </div>

    <ExplainCardHeroBanner />

    <div
      class="border-2 flex justify-between sm:flex-row flex-col gap-4 border-[#303030] rounded-[16px] sm:p-[12px_24px] p-3">
      <div class="flex items-center gap-6">
        <div class="">
          <img src="/images/landing/signup-bonus.webp" width="54" height="54" alt="signup-bonus">
        </div>
        <div class="">
          <h4 class="text-lemon font-[600] md:text-[17px] text-[14px]">Welcome Bonus</h4>
          <p class="font-[500]">Bonus based on on-chain activity. Claim Up to </p>
        </div>
      </div>

      <Button>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" size="16"
          top="-0.5" style="margin-right: 12px;" class="css-1fmr122">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 0C6.76835 0 7.46924 0.288854 8 0.763894C8.53076 0.288854 9.23165 0 10 0C11.6569 0 13 1.34315 13 3C13 3.35064 12.9398 3.68722 12.8293 4H14.9984C15.5507 4 16 4.44772 16 5V6C16 6.55228 15.5523 7 15 7H1C0.447715 7 0 6.55228 0 6V5C0 4.44772 0.449337 4 1.00162 4H3.17071C3.06015 3.68722 3 3.35064 3 3C3 1.34315 4.34315 0 6 0ZM6 4C6.55228 4 7 3.55228 7 3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3C5 3.55228 5.44772 4 6 4ZM10 4C10.5523 4 11 3.55228 11 3C11 2.44772 10.5523 2 10 2C9.44772 2 9 2.44772 9 3C9 3.55228 9.44772 4 10 4Z"
            fill="currentColor"></path>
          <path d="M1 9H7V15H2C1.44772 15 1 14.5523 1 14V9Z" fill="currentColor"></path>
          <path d="M9 9H15V14C15 14.5523 14.5523 15 14 15H9V9Z" fill="currentColor"></path>
        </svg>
        <span>Claim Bonus</span>
      </Button>
    </div>
  </div>
</template>