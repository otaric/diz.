<script setup lang="ts" >
import { useI18n } from 'vue-i18n';
import { useLocalStore } from '../utils/store';

const { t, availableLocales } = useI18n()
const store = useLocalStore()

</script>

<template>
  <div class="container-select">
    <select v-model="store.localRef" @change="store.toggleLocalesSelect()" class="select">
      <option value="" class="option">{{ t('message.change') }}</option>
      <option v-for="local in availableLocales" v-bind:value="local" :selected="false" :key="local" class="option">
        {{ local }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.container-select {
  margin-top: 10px;
  height: 30px;
}

.select {
  text-align: center;
  outline: none;
}
</style>