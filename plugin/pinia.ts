import { useEmailStore } from '~/store'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useEmailStore($pinia)
    }
  }
})