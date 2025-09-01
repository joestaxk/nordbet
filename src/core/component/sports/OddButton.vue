<template>
    <button
        class="h-[35px] w-full text-white border  border-[#3a4142] hover:bg-[#242829] cursor-pointer flex p-[0px_8px] overflow-hidden relative bg-[#3a4142] font-[600] leading-[30px] justify-between rounded-[8px] transition-colors">
        <div class="flex-[.2_1_0%] text-white/50 text-[12px] transition-colors ease-in-out pr-[4px]">
            <div class="overflow-hidden">{{ market }}</div>
        </div>
        <div class="flex-none font-[12px] self-center text-right leading-[1.2]">
            {{ odd }}
        </div>
    </button>
</template>

<script setup>
const { market, odd } = defineProps(['market', 'odd'])
</script>