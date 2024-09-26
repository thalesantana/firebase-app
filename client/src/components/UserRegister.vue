<!-- src/components/Register.vue -->
<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import api from '../services/api';
import axios from 'axios';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');

    const register = async () => {
      try {
        const response = await api.post('/auth/register', {
          email: email.value,
          password: password.value
        });
        alert('User registered!');
        console.log(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message);
        } else {
          alert('An unexpected error occurred');
        }
      }
    };

    return {
      email,
      password,
      register
    };
  }
});
</script>
