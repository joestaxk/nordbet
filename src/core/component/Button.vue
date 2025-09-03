<template>
  <button
    style="
      background-image: linear-gradient(90deg, rgb(238, 36, 93), rgb(232, 113, 174));
      box-shadow:
        rgba(238, 35, 206, 0.3) 0px 0px 12px,
        rgb(202, 29, 70) 0px -2px inset;
    "
    class="cursor-pointer hover:scale-[98%] transition-transform duration-200 inline-flex items-center justify-center whitespace-nowrap select-none md:h-[48px] h-[39px] md:p-[0_24px] p-[0_16px] rounded-[12px] text-[rgb(21,18,51)] xs:text-[15px] text-[12px] font-[700]"
  >
    <slot></slot>
  </button>
</template>
