<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="10">
      <div class="home-page-content-wrapper">
        <div><h1>Home</h1>
        <h2 v-if="$vuetify.breakpoint.mdAndDown">Web Developer in<br /> Portland, Oregon</h2> 
        <h2 v-else>Web Developer in Portland, Oregon</h2>
        <h3 v-if="$vuetify.breakpoint.mdAndDown">Vue.js • WordPress<br /> Drupal • Front-End • UX/UI<br /> Full-Stack</h3>
        <h3 v-else>Vue.js • WordPress • Drupal • UX/UI • Front-End • Full-Stack</h3>
        <!-- <p>@@{{ test.image }}</p> -->
        </div>
      </div>
      <!-- <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card> -->
      <!-- <v-card>
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
      </v-card> -->
    </v-col>
  </v-row>
</template>

<script>
// test data
const test = [
  {
    image: '/images/work_aff-media.jpg'
  }
]
export default {
  //layout: 'home',
  // transition: {
  //   name: 'fade-home',
  //   mode: 'out-in'
  // },
  mounted() {
    // var pageBgEl = document.querySelector('.v-application--wrap');
    var pageBgEl = document.querySelector('.bg-wrapper');
    // pageBgEl.style.backgroundImage = "url('https://verdantpath.io/wp-content/uploads/2017/03/home_fw-05.jpg')"
    setTimeout(function() { 
      pageBgEl.classList.add('home')
      console.log('!@# home mounted')  
    }, 100);
  },
  beforeDestroy() {
    // var pageBgEl = document.querySelector('.v-application--wrap');
    var pageBgEl = document.querySelector('.bg-wrapper');
    // pageBgEl.style.backgroundImage = "none"
    setTimeout(function() { 
      pageBgEl.classList.remove('home')
    }, 300);
  },
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
  },
  data() {
    return { test }
  }
}
</script>
<style scoped lang="scss">
@media (max-width: 1264px) {
  h3 {
    &:before,
    &:after {
      border: none !important;
    }
  }
}
@media (max-width: 768px) {
  h2 {
    // font-size: 3rem !important;
    // line-height: 1.25;
  }
  h3 {
    font-size: 1.5rem !important;
  }
}
@media (max-width: 480px) {
  h2 {
    // font-size: 2.5rem !important;
    // line-height: 1.25;
  }
  h3 {
    font-size: 1.25rem !important;
  }
}
h1 {
  display: none;
}
h2 {
  font-size: 3.5rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 1.25;
  }
  @media (max-width: 480px) {
    font-size: 2.5rem;
    line-height: 1.25;
  }
  @media (max-width: 380px) {
    font-size: 2rem;
  }
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
  height: 70vh;
}
</style>
