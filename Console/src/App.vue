<template>
  <router-view></router-view>
</template>

<script>
import './assets/styles/reset.css';

export default {
  name: 'App',
  components: {}
}
</script>

<style>
  html, body{
    height: 100%;
  }

  #app{
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: auto;
  }
</style>