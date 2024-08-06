<script setup>
import { defineProps } from 'vue';

const { tombolNext, persentasi } = defineProps(['tombolNext', 'persentasi']);
</script>


<template>
  <header>
    <h3>Pertanyaan {{ tombolNext }}</h3>
    <div class="bar">
      <div class="bar-progress" :style="{ width: persentasi }"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 20px;
}

header h3 {
  font-size: 30px;
}

.bar {
  width: 100%;
  height: 50px;
  border: 3px solid #adf7b6;
}

.bar-progress {
  width: 0%;
  height: 100%;
  background-color: #adf7b6;
}
</style>
