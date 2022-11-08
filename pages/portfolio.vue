<template>
  <div>
    <h1>Portfolio</h1>
    <v-container class="mb-6">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="project in projects" :key="project.name">
          <v-card class="portfolio-card">
            <v-responsive class="pt-4">
              <img :src="project.imageThumbnail" class="portfolio-thumb">
            </v-responsive>
            <v-card-text class="project-description">
              <h3><nuxt-link :to="`/portfolio/${project.id}`">{{ project.name }}</nuxt-link></h3>
              <h4>{{ project.technology }}</h4>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import projects from '@/data/projects'
  export default {
    data: () => ({
      projects: projects
    }),
  }
</script>
<style scoped lang="scss">
.v-toolbar__title {
  color: magenta;
}
.v-card {
  background: rgba(255,255,255,0.3);
  color: #000;
  p {
    color: #000;
  }
}
</style>