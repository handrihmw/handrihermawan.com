<script setup lang="ts">
import type { Experiencedata } from "@/types/experience";

const props = withDefaults(defineProps<Experiencedata>(), {
  role: "This is Role",
  place: "This is Place",
  date: "This is Date",
  task: "This is Task",
  stack: "This is Stack",
});
</script>

<template>
  <ol class="relative border-l border-gray-400 dark:border-gray-300">
    <li
        class="ml-4"
      >
      <div class="absolute w-3 h-3 bg-emerald-400 rounded-full mt-1.5 -left-1.5 border border-emerald-500 dark:border-teal-300 dark:bg-teal-400"></div>
      <time class="text-sm font-thin leading-none text-gray-600 dark:text-gray-300">{{ props.date }}</time>
      <h3 class="text-xl mb-3 font-medium text-gray-900 dark:text-white mt-2"><span>{{ props.role }}</span> • <span>{{ props.place }}</span></h3>
      <div v-if="Array.isArray(props.task)">
        <p class="mb-4 flex gap-2 text-base font-normal text-gray-600 dark:text-gray-300 md:max-w-screen-lg" v-for="(task, taskIndex) in props.task" :key="taskIndex">
          <div>•</div><span>{{ task }}</span>
        </p>
      </div>
      <span v-else class="mb-4 flex gap-2 text-base font-normal text-gray-600 dark:text-gray-300 md:max-w-screen-lg">{{ props.task }}</span>
      <ul class="flex flex-wrap pb-6" aria-label="Technologies used">
            <li v-for="(stack, stackIndex) in props.stack" :key="stackIndex" class="mr-1.5 mt-2">
              <div
                class="flex items-center rounded-full dark:bg-teal-400/10 bg-teal-500 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 text-slate-50"
              >
                {{ stack }}
              </div>
            </li>
          </ul>
    </li>
  </ol>

</template>

