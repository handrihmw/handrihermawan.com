<template>
  <div class="bg-gray-100 dark:bg-gray-900">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <SeoKit />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const description =
  "Personal blog by Handri Hermawan Cover about frontend development, web performance, design system and other.";
const ogTitle =
  "Personal blog by Handri Hermawan Cover about frontend development, web performance, design system and other.";
const twitterDescription =
  "Personal blog by Handri Hermawan Cover about frontend development, web performance, design system and other.";
const image = "https://avatars.githubusercontent.com/u/37602237?v=4";
const mySite = "https://handrihermawan.com/";
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "description",
      content: description,
    },
    { property: "og:site_name", content: mySite },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: mySite,
    },
    {
      property: "og:title",
      content: ogTitle,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },
    { name: "twitter:site", content: "@handrihmw" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: mySite,
    },
    {
      name: "twitter:title",
      content: ogTitle,
    },
    {
      name: "twitter:description",
      content: twitterDescription,
    },
    {
      name: "twitter:image",
      content: image,
    },
  ],
});
useSchemaOrg([
  definePerson({
    name: 'Handri Hermawan',
    image: 'http://localhost:3000/images/handrihmw.webp',
    sameAs: [
      'https://github.com/handrihmw',
    ]
  }),
  defineWebSite({/* ... */}),
  defineWebPage(),
])

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
