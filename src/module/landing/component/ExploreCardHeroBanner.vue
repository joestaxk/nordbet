<script setup>
const explorer = [
    {
        title: "Bankroll",
        value: "$12M"
    },
    {
        title: "Total Wagered",
        value: "$414M"
    },
    {
        title: "Number of Bets",
        value: "91M"
    },
    {
        title: "Gross RTP",
        value: "96.99%"
    },
    {
        title: "Net RTP",
        value: "98.53%"
    },
]
</script>
<template>
    <div class="text-[15px] w-[260px] min-h-[200px] rounded-[8px] p-4 bg-skin">
        <div class="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" size="16"
                color="#8D8AA8" class="css-1hu26ay">
                <path
                    d="M15 2C15 1.44772 14.5523 1 14 1H2C1.44772 1 1 1.44772 1 2V7H3.38197L4.88196 4L7.11803 4L10 9.76393L11.382 7H15V2Z"
                    fill="currentColor"></path>
                <path
                    d="M15 9H12.618L11.118 12L8.88197 12L6 6.23607L4.61803 9H1V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V9Z"
                    fill="currentColor"></path>
            </svg>
            <p class="font-semibold">Fully Transparent</p>
        </div>

        <div class="mt-4 space-y-2">
            <div class="font-semibold flex justify-between" v-for="({ title, value }, i) in explorer" :key="i">
                <span class="text-skinTextMuted">{{ title }}</span>
                <span :class="{ 'text-success': !i }">{{ value }}</span>
            </div>
        </div>

        <div class="mt-3">
            <a href="" class="underline-link">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" size="15"
                    class="css-1h2lco0">
                    <path
                        d="M7.65181 1.53553C8.635 0.552348 9.96849 0 11.3589 0C14.2544 0 16.6016 2.34721 16.6016 5.24264C16.6016 6.63308 16.0492 7.96656 15.066 8.94975L13.3693 10.6464C13.1741 10.8417 12.8575 10.8417 12.6622 10.6464L11.9551 9.93934C11.7599 9.74408 11.7599 9.4275 11.9551 9.23223L13.6518 7.53553C14.2599 6.92742 14.6016 6.10264 14.6016 5.24264C14.6016 3.45178 13.1498 2 11.3589 2C10.4989 2 9.67414 2.34163 9.06603 2.94975L7.36933 4.64645C7.17407 4.84171 6.85748 4.84171 6.66222 4.64645L5.95512 3.93934C5.75985 3.74408 5.75985 3.4275 5.95512 3.23223L7.65181 1.53553Z"
                        fill="currentColor"></path>
                    <path
                        d="M8.1371 13.0503L9.8338 11.3536C10.0291 11.1583 10.3456 11.1583 10.5409 11.3536L11.248 12.0607C11.4433 12.2559 11.4433 12.5725 11.248 12.7678L9.55131 14.4645C8.56812 15.4477 7.23464 16 5.8442 16C2.94877 16 0.601562 13.6528 0.601562 10.7574C0.601562 9.36693 1.15391 8.03344 2.1371 7.05025L3.8338 5.35355C4.02906 5.15829 4.34564 5.15829 4.5409 5.35355L5.24801 6.06066C5.44327 6.25592 5.44327 6.5725 5.24801 6.76777L3.55131 8.46447C2.9432 9.07258 2.60156 9.89736 2.60156 10.7574C2.60156 12.5482 4.05334 14 5.8442 14C6.70421 14 7.52898 13.6584 8.1371 13.0503Z"
                        fill="currentColor"></path>
                    <path
                        d="M5.95512 11.3536C6.15038 11.5488 6.46696 11.5488 6.66222 11.3536L11.9551 6.06066C12.1504 5.8654 12.1504 5.54882 11.9551 5.35355L11.248 4.64645C11.0527 4.45118 10.7362 4.45118 10.5409 4.64645L5.24801 9.93934C5.05275 10.1346 5.05275 10.4512 5.24801 10.6464L5.95512 11.3536Z"
                        fill="currentColor"></path>
                </svg>
                Blockchain Explorer
            </a>
        </div>
    </div>
</template>