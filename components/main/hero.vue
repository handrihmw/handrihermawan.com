<template>
  <div class="mx-auto my-12 max-w-screen-xl px-8 py-6 xl:px-1">
    <div class="flex flex-col">
      <div class="mb-2 flex items-center gap-2">
        <div
          class="text-xl italic text-gray-700 dark:text-gray-300 lg:text-2xl"
        >
          hey!
        </div>
      </div>
      <h1
        class="text-4xl font-extrabold text-gray-800 dark:text-gray-200 md:text-6xl"
      >
        I'm
        <span
          class="bg-gradient-to-br from-cyan-500 to-emerald-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl"
          >Handri</span
        >
        Hermawan.
      </h1>
      <div class="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center">
        <hr class="w-10 border bg-gray-800 dark:bg-gray-400" />
        <span class="md:text-md text-sm text-gray-700 dark:text-gray-300">
          a Front End Developer, Web Performance, and Design System
        </span>
      </div>
      <div class="mt-6">
        <NuxtLink
          href="/about"
          class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-emerald-500 dark:text-white dark:focus:ring-cyan-800"
        >
          <span
            class="relative rounded-md bg-slate-100 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-slate-800"
          >
            See more about me
          </span>
        </NuxtLink>
        <NuxtLink
          href="https://drive.google.com/file/d/1A5pj98aFHLFAfaagslyrMWH01NUy0hbq/view?usp=sharing"
          target="_blank"
          rel="noopener"
          class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-emerald-500 dark:text-white dark:focus:ring-cyan-800"
        >
          <span
            class="relative rounded-md bg-slate-100 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-slate-800"
          >
            Resume
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
