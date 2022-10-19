<template>
  <div>
    <transition><h1>Contact</h1></transition>
    <v-form>
      <v-text-field type="text" name="name" placeholder="who dis"></v-text-field>
      <v-input type="submit"></v-input>
    </v-form>
  </div>
</template>
<script>
  export default {
  }
</script>
<style>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-leave,
.v-enter-to {
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 300ms;
}
</style>