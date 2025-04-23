<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="tag in tags"
      :key="tag"
      @click="toggleTag(tag)"
      :class="[
        'px-3 py-1 rounded-full border transition',
        selectedTags.includes(tag)
          ? 'bg-indigo-600 text-white border-indigo-600'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600',
      ]"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps<{
  tags: string[];
  selectedTags: string[];
}>();

// eslint-disable-next-line no-undef
const emit = defineEmits<{
  (e: "update:selectedTags", tags: string[]): void;
}>();

function toggleTag(tag: string) {
  const isSelected = props.selectedTags.includes(tag);
  const newSelection = isSelected
    ? props.selectedTags.filter((t) => t !== tag)
    : [...props.selectedTags, tag];

  emit("update:selectedTags", newSelection);
}
</script>
