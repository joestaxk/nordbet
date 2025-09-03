<template>
  <div
    class="p-5 bg-skin w-full rounded-[16px] lg:h-[calc(100vh-130px)] h-[400px] overflow-hidden sticky top-10 right-0"
  >
    <div class="flex gap-2 items-center">
      <div class="w-2 h-2 rounded-full bg-rose-500"></div>
      Live Payouts
    </div>

    <div class="flex items-center my-3" v-for="i in 30" :key="i">
      <div class="flex gap-2 items-end">
        <div class="w-[45px] h-[60px] rounded-md overflow-hidden">
          <img src="/images/landing/plinko.jpg" class="object-contain" alt="sol" srcset="" />
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="text-[15px] font-bold text-success">$0.12</span>
            <img
              src="/images/common/sol.png"
              class="object-contain"
              alt="sol"
              width="15"
              height="15"
              srcset=""
            />
          </div>
          <p class="text-[14px] text-skinTextMuted">Asxws...ri93e39</p>
        </div>
      </div>

      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        size="13"
        color="#ff1d68"
        top="-1"
        style="margin-left: auto"
        class="css-g26q68"
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
    </div>
  </div>
</template>
