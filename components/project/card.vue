<script setup lang="ts">
import type { ProjectData } from "@/types/project";

const props = withDefaults(defineProps<ProjectData>(), {
  path: "/",
  title: "This is Title",
  image: "/nuxt-blog/no-image_cyyits.png",
  alt: "This is Alt",
});
</script>

<template>
  <article
    class="max-w-screen-lg flex flex-col overflow-hidden bg-slate-100 drop-shadow-md dark:bg-cyan-900/50 rounded-3xl hover:bg-slate-100 transform transition dark:hover:bg-cyan-950 dark:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:mb-0 md:hover:shadow-lg p-3"
  >
    <div class="overflow-hidden bg-gray-300 rounded-xl">
      <div class="aspect-w-3 aspect-h-2">
        <img
          class="w-full rounded-xl object-cover object-center md:h-80 transform transition duration-500"
          width="300"
          height="80"
          loading="lazy"
          :src="props.image"
          :alt="props.title"
        />
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-4 md:gap-0 justify-between my-3 px-4">
      <div>
        <h2 class="text-2xl font-base text-gray-600 dark:text-gray-300">
          {{ props.title }}
        </h2>
        <p class="font-light font-base text-gray-600 dark:text-gray-300 mt-1">
          Website
        </p>
      </div>
      <NuxtLink
        :to="props.link"
        rel="noopener noreferrer"
        target="_blank"
        class="text-gray-600 dark:text-gray-300 inline-flex items-center gap-1"
      >
        Preview
        <Icon name="heroicons-outline:arrow-right" class="text-lg" />
      </NuxtLink>
    </div>
  </article>
</template>
