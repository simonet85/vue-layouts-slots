<template>
  <div>
    <p>Home page</p>
  </div>
</template>

<script>
import DefaultLayout from "../views/default.vue";
export default {
  name: "home",
  components: {},
  created() {
    this.$emit("update:currentLayout", DefaultLayout);
  },
};
</script>

<style>
</style>