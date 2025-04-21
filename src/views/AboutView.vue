<script setup lang="ts">
import SocialLinks from "@/components/SocialLinks.vue";
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 text-gray-800 dark:text-gray-200">
    <h1 class="text-4xl font-bold mb-4">À propos de moi</h1>

    <p class="mb-4">
      Salut ! Moi c’est <strong>Tonguechaude</strong>, passionné d'informatique
      et libriste à mes heures perdues. J’aime créer des projets fun, créatifs,
      et accessibles.
    </p>

    <p class="mb-4">
      Mon stack préféré : <strong>Rust + C + Java </strong>. J’aime aussi la
      cyber/réseau, le bas niveau, tout ce qui s'apparente à de l'administration
      système, et bidouiller des trucs juste pour le fun.
    </p>

    <p class="mb-4">
      En ce moment je travaille sur un portfolio pour montrer mes créations 👇
    </p>

    <div class="mt-6">
      <h2 class="text-2xl font-semibold mb-2">Retrouve-moi ici :</h2>
      <SocialLinks />
    </div>
  </div>
</template>
