<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}</router-link
    >
  </div>
  <div>
    <pre>{{ meals }}</pre>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import store from "../store";
import { computed, onMounted } from "vue";
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
