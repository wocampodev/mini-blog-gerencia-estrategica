<template>
  <div
    class="sm:px-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-12"
  >
    <div
      class="mb-4 border-t divide-y transition duration-200 transform border rounded-md shadow-sm hover:scale-105 bg-green-50 border-green-400 hover:border-green-700 group hover:shadow-sm p-4"
    >
      <div class="grid pt-8 sm:grid-cols-1 lg:grid-cols-12">
        <div class="mb-4 sm:mb-0 lg:col-span-4">
          <div
            class="space-y-1 text-xs font-semibold tracking-wide uppercase lg:text-center"
          >
            <p
              href="/"
              class="transition-colors font-bold duration-200 text-green-500 hover:text-green-700"
              aria-label="Category"
            >
              Fecha de publicación
            </p>
            <p class="text-gray-600 font-bold">
              {{ post.createdAt | fechaPublicacion }}
            </p>
          </div>
        </div>
        <div class="lg:col-span-8">
          <div class="mb-3 grid lg:grid-cols-2">
            <div class="lg:col-span-1">
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: post.slug } }"
                aria-label="Article"
                class="inline-block text-black transition-colors duration-200 hover:text-green-700 sm:pt-3 lg:pt-0"
              >
                <h3 class="text-2xl font-bold leading-none">
                  {{ post.title }}
                </h3>
              </NuxtLink>
              <p class="text-gray-700 mt-3">
                {{ post.description }}
              </p>
              <p class="text-gray-700 mt-3">
                <span class="font-bold">Autor:</span> {{ post.author.name }}
              </p>
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: post.slug } }"
                aria-label=""
                class="mt-5 inline-flex items-center font-bold transition-colors duration-200 rounded-md text-gray-50 px-4 py-2 bg-green-500 hover:bg-green-700"
                >Leer más ...</NuxtLink
              >
            </div>
            <div class="flex justify-center w-full lg:col-span-1 sm:pt-3">
              <div>
                <img
                  class="rounded-md mx-auto"
                  :src="post.image"
                  :alt="post.alt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { fechaPublicacion } from "~/util/fechas";
import { tituloPublicacion } from "~/util/textos";

export default Vue.extend({
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  filters: {
    fechaPublicacion,
    tituloPublicacion
  }
});
</script>
