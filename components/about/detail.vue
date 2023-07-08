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
  <div>
    <img
      class="h-48 w-48 rounded-md object-cover"
      loading="lazy"
      width="32"
      height="32"
      :src="props.image"
      :alt="props.alt"
    />
    <h1
      class="mt-6 text-3xl font-semibold capitalize text-gray-800 dark:text-gray-300"
    >
      {{ props.name }}
    </h1>
    <p class="mt-2 font-light capitalize text-gray-700 dark:text-gray-400">
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
  </div>
</template>
