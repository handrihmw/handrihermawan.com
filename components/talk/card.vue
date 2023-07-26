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
      class="as-card max-w-screen-lg overflow-hidden rounded-lg border border-gray-400 border-opacity-30 bg-transparent shadow-sm dark:bg-gray-800"
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
        <div class="mt-4 flex items-center gap-3">
          <p
            class="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-400"
          >
            <Icon name="heroicons-outline:user-circle" class="text-lg" />
            {{ props.role }}
          </p>
          <p
            class="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-400"
          >
            <Icon name="heroicons-outline:calendar-days" class="text-lg" />
            {{ props.date }}
          </p>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>
