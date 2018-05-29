<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Task List</a>
    </nav>
    <!-- This code keep alive the navigate -->
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

// Initialized the app 
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

</style>
