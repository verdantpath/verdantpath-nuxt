<template>
  <div>
    <h1>Code</h1>
    <nuxt-child />
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
h1 {
  display: none;
}
.v-card {
  background: rgba(255,255,255,0.3);
  color: #000;
  p {
    color: #000;
  }
}
</style>