import { defineStore } from "pinia"

export const useState = defineStore('state', {
  state() {
    return {
      isAudioPlay: false,
     
    }
  },
  actions: {
    sumbitMessage( form ) {
      // Destructuring form
      const { guestName, guestStatus, guestMessage } = form
      const timestamp = new Date().toLocaleString()

     // Push
      try {
        this.messages.push({ guestName, guestStatus, guestMessage, timestamp })
        return true
      } catch(err) { return err }
    }
  }
})
