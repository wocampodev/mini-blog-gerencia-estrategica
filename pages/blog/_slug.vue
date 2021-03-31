<template>
  <div class="min-h-50 max-w-7xl lg:pt-20 mx-auto grid sm:grid-cols-1">
    <div class="lg:container pt-10 w-full lg:col-span-3">
      <div class="w-full lg:px-6 text-xl text-gray-800 leading-normal">
        <div>
          <p class="text-green-500 font-bold">
            &lt;
            <NuxtLink
              to="/blog"
              class="sm:text-sm uppercase text-green-500 font-bold no-underline hover:underline"
              >Regresar al blog</NuxtLink
            >
          </p>
          <h1 class="font-bold break-normal text-gray-900 pt-6 pb-2 text-2xl">
            {{ post.title }}
          </h1>
          <p class="text-sm font-normal text-gray-600">
            Última actualización: {{ post.updatedAt | fechaPublicacion }}
          </p>
        </div>

        <!--Post Content-->
        <nuxt-content
          class="font-serif pt-6 text-md post-content"
          :document="post"
        />

        <br />

        <p class="sm:text-sm text-green-500 font-bold">
          &lt;
          <NuxtLink
            to="/blog"
            class="sm:text-sm uppercase text-green-500 font-bold no-underline hover:underline"
            >Regresar al blog</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { fechaPublicacion } from '~/util/fechas';
export default {
  layout: "blog",
  async asyncData({ $content, params, error }) {
    try {
      const post = await $content("posts", params.slug)
        .sortBy("createdAt", "asc")
        .fetch();
      return { post };
    } catch (e) {
      error(e);
    }
  },
  filters: {
      fechaPublicacion
  }
};
</script>
