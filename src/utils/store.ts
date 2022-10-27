import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLocalStore = defineStore('local', () => {
  const localRef = ref('')
  const text = ref('BBBB')
  const { availableLocales, locale } = useI18n()

  function toggleLocales() {
    const locales = availableLocales
    locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    localRef.value = locale.value
  }

  function toggleLocalesSelect() {
    if (localRef.value === '') {
      return locale.value
    }
    locale.value = localRef.value
  }

  function change(newValue: any) {
    text.value = newValue
  }

  return { text, localRef, toggleLocales, toggleLocalesSelect, change }
})
