<template>
  <div
    class="px-4 sm:pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 sm:px-0 lg:px-8 lg:pt-8"
  >
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div class="flex flex-col mb-16 sm:text-center sm:mb-0">
        <a href="/" class="mb-6 sm:mx-auto">
          <div class="flex items-center justify-center w-48 h-48 rounded-full">
            <img
              :src="require('~/assets/images/logo-unprg.png')"
              alt=""
              loading="lazy"
            />
          </div>
        </a>
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <h2
            class="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
          >
            Blog sobre Gerencia Estratégica
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Parte del curso dictado en la Escuela Profesional de Ingeniería de
            Sistemas de la UNPRG de Lamabayeque - Perú
          </p>
        </div>
        <slot name="external-link"></slot>
      </div>
    </div>
  </div>
</template>
