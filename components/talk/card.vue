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
  <article
    class="max-w-screen-lg flex flex-col lg:flex-row overflow-hidden bg-slate-100 drop-shadow-md dark:bg-cyan-900/50 rounded-lg hover:bg-slate-100 transform transition dark:hover:bg-cyan-950 dark:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:mb-0 md:hover:shadow-lg"
  >
    <div class="basis-1/2 overflow-hidden bg-emerald-600">
      <div class="aspect-w-3 aspect-h-2">
        <img
          class="w-full rounded-t-l-md rounded-b-l-md object-cover object-center md:h-36 lg:h-48 transform transition duration-500"
          width="315"
          height="240"
          loading="lazy"
          :src="props.image"
          :alt="props.alt"
        />
      </div>
    </div>
    <div
      class="basis-1/2 p-4 md:px-6 flex flex-col gap-4 lg:gap-0 justify-between"
    >
      <div>
        <h2
          class="line-clamp-2 text-ellipsis text-lg text-gray-800 dark:text-gray-300"
        >
          {{ props.title }}
        </h2>
        <div class="flex items-center gap-3 mt-2">
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
      <NuxtLink
        :to="props.path"
        rel="noopener noreferrer"
        target="_blank"
        class="text-slate-800 inline-flex items-center gap-1 hover:text-slate-900 border border-dashed border-slate-800 justify-center focus:outline-none rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-slate-200 dark:text-slate-200 dark:hover:text-slate-200 dark:hover:bg-slate-600"
      >
        <Icon name="heroicons-outline:play" class="text-lg" /> Play Video
      </NuxtLink>
    </div>
  </article>
</template>
