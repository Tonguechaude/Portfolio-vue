<template>
  <div class="text-center">
    <h2 class="text-2xl font-bold mb-4">💼 Carte de visite</h2>
    <div
      class="inline-block p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg transition hover:scale-105 hover:shadow-2xl"
    >
      <p class="text-xl font-semibold mb-1">Evan Challias</p>
      <p class="text-gray-600 dark:text-gray-400 mb-2">DevOps</p>
      <div class="flex flex-wrap justify-center gap-3 text-sm">
        <span
          v-for="skill in skills"
          :key="skill"
          class="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-full"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps<{
  skills: string[];
}>();
</script>
