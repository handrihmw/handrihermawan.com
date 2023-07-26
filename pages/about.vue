<script setup lang="ts">
import { ref } from "vue";
import abouts from "@/assets/json/about.json";

const items = ref(abouts);

useHead({
  title: 'About Me',
  meta: [
    {
      name: 'description',
      content: 'All about me.',
    },
  ],
  titleTemplate: 'Handri Hermawan - %s',
})
</script>

<template>
  <div class="mx-auto my-10 max-w-screen-xl overflow-hidden px-6 xl:px-1">
    <AboutHero />
    <AboutDetail
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :place="item.place"
      :description="item.description"
      :stack="item.stack"
      :image="item.image"
      :alt="item.name"
    />
    <div class="justify-left flex gap-3">
      <LogoVue />
      <LogoTypescript />
      <LogoPhp />
      <LogoTailwind />
      <LogoVscode />
      <LogoFigma />
    </div>
  </div>
</template>
