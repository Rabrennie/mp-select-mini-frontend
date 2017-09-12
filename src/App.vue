<template>
  <div id="app">
    <div id="sidebar">
      <router-link v-bind:to="{ name: 'Home' }">
        <i data-feather="home"></i>
        Home
      </router-link>
      <router-link v-bind:to="'Files'">
        <i data-feather="file"></i>
        Files
      </router-link>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#sidebar {
  box-sizing: border-box;
  position: absolute;
  height: 100vh;
  width: 13rem;
  background-color: #FFFFFF;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  border-right: 1px solid #ced4da;
  padding-top: 2rem;
}

#sidebar a {
  box-sizing: border-box;
  display: block;
  padding-left: 2rem;
  height: 3rem;
  line-height: 3rem;
  color: #343a40;
  text-decoration: none;
}

#sidebar a .feather{
  margin-right: 1rem;
  vertical-align:middle;
  height: 1.35rem;
  color: #4dadf7;
}

#sidebar a.router-link-exact-active{
  border-right: 2px solid #4dadf7;
  background-color: #e8f7ff;

}

#content {
  box-sizing: border-box;
  position: absolute;
  width: calc(100vw - 13rem);
  right: 0;
  padding-left: 5rem;
}
</style>
