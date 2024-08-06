<script setup>
import { ref, watch } from "vue";
import sourceQuis from "../data/quisis.json";
import Card from "../components/card.vue";

const dataQuis = ref(sourceQuis);
const cari = ref("");

// fungsi mencari data
watch(cari, () => {
  dataQuis.value = sourceQuis.filter((quis) => {
    return quis.title.toLowerCase().includes(cari.value.toLowerCase());
  });
});
</script>

<template>
  <header>
    <h1 id="title">vueQuis</h1>
    <input v-model.trim="cari" type="text" id="input" placeholder="Cari" />
  </header>
  <section id="quis-container">
    <!-- mengirim props quis ke card.vue denga perintah :quis="quis" -->
    <Card
      v-for="quis in dataQuis"
      :key="quis.id"
      :quis="quis"
      :dataQuis="dataQuis"
    />
  </section>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

#title {
  font-size: 50px;
}

#input {
  font-size: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#quis-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
}
</style>
