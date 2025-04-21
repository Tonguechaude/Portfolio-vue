<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps<{
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}>();
</script>

<template>
  <div
    class="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-[1.01] transition"
  >
    <img :src="image" alt="image du projet" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <p class="text-gray-600 mt-2">{{ description }}</p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="bg-indigo-100 text-indigo-700 px-2 py-1 text-xs rounded-full"
        >
          #{{ tag }}
        </span>
      </div>

      <a
        :href="link"
        target="_blank"
        class="inline-block mt-4 text-indigo-600 font-medium hover:underline"
      >
        Voir le projet →
      </a>
    </div>
  </div>
</template>
