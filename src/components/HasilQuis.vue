<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const { panjangQuis, hasilJawaban } = defineProps(['panjangQuis', 'hasilJawaban']);
</script>

<template>
    <section class="hasil">
        <p>hasil :</p>
        <h1>{{ hasilJawaban }} / {{ panjangQuis }}</h1>
        <RouterLink to="/">Kembali</RouterLink>
    </section>
</template>


<style scoped>
.hasil {
    text-align: center;
    margin-top: 20px;
}

.hasil p {
    font-size: 20px;
    font-weight: bold;
}

.hasil h1 {
    font-size: 40px;
    font-weight: bold;
}
</style>