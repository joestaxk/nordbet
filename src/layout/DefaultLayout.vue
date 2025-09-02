<script setup lang="ts">
import Footer from '@/core/common/Footer.vue';
import Header from '@/core/common/Header.vue';
import SideBar from '@/module/landing/SideBar.vue';

</script>

<template>
  <div
    class="relative sm:p-4 p-2 min-h-screen w-full flex justify-center bg-[#151233] text-white font-[500] text-[14px]">
    <div class="max-w-[1920px] w-full">
      <Header />
      <div class="flex lg:flex-row flex-col gap-2">
        <div class="lg:w-[calc(100%-300px)] w-full space-y-3">
          <slot />
        </div>
        <SideBar />
      </div>
      <Footer />
    </div>
  </div>
</template>