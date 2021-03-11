<template>
  <div class="bg-gray-900 shadow-xl fixed min-w-full z-10">
    <div
      class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="relative grid items-center grid-cols-2 lg:grid-cols-3">
        <ul class="lg:flex flex items-center hidden space-x-8">
          <li>
            <NuxtLink
              to="/blog"
              aria-label="Inicio"
              title="Inicio"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-green-400"
              >Inicio</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/blog"
              aria-label="Blog"
              title="Blog"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-green-400"
              >Blog</NuxtLink
            >
          </li>
        </ul>
        <NuxtLink
          to="/blog"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center lg:mx-auto"
        >
          <svg
            class="w-8 text-green-400"
            viewBox="0 0 24 24"
            stroke-linejoin="round"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg>
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-100"
            >Gerencia Estratégica</span
          >
        </NuxtLink>
        <ul class="lg:flex flex items-center hidden ml-auto space-x-8">
          <li>
            <NuxtLink
              to="/about"
              aria-label="Acerca de"
              title="Acerca de"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-green-400"
              >Acerca de</NuxtLink
            >
          </li>
        </ul>
        <div class="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full z-10">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <NuxtLink
                    to="/blog"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                  >
                    <svg
                      class="w-8 text-green-400"
                      viewBox="0 0 24 24"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke="currentColor"
                      fill="none"
                    >
                      <rect x="3" y="1" width="7" height="12"></rect>
                      <rect x="3" y="17" width="7" height="6"></rect>
                      <rect x="14" y="1" width="7" height="6"></rect>
                      <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <span
                      class="ml-2 text-xl font-bold tracking-wide text-gray-800"
                      >Gerencia Estratégica</span
                    >
                  </NuxtLink>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <NuxtLink
                      to="/blog"
                      aria-label="Inicio"
                      title="Inicio"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                      >Inicio</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/blog"
                      aria-label="Blog"
                      title="Blog"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                      >Blog</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/about"
                      aria-label="Acerca de"
                      title="Acerca de"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                      >Acerca de</NuxtLink
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isMenuOpen: false
    };
  }
});
</script>
