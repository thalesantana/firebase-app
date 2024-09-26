<template>
  <div id="app">
    <h1>Firebase Auth App</h1>
    <Register />
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Register from './components/UserRegister.vue';
import Login from './components/UserLogin.vue';

export default defineComponent({
  name: 'App',
  components: {
    Register,
    Login
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
