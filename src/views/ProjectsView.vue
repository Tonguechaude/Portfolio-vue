<script setup lang="ts">
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>
  <div class="p-6 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold mb-6">Mes projets</h2>

    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </div>
</template>
