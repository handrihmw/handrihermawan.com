<script setup lang="ts">
import type { TalkData } from "@/types/talk";

const props = withDefaults(defineProps<TalkData>(), {
  path: "/",
  title: "This is Title",
  role: "This is Role",
  date: "This is Date",
  image: "/nuxt-blog/no-image_cyyits.png",
  alt: "This is Alt",
});
</script>

<template>
  <NuxtLink :to="props.path">
    <article
      class="as-card bg-dark-100 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 dark:bg-gray-800"
    >
      <div class="aspect-w-3 aspect-h-2">
        <img
          class="w-full rounded-t-md object-cover object-center md:h-36 lg:h-48"
          width="315"
          height="240"
          loading="lazy"
          :src="props.image"
          :alt="props.alt"
        />
      </div>
      <div class="px-4 pb-6 pt-5">
        <h2
          class="line-clamp-2 text-ellipsis text-lg text-gray-800 dark:text-gray-300"
        >
          {{ props.title }}
        </h2>
        <p class="mt-3 text-sm text-gray-700 dark:text-gray-300">
          {{ props.role }}
        </p>
        <p class="mt-2 text-xs text-gray-800 dark:text-gray-400">
          {{ props.date }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
