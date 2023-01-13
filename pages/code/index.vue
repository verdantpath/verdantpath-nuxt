<template>
  <div>
    <h1>Code Examples</h1>
    <v-container class="mb-6">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="code in codes" :key="code.name">
          <v-card class="portfolio-card">
            <v-responsive class="pt-4">
              <nuxt-link :to="`code/${code.slug}`">
                <img :src="code.imageThumbnail" class="portfolio-thumb">
              </nuxt-link>
            </v-responsive>
            <v-card-text>
              <h3><nuxt-link :to="`code/${code.slug}`">{{ code.name }}</nuxt-link></h3>
              <h4>{{ code.technology }}</h4>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  import codes from '@/data/code'
  export default {
    data: () => ({
      //projects: projects,
      codes: codes
    })
  }
</script>
<style scoped lang="scss">
.v-toolbar__title {
  color: magenta;
}
</style>