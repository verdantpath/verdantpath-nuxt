<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <div class="home-page-content-wrapper">
        <div><h1>Home</h1>
        <h2>Web Developer in Portland, Oregon</h2>
        <h3>Vue.js • WordPress • Drupal • Front End • Full Stack</h3>
        </div>
      </div>
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium pariatur sunt laboriosam quaerat doloribus quam quisquam perspiciatis recusandae! Iure fugiat perspiciatis explicabo sapiente harum distinctio corrupti impedit odio necessitatibus?</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'home',
  head () {
    return {
      title: 'Web Developer in Portland, Oregon',
      titleTemplate: false,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Web Developer in Portland, Oregon'
        }
      ]      
    }
  },
  name: 'IndexPage',
  asyncData() {
  }
}
</script>
<style scoped lang="scss">
h1 {
  display: none;
}
h2 {
  font-size: 3.5rem;
}
h3 {
  font-size: 2rem;
  &:before,
  &:after { 
  	position:absolute; 
  	width:5%; 
  	height:3px; 
  	content:''; 
  	border-top:2px solid rgba(#fff, 0.7); 
  	// border-bottom:1px solid rgba($gray-dark, 0.3); 
  	margin-top:1.50rem; 
  }
    &:before { 
    	margin-left:-6%; 
    }
    &:after { 
    	margin-left:1%; 
    }
}
.home-page-content-wrapper {
  text-align: center;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
}
</style>
