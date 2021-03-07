<template>
  <div
    class="flex items-center p-2 hover:bg-green-500 hover:border-green-500 text-gray-800 hover:text-gray-100"
  >
    <div
      :class="profundidad(link.depth)"
      class="mr-2 border-b-2 border-green-500"
    >
      <svg
        class="w-6 h-6 transition-colors duration-200 text-green-500 group-hover:text-green-700 sm:w-8 sm:h-8"
        stroke="currentColor"
        viewBox="0 0 52 52"
        v-if="link.depth === 2"
      >
        <polygon
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"
        ></polygon>
      </svg>
    </div>
    <div class="text-gray-800" :class="{ 'font-bold': link.depth === 2 }">
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="js">
export default {
  props: {
    link: Object,
    required: true
  },
  methods: {
    profundidad(value) {
      switch (value) {
        case 2:
          return 'ml-4'
          break;
        case 3:
          return 'ml-12'
          break;
        default:
          return 'ml-0'
          break;
      }
    }
  }
}
</script>
