<script setup lang="ts">
import { ref } from "vue";
import abouts from "@/assets/json/about.json";

const items = ref(abouts);
</script>

<template>
  <div class="mx-auto mt-10 max-w-screen-lg overflow-hidden px-6 lg:px-1">
    <div
      class="justify-content-center md:justify-content-left group flex flex-col"
    >
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
  </div>
</template>
