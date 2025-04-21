<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center"
  >
    <div class="animate-bounce text-6xl mb-4">🚧</div>

    <h1 class="text-4xl sm:text-5xl font-bold mb-4">
      Ce site est
      <span class="text-indigo-600 dark:text-indigo-400">en construction</span
      >...
    </h1>

    <p class="text-lg sm:text-xl max-w-xl mb-6">
      ...mais pas d’inquiétude,
      <span class="font-semibold">de belles choses arrivent</span> très bientôt.
      En attendant, tu peux déjà jeter un œil à mes projets ou me suivre sur les
      réseaux 👇
    </p>

    <router-link
      to="/projects"
      class="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full text-lg hover:bg-indigo-700 transition"
    >
      Voir les projets
    </router-link>

    <div class="mt-6">
      <SocialLinks />
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialLinks from "@/components/SocialLinks.vue";
</script>
