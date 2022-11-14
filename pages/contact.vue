<template>
  <div>
    <h1>Contact</h1>
    <v-container class="mb-12">
      <v-layout row wrap class="mb-3">
        <v-row>
          <v-col align-self="center">
            <v-form @submit.prevent="handleSubmit">
              <v-text-field type="text" name="name" placeholder="Name" v-model="name"></v-text-field>
              <v-text-field type="text" name="email" placeholder="Email" v-model="email"></v-text-field>
              <v-textarea name="message" placeholder="Message" v-model="message"></v-textarea>
              <v-btn type="submit">Send</v-btn>
            </v-form>
            <div>
              <p>Result</p>
              <p>{{ name }}</p>
              <p>{{ email }}</p>
              <p>{{ message }}</p>
            </div>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  import { projectFirestore } from '../firebase/config'

  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      handleSubmit() {
        let userMessage = {
          name: this.name,
          email: this.email,
          message: this.message
        }

        projectFirestore.collection('userMessages').add(userMessage)
      }
    }
  }
</script>
<style>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-leave,
.v-enter-to {
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 300ms;
}
</style>