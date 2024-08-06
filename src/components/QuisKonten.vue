<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['klikOption']);
const { question } = defineProps(['question']);

function emitKlikOption(option) {
    emit('klikOption', option);
}
</script>


<template>
    <section id="questions-container">
        <h1 class="question-tittle">{{ question.text }}</h1>
    </section>
    <section id="options-container">
        <div class="option" v-for="option in question.answers" :key="option.id" @click="emitKlikOption(option)">
            <p class="option-label">{{ option.label }}.</p>
            <div class="option-value">{{ option.text }}</div>
        </div>
    </section>
</template>


<style scoped>
#questions-container {
    margin-top: 20px;
}

.question-tittle {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

#options-container {
    margin-top: 20px;
}

.option {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.option-label {
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10%;
    border: 3px solid #adf7b6
}

.option-value {
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px;
    background-color: #e2e2e2;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 0 10px 10px 0;
}
</style>