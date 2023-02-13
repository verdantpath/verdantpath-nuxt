<template>
  <div class="project-container">
    <h3>{{ code.name }}</h3>
    <div class="description">
      <p>{{ code.description }}</p>
    </div>
    <div class="project-images">
      <img :src="code.imageDesktop" class="project-desktop">
      <img :src="code.imageTablet" class="project-tablet">
      <img :src="code.imageMobile" class="project-mobile">
    </div>
    <v-btn :href="code.url" target="_blank">View Site</v-btn>
  </div>
</template>
<script>
import codes from '@/data/code'
  export default {
    name: 'slug',
    data: () => ({
      codes: codes
    }),
    asyncData({ app, params, error }) {
      var result = codes.find(code => code.slug === params.slug);
      if(result === undefined) {
        return error({ statusCode: 404, message: 'Project not found' });
      }
      return {
        code: result 
      }
    },
  }
</script>
<style scoped lang="scss">
// h3 {
//   font-size: 1.25rem;
//   margin: 0 0 1rem;
// }
</style>