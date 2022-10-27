<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Button from './components/Button.vue';
import Select from './components/Select.vue';

const { t } = useI18n()

</script>

<template>
  <div class="container">
    <h1 class="title">{{ t('message.title') }}</h1>
    <Button />
    <Select />
  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-width: 1280px;
  justify-content: center;
  align-items: center;
}

.title {
  color: #dee2e6;
  font-size: 4rem;
  height: 120px;
  padding: 10px 0;
}
</style>
