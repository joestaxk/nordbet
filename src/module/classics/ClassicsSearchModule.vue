<template>
  <div class="w-full min-h-screen mt-3 rounded-[16px] mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-skin">
    <!-- Search Bar (unchanged) -->
    <div class="relative mb-8 max-w-full mx-auto">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <input v-model="searchQuery" type="text" placeholder="Search by name"
        class="block w-full pl-10 pr-3 py-3 border border-gray-400 rounded-full bg-skin shadow-sm focus:outline-none focus:ring-2 focus:ring-lemon focus:border-lemon" />
    </div>

    <!-- Corrected Game Grid -->
    <DynamicGrid :datas="filteredGames" :column="2" :cardWidth="198">
      <template #card="{ data }">
        <SingleGameCard v-bind="data" class="" />
      </template>
    </DynamicGrid>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import DynamicGrid from '@/core/component/DynamicGrid.vue'
import SingleGameCard from '@/core/component/SingleGameCard.vue'

// Sample game data
const games = ref([
  {
    id: 1,
    payout: '$10,000',
    name: 'Plinko',
    imgUrl: '/images/landing/plinko.jpg',
    rating: 4,
    rtp: 96.3,
    isNew: true,
    link: "/"
  },
  {
    id: 2,
    payout: '$10,000',
    name: 'FruitFiesta',
    imgUrl: '/images/landing/FruitFiesta.jpg',
    rating: 4,
    rtp: 96.2,
    isNew: false,
    link: "/"
  },
  {
    id: 3,
    payout: '$10,000',
    name: "MysticGemstorm",
    imgUrl: '/images/landing/MysticGemstorm.jpg',
    rating: 5,
    rtp: 96.5,
    isNew: true,
    link: "/"
  },
  {
    id: 4,
    payout: '$10,000',
    name: 'Sugar Blitz',
    imgUrl: '/images/landing/SugarBlitz.jpg',
    rating: 3,
    rtp: 95.8,
    isNew: false,
    link: "/"
  },
  {
    id: 5,
    payout: '$10,000',
    name: 'Fruit Fiesta',
    imgUrl: '/images/landing/plinko.jpg',
    rating: 4,
    rtp: 96.1,
    isNew: false,
    link: "/"
  },
  {
    id: 1,
    payout: '$10,000',
    name: 'Plinko',
    imgUrl: '/images/landing/plinko.jpg',
    rating: 4,
    rtp: 96.3,
    isNew: true,
    link: "/"
  },
  {
    id: 2,
    payout: '$10,000',
    name: 'FruitFiesta',
    imgUrl: '/images/landing/FruitFiesta.jpg',
    rating: 4,
    rtp: 96.2,
    isNew: false,
    link: "/"
  },
  {
    id: 3,
    payout: '$10,000',
    name: "MysticGemstorm",
    imgUrl: '/images/landing/MysticGemstorm.jpg',
    rating: 5,
    rtp: 96.5,
    isNew: true,
    link: "/"
  },
  {
    id: 4,
    payout: '$10,000',
    name: 'Sugar Blitz',
    imgUrl: '/images/landing/SugarBlitz.jpg',
    rating: 3,
    rtp: 95.8,
    isNew: false,
    link: "/"
  },
  {
    id: 5,
    payout: '$10,000',
    name: 'Fruit Fiesta',
    imgUrl: '/images/landing/plinko.jpg',
    rating: 4,
    rtp: 96.1,
    isNew: false,
    link: "/"
  },
  {
    id: 1,
    payout: '$10,000',
    name: 'Plinko',
    imgUrl: '/images/landing/plinko.jpg',
    rating: 4,
    rtp: 96.3,
    isNew: true,
    link: "/"
  },
  {
    id: 2,
    payout: '$10,000',
    name: 'FruitFiesta',
    imgUrl: '/images/landing/FruitFiesta.jpg',
    rating: 4,
    rtp: 96.2,
    isNew: false,
    link: "/"
  },
  {
    id: 3,
    payout: '$10,000',
    name: "MysticGemstorm",
    imgUrl: '/images/landing/MysticGemstorm.jpg',
    rating: 5,
    rtp: 96.5,
    isNew: true,
    link: "/"
  },
  {
    id: 4,
    payout: '$10,000',
    name: 'Sugar Blitz',
    imgUrl: '/images/landing/SugarBlitz.jpg',
    rating: 3,
    rtp: 95.8,
    isNew: false,
    link: "/"
  },
  {
    id: 5,
    payout: '$10,000',
    name: 'Fruit Fiesta',
    imgUrl: '/images/landing/plinko.jpg',
    rating: 4,
    rtp: 96.1,
    isNew: false,
    link: "/"
  },
])

const searchQuery = ref('')

// Computed property for filtered games
const filteredGames = computed(() => {
  return games.value.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})
</script>
