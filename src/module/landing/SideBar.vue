<script setup lang="ts">
import LivePayout from './component/LivePayout.vue';

</script>

<template>
    <div class="sticky top-[100px] lg:w-[300px] h-full mt-3 space-y-3">
        <div class="min-h-[100px] rounded-[16px] bg-skin p-4">
            <div class="flex justify-between items-center text-[16px]">
                <p class="text-skinTextMuted font-bold">Total Bankroll value</p>
                <a href="/" class="text-lemon font-bold">Verify</a>
            </div>

            <div
                class="border border-white/20 rounded-[6px] mt-3 h-10 flex items-center overflow-hidden bg-[rgba(69,69,71,0.36)]">
                <div class="px-2 h-full bg-skin pl-2 flex items-center">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                        size="16" class="css-1hu26ay">
                        <path
                            d="M0 3.34646C0 3.13804 0.129286 2.95148 0.324438 2.8783L7.67842 0.120556C7.88683 0.0424007 8.11536 0.036013 8.32782 0.102405L15.6491 2.39032C15.8579 2.45555 16 2.64887 16 2.86756V4.49996C16 4.7761 15.7761 4.99996 15.5 4.99996H0.5C0.223858 4.99996 0 4.7761 0 4.49996V3.34646Z"
                            fill="currentColor"></path>
                        <path
                            d="M9 7.49996C9 7.22382 9.22386 6.99996 9.5 6.99996H10.5C10.7761 6.99996 11 7.22382 11 7.49996V12H13V7.49996C13 7.22382 13.2239 6.99996 13.5 6.99996H14.5C14.7761 6.99996 15 7.22382 15 7.49996V13H15.5C15.7761 13 16 13.2238 16 13.5V14.5C16 14.7761 15.7761 15 15.5 15H0.5C0.223858 15 0 14.7761 0 14.5V13.5C0 13.2238 0.223858 13 0.5 13H1V7.49996C1 7.22382 1.22386 6.99996 1.5 6.99996H2.5C2.77614 6.99996 3 7.22382 3 7.49996V12H5V7.49996C5 7.22382 5.22386 6.99996 5.5 6.99996H6.5C6.77614 6.99996 7 7.22382 7 7.49996V12H9V7.49996Z"
                            fill="currentColor"></path>
                    </svg>
                </div>

                <div class="flex justify-between w-full mx-2">
                    <p>$11,908,222.80</p>
                    <img src="/images/common/sol.png" class="object-contain" alt="sol" width="15" height="15"
                        srcset="" />
                </div>

            </div>
        </div>

        <LivePayout />
    </div>
</template>