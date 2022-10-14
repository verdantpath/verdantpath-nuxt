<template>
  <div>
    <h1>Code</h1>
    <v-container class="mb-6">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="code in codes" :key="code.name">
          <v-card class="portfolio-card">
            <v-responsive class="pt-4">
              <img :src="code.imageThumbnail" class="portfolio-thumb">
            </v-responsive>
            <v-card-text>
              <div><nuxt-link :to="`codes/${code.id}`">{{ code.name }}</nuxt-link></div>
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
      codes: codes
    }),
  }
</script>
<style scoped lang="scss">
.v-card {
  background: rgba(255,255,255,0.3);
  color: #000;
  p {
    color: #000;
  }
}
</style>