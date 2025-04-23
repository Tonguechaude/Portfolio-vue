<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps<{
  events: {
    year: string;
    title: string;
    description: string;
  }[];
}>();
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6 text-center">🎓 Mon parcours</h2>
    <ul
      class="border-l-4 border-indigo-500 dark:border-indigo-400 pl-6 space-y-6"
    >
      <li v-for="event in events" :key="event.year" class="relative group">
        <div
          class="absolute -left-[0.75rem] top-1 w-3 h-3 bg-indigo-500 dark:bg-indigo-400 rounded-full group-hover:scale-125 transition"
        />
        <div>
          <h3 class="text-xl font-semibold">{{ event.title }}</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400">{{
            event.year
          }}</span>
          <p class="mt-1">{{ event.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
