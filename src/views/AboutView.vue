<template>
  <section class="max-w-4xl mx-auto p-6 text-gray-800">
    <header class="text-center">
      <h1 class="text-4xl sm:text-5xl font-bold mb-2">À propos de moi</h1>
    </header>

    <div class="space-y-4 text-lg leading-relaxed">
      <p class="mb-4">
        Salut ! Moi c’est <strong>Evan Challias</strong>, passionné
        d'informatique et libriste à mes heures perdues. J’aime créer des
        projets fun, créatifs, et accessibles.
      </p>

      <Timeline :events="timeline" />

      <br />

      <p class="mb-4">
        Ma stack préféré : <strong>Rust + C + Java </strong>. J’aime aussi la
        cyber/réseau, le bas niveau, tout ce qui s'apparente à de
        l'administration système, et bidouiller des trucs juste pour le fun.
      </p>

      <p class="mb-4">
        Quand je ne code pas, je suis sûrement en train de ✨ bidouiller une
        idée créative, découvrir un nouvel outil, ou refaire mon setup pour la
        la 12ᵉ fois...
      </p>

      <BusinessCard :skills="skills" />

      <div class="mt-6">
        <h2 class="text-2xl font-semibold mb-2">Retrouve-moi ici :</h2>
        <SocialLinks />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SocialLinks from "@/components/SocialLinks.vue";
import Timeline from "@/components/TimeLine.vue";
import BusinessCard from "@/components/BusinessCard.vue";

const timeline = [
  {
    year: "2024 - aujourd’hui",
    title:
      "BUT Informatique 2eme année parcours DACS (Développement d'Applications Comuniquantes et Sécurisées)",
    description:
      "Spécialisation en Cryptographie, Java, C, Docker, Système/Réseaux. Alternance chez Adullact",
  },
  {
    year: "2023 - 2024",
    title: "BUT Informatique 1er année",
    description:
      "Spécialisation dans le développement Java, SQL, C, Système Linux/Unix, premières expériences en entreprise.",
  },
  {
    year: "2020 - 2023",
    title: "BAC STI2D option SIN (Science de l'Informatique et du Numérique)",
    description:
      "Initiation au développement bas niveau, découverte de l'univers de la programmation embarquée.",
  },
];

const skills = ["Rust", "Java", "C", "Administration Système", "Docker"];
</script>
