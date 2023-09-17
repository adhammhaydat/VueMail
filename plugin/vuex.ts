import { useEmailStore } from '~/store'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(useEmailStore);
})