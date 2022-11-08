<template>
  <div>
    <h1>Contact</h1>
    <v-container class="mb-12">
      <v-layout row wrap class="mb-3">
        <v-row>
          <v-col align-self="center">
            <v-form>
              <v-text-field type="text" name="name" placeholder="Name"></v-text-field>
              <v-text-field type="text" name="email" placeholder="Email"></v-text-field>
              <v-textarea name="message" placeholder="Message"></v-textarea>
              <v-btn type="submit">Send</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
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