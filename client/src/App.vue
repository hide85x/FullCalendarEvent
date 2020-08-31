<template>
  <div id="app">
    <nav>
      <router-link to="/signup" >SignUp | </router-link>
      <router-link to="/" >Home  |</router-link>
      <router-link to="/login" > Login</router-link>

    </nav>
      <router-view></router-view>
    
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Router from './router'

export default {
  name: 'App',
  components: {
    Login,
    SignUp,
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
