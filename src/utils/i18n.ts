import { createI18n } from 'vue-i18n'

enum LOCALES {
  EN = 'en',
  PT = 'pt-BR',
  ES = 'es',
  FR = "fr",
  KR = "kr",
  JP = "jp"
}

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../../locales/*.json', { eager: true })
  ).map(([key, value]) => {
    return [key.slice(14, -5 ), value.default]
  })
)

export const i18n = createI18n({
  legacy: false,
  locale: 'pt-BR',
  messages
})
