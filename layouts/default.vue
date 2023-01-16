<template>
  <v-app dark>
    <div class="bg-wrapper">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
        disable-resize-watcher
      >
        <v-list>
          <v-list-item
            v-for="(navItem, i) in navItems"
            :key="i"
            :to="navItem.to"
            router
            exact
          >
            <!-- <v-list-item-action>
              <v-icon>{{ navItem.icon }}</v-icon>
            </v-list-item-action> -->
            <v-list-item-content>
              <v-list-item-title v-text="navItem.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        :clipped-left="clipped"
        fixed
        app
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <!-- <v-btn
          icon
          @click.stop="miniVariant = !miniVariant"
        >
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn> -->
        <!-- <v-btn
          icon
          @click.stop="clipped = !clipped"
        >
          <v-icon>mdi-application</v-icon>
        </v-btn> -->
        
        <nuxt-link to="/"><v-toolbar-title v-text="title" v-html="logo"/></nuxt-link>
        <v-spacer />
        <div class="main-nav right d-flex justify-end">
          <!-- <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          <nuxt-link to="/code">Code</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link> -->
            <ul class="link">
                <li v-for="navItem in navItems" :key="navItem.title" :value="navItem.to">
                    <nuxt-link :to="navItem.to" :exact="navItem.exact">{{ navItem.title }}</nuxt-link>
                </li>
            </ul>
        </div>
        <!-- <span>{{ this.navItems[0].title }}</span> -->
        
      </v-app-bar>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
      <v-footer
        :absolute="!fixed"
        app
        dark
        padless
      >
        <v-card class="flex" flat tile>
          <v-card-title>
            
            <div class="footer-left">
              <nuxt-link to="/"><img id="footer-logo" src="https://verdantpath.io/projects/logo_verdant-path-footer.png" /></nuxt-link>
              <p>Web Developer in Portland, Oregon</p>
              <p>&copy; {{ new Date().getFullYear() }}</p>
            </div>
            <v-spacer></v-spacer>
            <v-btn
              v-for="socialItem in socialItems"
              :key="socialItem.title"
              class="mx-2"
              :href="socialItem.to"
              target="_blank"
              dark
              icon
            >
              <v-icon size="30px">
                {{ socialItem.icon }}
              </v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
import navItems from '@/data/navItems'
import socialItems from '@/data/socialItems'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      navItems,
      socialItems,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Verdantpath',
      logo: '<img id="header-logo" src="https://verdantpath.io/projects/logo_verdant-path-v2.png" />',
      footerLogo: '<img id="footer-logo" src="https://verdantpath.io/projects/logo_verdant-path-footer.png" />'
    }
  }
}
</script>
