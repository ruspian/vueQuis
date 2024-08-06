<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// mengambi koriman props dari app.vue
const { quis } = defineProps(['quis']);

// fungsi klik quis
function klikQuis() {
  router.push({ name: 'quis-detail', params: { id: quis.id } });
}

</script>



<template>
  <div class="card" @click="klikQuis">
    <img :src="quis.img" :alt="quis.title" />
    <div class="card-body">
      <h2 class="card-title">{{ quis.title }}</h2>
      <p class="card-text">{{ quis.questions.length }} Pertanyaan</p>
    </div>
  </div>
</template>



<style scoped>
.card {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 30px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}

.card-body {
  padding: 0 10px;
}

.card-title {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
