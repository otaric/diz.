<script setup lang="ts" >
import { useI18n } from 'vue-i18n';
import { useLocalStore } from '../utils/store';

const { t } = useI18n()
const store = useLocalStore()

</script>

<template>
  <button class="button" @click="store.toggleLocales()" :title="t('message.change')">{{ t('message.change') }}</button>
</template>

<style scoped>
.button {
  color: #242424;
  padding: 5px;
  background-color: #dee2e6;
  font-weight: bold;
  border: none;
  cursor: pointer;
}
</style>