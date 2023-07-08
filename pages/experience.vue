
<script setup lang="ts">
import { ref } from "vue";
import experiences from "@/assets/json/experience.json";

const items = ref(experiences);
</script>
<template>
  <div class="mx-auto my-10 max-w-screen-xl overflow-hidden px-6 lg:px-1">
    <ExperienceHero />
    <ExperienceCard
      v-for="item in items"
      :key="item.role"
      :role="item.role"
      :place="item.place"
      :date="item.date"
      :task="item.task"
    />
  </div>
</template>