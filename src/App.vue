<template>
  <div id="app">
    <TreeView msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import TreeView from './components/TreeView.vue';

export default {
  name: 'App',
  components: {
    TreeView,
  },
};
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
