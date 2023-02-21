<template>
  <div>
    <h1>Contact</h1>
    <v-container class="mb-12">
      <v-layout row wrap class="mb-3">
        <v-row>
          <v-col align-self="center">
            <div id="contact-form-wrapper">
              <v-form @submit.prevent="handleSubmit">
                <h3>How can I help you?</h3>
                <v-text-field type="text" name="name" placeholder="Name" v-model="form.name" required></v-text-field>
                <v-text-field type="text" name="email" placeholder="Email" v-model="form.email" required></v-text-field>
                <v-textarea name="message" placeholder="Message" v-model="form.message" required></v-textarea>
                <v-btn type="submit">Send</v-btn>
              </v-form>
            </div>
            <!-- <div>
              <p>{{ form.name }}</p>
              <p>{{ form.email }}</p>
              <p>{{ form.message }}</p>
            </div> -->
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  import secure from '@/secure'
  import axios from 'axios'
  export default {
    name: 'ContactForm',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    head () {
      return {
        title: 'Contact Web Developer in Portland, Oregon',
        titleTemplate: false,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Contact Web Developer in Portland, Oregon'
          }
        ]      
      }
    },
    methods: {
      handleSubmit: async function() {
        const formData = new FormData();
        for (let [key, value] of Object.entries(this.form)) {
          formData.append(key, value);
        }

        await axios
          .post(secure.formeezyEndpoint, formData)
          .then(({ data }) => {
            const { redirect } = data;
            // Redirect used for reCAPTCHA and / or thank you page
            window.location.href = redirect;
          })
          .catch((e) => {
            window.location.href = e.response.data.redirect;
          });
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
#contact-form-wrapper {
  max-width: 640px;
  margin: 0 auto 5rem;
  background-color: #444;
  padding: 1.5rem;
}
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