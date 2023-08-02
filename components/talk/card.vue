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
      class="as-card max-w-screen-lg overflow-hidden bg-slate-100 drop-shadow-md hover:bg-slate-100 dark:bg-cyan-900/50 rounded-lg dark:hover:bg-cyan-900/50 dark:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
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
