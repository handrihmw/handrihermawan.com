<template>
  <nav
    class="dark:bg-dark fixed lg:flex w-full justify-center bg-gray-100 bg-opacity-50 px-8 lg:px-2 p-2 text-gray-900 backdrop-blur-lg backdrop-filter dark:bg-transparent dark:bg-opacity-50 dark:text-gray-100 md:p-4"
  >
    <div class="flex max-w-screen-xl items-center justify-between">
      <NuxtLink to="/" class="flex items-center lg:hidden" aria-label="logo handri">
        <LogoHandri />
      </NuxtLink>
      <div class="lg:hidden">
        <button @click="drawer" aria-label="menu mobile">
          <svg
            class="h-8 w-8 fill-current text-gray-800 dark:text-gray-200"
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
      <div class="hidden lg:block">
        <ul
          class="font-base flex items-center space-x-8 text-sm uppercase text-gray-800 dark:text-gray-200"
        >
          <li v-for="menuItem in menuItems" :key="menuItem.path">
            <NuxtLink
              class="flex items-center gap-2"
              :to="menuItem.path"
              :class="{ active: isActive(menuItem.path) }"
              active-class="border-b-2 border-cyan-700 pb-1"
              @click="isOpen = false"
            >
              <Icon
                :name="`heroicons-outline:${menuItem.icon}`"
                class="text-xl"
              />
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
        class="h-100 fixed left-0 top-0 z-30 w-full transform overflow-hidden rounded-b-xl bg-slate-200 p-5 text-gray-200 shadow-md backdrop-blur-xl backdrop-filter transition-all duration-300 ease-in-out dark:bg-cyan-950"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close flex items-center justify-between">
          <MainMode />
          <div @click="isOpen = false">
            <LogoHandri />
          </div>
          <button
            class="rounded-full border border-gray-500 p-2"
            @click="isOpen = false"
            aria-label="close menu"
          >
            <svg
              class="h-6 w-6 text-gray-800 dark:text-gray-200"
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

        <ul class="mt-5">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.path"
            class="py-3 text-gray-800 dark:text-gray-200"
          >
            <NuxtLink
              :to="menuItem.path"
              :class="{ active: isActive(menuItem.path) }"
              @click="isOpen = false"
            >
              <div class="flex items-center gap-2">
                <Icon
                  :name="`heroicons-outline:${menuItem.icon}`"
                  class="text-xl"
                />
                <span>{{ menuItem.title }}</span>
              </div>
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
  { path: "/", icon: "home", title: "Home" },
  { path: "/blogs", icon: "newspaper", title: "Blog" },
  { path: "/talks", icon: "chat", title: "Talk" },
  { path: "/experience", icon: "briefcase", title: "Experience" },
  { path: "/project", icon: "wrench-screwdriver", title: "Project" },
  { path: "/about", icon: "information-circle", title: "About" },
];

const isActive = (path) => {
  return activePath.value === path;
};
</script>
