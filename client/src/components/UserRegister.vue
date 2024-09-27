<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
    <span v-if="responseMessage" class="success-message">{{ responseMessage }}</span>
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
    const responseMessage = ref('');

    const register = async () => {
      try {
        const response = await api.post('/auth/register', {
          email: email.value,
          password: password.value
        });
        responseMessage.value =response.data.message;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          responseMessage.value =error.response?.data.error;
        } else {
          alert('An unexpected error occurred');
        }
      }
    };

    return {
      email,
      password,
      responseMessage,
      register
    };
  }
});
</script>

<style>
.success-message {
  color: green;
  font-weight: bold;
}
</style>