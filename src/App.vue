<template>
  <div id="app">
    <div class="nav">
      <component :is="layout"></component>
    </div>
    <router-view :currentLayout="layout" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  data() {
    return {
      layout: () =>
        import(/*webpackChunkName : 'defaultlayout'  */ "./views/default.vue"),
    };
  },
  components: { HelloWorld },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
