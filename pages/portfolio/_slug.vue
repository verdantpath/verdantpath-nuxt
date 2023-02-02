<template>
<div class="project-container" :class="project.slug">
  <h3>{{ project.name }}</h3>
  <div class="description">
    <p>{{ project.description }}</p>
  </div>
  <div class="project-images">
  <img :src="project.imageDesktop" class="project-desktop">
  <img :src="project.imageTablet" class="project-tablet">
  <img :src="project.imageMobile" class="project-mobile">
  </div>
  <v-btn :href="project.url" target="_blank">View Site</v-btn>
</div>
</template>
<script>
import projects from '@/data/projects'
export default {
  name: 'slug',
  data: () => ({
    projects: projects
  }),
  asyncData({ app, params, error }) {
    var result = projects.find(project => project.slug === params.slug);
    if(result === undefined) {
      return error({ statusCode: 404, message: 'Project not found' });
    }
    return {
      project: result
    }
  }
}
</script>
<style scoped lang="scss">
// h3 {
//   font-size: 1.25rem;
//   margin: 0 0 1rem;
// }
</style>