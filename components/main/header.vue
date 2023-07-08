<template>
  <nav class="fixed w-full p-2 bg-gray-100 dark:bg-gray-900 md:p-6">
    <div class="flex items-center justify-between p-2 lg:px-32">
      <div>
        <LogoHandri />
      </div>
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-gray-200"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:block">
        <ul
          class="flex space-x-8 text-sm font-base uppercase text-gray-800 dark:text-gray-200"
        >
          <li v-for="menuItem in menuItems" :key="menuItem.path">
            <NuxtLink
              :to="menuItem.path"
              :class="{ active: isActive(menuItem.path) }"
              active-class="border-b-2 border-fuchsia-500 pb-1"
              @click="isOpen = false"
            >
              {{ menuItem.title }}
            </NuxtLink>
          </li>
          <li>
            <MainMode />
          </li>
        </ul>
      </div>
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="fixed inset-0 z-10 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>
      <aside
        class="fixed left-0 top-0 z-30 h-full w-64 transform overflow-auto bg-gray-900 p-5 text-gray-200 transition-all duration-300 ease-in-out"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute right-0 top-0 mr-4 mt-4"
            @click="isOpen = false"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span @click="isOpen = false" class="flex w-full items-center p-4">
          <LogoHandri />
        </span>

        <ul class="divide-y divide-gray-800">
          <li v-for="menuItem in menuItems" :key="menuItem.path">
            <NuxtLink
              :to="menuItem.path"
              :class="{ active: isActive(menuItem.path) }"
              @click="isOpen = false"
            >
              {{ menuItem.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const activePath = ref("/");

const drawer = () => {
  isOpen.value = !isOpen.value;
};

watch(isOpen, (newValue) => {
  if (process.client) {
    if (newValue) document.body.style.setProperty("overflow", "hidden");
    else document.body.style.removeProperty("overflow");
  }
});

onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27 && isOpen.value) isOpen.value = false;
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", (e) => {
    if (e.keyCode == 27 && isOpen.value) isOpen.value = false;
  });
});

const menuItems = [
  { path: "/", title: "Home" },
  { path: "/blogs", title: "Blog" },
  { path: "/talks", title: "Talk" },
  { path: "/experience", title: "Experience" },
  { path: "/about", title: "About" },
];

const isActive = (path) => {
  return activePath.value === path;
};
</script>