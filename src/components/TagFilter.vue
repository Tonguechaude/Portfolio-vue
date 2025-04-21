<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps<{
  tags: string[];
  selectedTag: string | null;
}>();

// eslint-disable-next-line no-undef
const emit = defineEmits<{
  (e: "update:selectedTag", tag: string | null): void;
}>();

const selectTag = (tag: string) => {
  emit("update:selectedTag", tag === props.selectedTag ? null : tag);
};
</script>

<template>
  <div class="flex flex-wrap gap-2 mb-6">
    <button
      v-for="tag in tags"
      :key="tag"
      @click="selectTag(tag)"
      class="px-3 py-1 rounded-full border text-sm font-medium transition"
      :class="{
        'bg-indigo-600 text-white border-indigo-600': selectedTag === tag,
        'bg-white text-gray-700 border-gray-300 hover:bg-gray-100':
          selectedTag !== tag,
      }"
    >
      #{{ tag }}
    </button>
  </div>
</template>
