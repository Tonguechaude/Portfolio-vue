<script setup lang="ts">
const links = [
  { name: "GitHub", url: "https://github.com/Tonguechaude", icon: "🐙" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/evan-c-29805a276/",
    icon: "💼",
  },
  { name: "Mastodon", url: "https://mastodon.social/@tonguechaude", icon: "" },
];
</script>

<template>
  <div class="flex gap-4">
    <a
      v-for="link in links"
      :key="link.name"
      :href="link.url"
      target="_blank"
      class="flex items-center gap-1 text-indigo-600 hover:underline dark:text-indigo-400"
    >
      <span>{{ link.icon }}</span> <span>{{ link.name }}</span>
    </a>
  </div>
</template>
