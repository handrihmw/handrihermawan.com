<script setup lang="ts">
import type { AboutData } from "@/types/about";

const props = withDefaults(defineProps<AboutData>(), {
  image: "This is Image",
  alt: "This is Alt",
  name: "This is Name",
  place: "This is place",
  description: "This is Description",
  stack: "This is Stack",
});
</script>

<template>
  <div class="container mx-auto flex flex-col md:flex-row">
    <div
      class="mb-16 flex flex-col md:mb-0 md:w-1/2 md:items-start md:pr-16 lg:flex-grow lg:pr-24"
    >
      <h1
        class="mt-6 text-3xl font-semibold capitalize text-gray-800 dark:text-gray-300"
      >
        {{ props.name }}
      </h1>
      <p
        class="mt-2 flex items-center gap-2 font-light capitalize text-gray-700 dark:text-gray-400"
      >
        <Icon
          name="heroicons-outline:map-pin"
          class="text-xl text-gray-700 dark:text-gray-400"
        />
        {{ props.place }}
      </p>
      <p
        class="font-sm mb-4 mt-8 max-w-screen-sm text-gray-800 dark:text-gray-300"
      >
        {{ props.description }}
      </p>
      <p class="font-md mb-6 text-gray-800 dark:text-gray-300">
        {{ props.stack }}
      </p>
      <div class="justify-left flex gap-3">
        <LogoVue />
        <LogoTypescript />
        <LogoPhp />
        <LogoTailwind />
        <LogoVscode />
        <LogoFigma />
      </div>
    </div>
    <div class="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg order-first md:order-last">
      <img
        class="rounded object-cover object-center grayscale"
        :src="props.image"
        :alt="props.alt"
      />
    </div>
  </div>
</template>
