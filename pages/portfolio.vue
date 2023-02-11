<template>
<div>
  <h1>Portfolio</h1>
  <nuxt-child />
</div>
</template>
<script>
  export default {
    head () {
    return {
      title: 'Portfolio of Work Web Developer in Portland, Oregon',
      titleTemplate: false,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Portfolio of Work Web Developer in Portland, Oregon'
        }
      ]      
    }
  },
  }
</script>
<style scoped>
h1 {
  display: none;
}
</style>