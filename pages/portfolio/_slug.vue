<template>
<div>
  <h3>{{ project.name }}</h3>
  <div class="project-images">
  <img :src="project.imageDesktop" class="project-desktop">
  <img :src="project.imageTablet" class="project-tablet">
  <img :src="project.imageMobile" class="project-mobile">
  </div>
  <div class="description">
    <p>{{ project.description }}</p>
  </div>
  <v-btn>View Site</v-btn>
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
      return error({ statusCode: 404, message: 'Post not found' });
    }
    return {
      project: result
    }
  }
}
</script>
<style lang="scss">
h3 {
  font-size: 1.5rem;
  margin: 0 0 3rem;
}
.project-desktop {
  margin: 0 !important;
  width: 70%;
}
.project-tablet {
  position: absolute;
  bottom: 7px;
  right: 10%;
  width: 30%;
  margin-bottom: 0;
}
.project-mobile {
  position: absolute;
  bottom: 7px;
  right: 0;
  width: 15%
}
.project-images {
  position: relative;
  margin: 0 0 3rem;
  img {
    border: 1px solid magenta;
    box-shadow: 0 0 8px #fff;
  }
}
.description {
  margin: 0 0 1.25rem;
}
</style>