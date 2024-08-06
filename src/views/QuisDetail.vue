<script setup>
import QuisHeader from "@/components/QuisHeader.vue";
import QuisKonten from "@/components/QuisKonten.vue";
import HasilQuis from "@/components/HasilQuis.vue";
import { useRoute } from "vue-router";
import sourceQuis from "../data/quisis.json";
import { ref, computed } from "vue";

const route = useRoute();
const quisId = parseInt(route.params.id);
const quis = sourceQuis.find((quis) => quis.id === quisId);

const jawaban = ref(0);
const indexQuis = ref(0);
const tampilkanHasil = ref(false);


const tombolNext = computed(() => { return`${indexQuis.value + 1} / ${quis.questions.length}`});


// const indexQuis = ref(0);
// const tombolNext = ref(`${indexQuis.value + 1} / ${quis.questions.length}`);

// watch(indexQuis, () => {
//   tombolNext.value = `${((indexQuis.value + 1) / quis.questions.length) * 100}%`;
// });

const persentasi = computed(() => {
    return `${((indexQuis.value + 1) / quis.questions.length) * 100}%`;
});

function onKlikOption(option) {
  if (option.correct) {
    jawaban.value++;
  }

  if(indexQuis.value === quis.questions.length - 1) {
    tampilkanHasil.value = true;
    return;
  }

  indexQuis.value++;
}

</script>

<template>
  <QuisHeader :tombolNext="tombolNext" :persentasi="persentasi"/>
  <QuisKonten v-if="!tampilkanHasil" :question="quis.questions[indexQuis]" @klikOption="onKlikOption" />
  <HasilQuis v-else  :panjangQuis="quis.questions.length" :hasilJawaban="jawaban" />
</template>

<style scoped>
button {
  margin-top: 20px;
  width: 100px;
  height: 50px;
  border: none;
  background-color: #adf7b6;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
}

button:hover {
  cursor: pointer;
  background-color: #537657;
  color: white;
}

</style>
