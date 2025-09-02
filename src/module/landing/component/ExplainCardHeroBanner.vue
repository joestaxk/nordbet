<script setup lang="ts">
// import Carousel from '@/core/component/Carousel.vue';

// const handleSlideChange = (index: number) => {
//   console.log('Current slide:', index)
// }

</script>

<template>
  <div class="snap-mandatory overflow-x-scroll hide-scroll">
    <div class="mt-5 flex gap-3 snap-mandatory  snap-x">
      <!-- <Carousel :slides="Array.from({ length: 4 })" :id="1223" height="auto" :min-slide-width="198" :space-between="10"
      @slide-change="handleSlideChange">
      <template #slide> -->
      <div class="bg-skin min-h-[100px] min-w-xs p-3 flex gap-2 items-center rounded-[14px]">
        <div
          class="text-lemon shrink-0 w-[50px] h-[50px] bg-[rgba(255,255,255,0.06)] rounded-full flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" size="19"
            glow="rgba(83, 255, 2, 0.40)" class="css-223bk5">
            <path
              d="M17.0078 11.4094C17.2927 11.9463 17.5 12.4832 17.5 13.311C17.5 14.0716 17.3187 14.7651 17.0078 15.3691C16.0751 17.1141 13.8731 18.1208 10.8938 18.2774V20H8.95078V18.255C5.86788 18.0537 3.87306 16.9575 3.01813 15.3244C2.68135 14.6309 2.5 13.8255 2.5 12.953H6.64508C6.67098 13.5123 6.7228 14.0045 6.93005 14.3848C7.29275 15.0559 8.01813 15.481 9.08031 15.66V11.0738C8.71762 11.0067 8.35492 10.9172 7.99223 10.8277C5.66062 10.2461 4.0544 9.55257 3.32902 8.18792C3.06995 7.69575 2.8886 7.13646 2.8886 6.42058C2.8886 5.72707 3.06995 5.10067 3.38083 4.51901C4.18394 2.90828 6.25648 1.92394 8.97668 1.72259V0H10.9197V1.74497C13.5881 1.92394 15.5311 2.88591 16.4119 4.51901C16.7487 5.21253 16.9041 5.90604 16.9041 6.80089H13.0699C13.0699 6.28635 12.9922 5.8613 12.8109 5.50336C12.4741 4.87696 11.7746 4.4519 10.8161 4.2953V8.36689C11.1528 8.45638 11.4896 8.52349 11.8523 8.61298C14.2617 9.19463 16.2306 9.88814 17.0078 11.4094ZM6.90414 6.75615C7.24093 7.33781 8.04404 7.67338 9.10622 7.96421V4.22819C7.99223 4.34004 7.18912 4.72036 6.87824 5.36913C6.7487 5.59284 6.7228 5.79418 6.7228 6.0179C6.7228 6.30872 6.77461 6.53244 6.90414 6.75615ZM13.2513 14.5861C13.4067 14.3177 13.4585 14.0045 13.4585 13.6913C13.4585 13.3557 13.3808 13.1096 13.2513 12.8635C12.9145 12.1924 11.956 11.7897 10.7902 11.4765V15.7047C11.9819 15.6152 12.8627 15.2349 13.2513 14.5861Z"
              fill="currentColor"></path>
          </svg>
        </div>

        <div class="">
          <h3 class="md:text-[16px] text-[14px] text-white font-semibold">Instant Settlement</h3>
          <p class="font-[500] text-skinTextMuted md:text-[14px] text-[12px]">
            Every win automatically hits your your wallet through smart contracts.
          </p>
        </div>
      </div>

      <div class="bg-skin min-h-[100px] min-w-xs p-3 flex gap-2 items-center rounded-[14px]">
        <div
          class="text-lemon shrink-0 w-[50px] h-[50px] bg-[rgba(255,255,255,0.06)] rounded-full flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" size="19"
            glow="rgba(83, 255, 2, 0.40)" class="css-223bk5">
            <path
              d="M8.00013 0C7.42412 0 6.95679 0.467203 6.95679 1.0434V2.7826H9.04347V1.0434C9.04347 0.467203 8.57639 0 8.00013 0Z"
              fill="currentColor"></path>
            <path d="M0 9.94796H5.54991C5.54991 11.478 4.30515 12.723 2.77496 12.723C1.24502 12.723 0 11.478 0 9.94796Z"
              fill="currentColor"></path>
            <path
              d="M10.4501 9.94796H16C16 11.478 14.7552 12.723 13.225 12.723C11.6951 12.723 10.4501 11.478 10.4501 9.94796Z"
              fill="currentColor"></path>
            <path
              d="M14.2686 4.65918C14.2686 4.84834 14.218 5.02568 14.1302 5.17854L15.6234 9.18716H14.4585L13.2256 5.70284L11.9929 9.18716H10.8278L12.3207 5.1788C12.2326 5.02568 12.182 4.84834 12.182 4.65918H9.04398V13.9131H10.0873L10.7828 14.9565H11.0413C11.4747 14.9565 11.8261 15.308 11.8261 15.7415V15.9999H4.17361V15.7415C4.17361 15.308 4.52507 14.9565 4.95875 14.9565H5.21772L5.91319 13.9131H6.95653V4.65918H3.81855C3.81855 4.8486 3.76794 5.02568 3.67982 5.1788L5.1725 9.18716H4.00764L2.77496 5.70284L1.54201 9.18716H0.377154L1.8701 5.17854C1.78197 5.02542 1.73162 4.84834 1.73162 4.65918C1.73162 4.08305 2.19869 3.61585 2.77496 3.61585L6.41315 2.89076V3.32591H9.5871V2.89076L13.2253 3.61585C13.8016 3.61585 14.2686 4.08305 14.2686 4.65918Z"
              fill="currentColor"></path>
          </svg>
        </div>

        <div class="">
          <h3 class="md:text-[16px] text-[14px] text-white font-semibold">Fair Gambling</h3>
          <p class="font-[500] text-skinTextMuted md:text-[14px] text-[12px]">
            Every slots spin is provably fair, immutably auditable on-chain forever.
          </p>
        </div>
      </div>

      <div class="bg-skin min-h-[100px] min-w-xs p-3 flex gap-2 items-center rounded-[14px]">
        <div
          class="text-lemon shrink-0 w-[50px] h-[50px] bg-[rgba(255,255,255,0.06)] rounded-full flex items-center justify-center">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" size="17.5"
            glow="rgba(83, 255, 2, 0.40)" class="css-15bwzbq">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3.6382 0.687178C6.4149 -0.234834 11.5132 -0.222141 14.295 0.683782C19.1981 2.28059 17.9124 9.81346 16.311 13.3937C15.1663 15.953 12.0976 20 8.96826 20C5.8473 20 2.78323 15.9286 1.66122 13.371C0.107844 9.82995 -1.18923 2.29014 3.6382 0.687178ZM7.14264 7.80367C7.28579 7.92209 7.28579 8.12631 7.14264 8.24473C6.77252 8.55094 6.01916 9.06768 5.15 9.06768C4.28084 9.06768 3.52748 8.55094 3.15736 8.24473C3.01421 8.12631 3.01421 7.92209 3.15736 7.80367C3.52748 7.49746 4.28084 6.98072 5.15 6.98072C6.01916 6.98072 6.77252 7.49746 7.14264 7.80367ZM10.8574 7.80367C10.7142 7.92209 10.7142 8.12631 10.8574 8.24473C11.2275 8.55094 11.9808 9.06768 12.85 9.06768C13.7192 9.06768 14.4725 8.55094 14.8426 8.24473C14.9858 8.12631 14.9858 7.92209 14.8426 7.80367C14.4725 7.49746 13.7192 6.98072 12.85 6.98072C11.9808 6.98072 11.2275 7.49746 10.8574 7.80367Z"
              fill="currentColor"></path>
          </svg>
        </div>

        <div class="">
          <h3 class="md:text-[16px] text-[14px] text-white font-semibold">Play Privately</h3>
          <p class="font-[500] text-skinTextMuted md:text-[14px] text-[12px]">
            No KYC and no sign-up. Just connect your wallet and start playing.
          </p>
        </div>
      </div>

      <div class="bg-skin min-h-[100px] min-w-xs p-3 flex gap-2 items-center rounded-[14px]">
        <div
          class="text-lemon shrink-0 w-[50px] h-[50px] bg-[rgba(255,255,255,0.06)] rounded-full flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" size="15.5"
            glow="rgba(83, 255, 2, 0.40)" class="css-fm57sf">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0 3C0 1.34315 1.34315 0 3 0H13.5C13.7761 0 14 0.223858 14 0.5V1.5C14 1.77614 13.7761 2 13.5 2H3V4H13.5C13.7761 4 14 4.22386 14 4.5V13.5C14 13.7761 13.7761 14 13.5 14H3C1.34315 14 0 12.6569 0 11V3ZM11 10C11.5523 10 12 9.55229 12 9C12 8.44772 11.5523 8 11 8C10.4477 8 10 8.44772 10 9C10 9.55229 10.4477 10 11 10Z"
              fill="currentColor"></path>
          </svg>
        </div>

        <div class="">
          <h3 class="md:text-[16px] text-[14px] text-white font-semibold">Self-Custody Play</h3>
          <p class="font-[500] text-skinTextMuted md:text-[14px] text-[12px]">
            Bet straight from your wallet, and keep your funds always in your control.
          </p>
        </div>
      </div>
      <!-- </template>
</Carousel> -->
    </div>
  </div>
</template>