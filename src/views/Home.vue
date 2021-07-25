<template>
  <div>
    <p>This is the Home component</p>
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