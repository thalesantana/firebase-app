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
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f3f3; /* Cor branca meio escura */
  border-radius: 15px; /* Bordas arredondadas */
  padding: 20px;
}

input {
  margin-bottom: 15px; /* Espaçamento entre os inputs */
  padding: 10px; /* Aumentar o tamanho dos inputs */
  border-radius: 10px; /* Bordas arredondadas */
  border: 1px solid #ccc;
  font-size: 16px;
}

</style>
