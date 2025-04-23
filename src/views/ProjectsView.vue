<script setup lang="ts">
import { ref, computed } from "vue";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard.vue";
import TagFilter from "@/components/TagFilter.vue";

const selectedTags = ref<string[]>([]);

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

const filteredProjects = computed(() => {
  if (selectedTags.value.length === 0) return projects;
  return projects.filter((p) =>
    selectedTags.value.every((tag) => p.tags.includes(tag))
  );
});
</script>

<template>
  <div class="p-6 max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold mb-4">Mes projets</h2>

    <TagFilter
      :tags="allTags"
      :selectedTags="selectedTags"
      @update:selectedTags="(tags) => (selectedTags = tags)"
    />

    <br />

    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </div>
</template>
