<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <span v-if="successMessage" class="success-message">{{ successMessage }}</span>
    <button @click="loginWithGoogle">Login with Google</button>
    <input v-model="phoneNumber" type="text" placeholder="Phone Number" />
    <div id="recaptcha-container"></div>
    <button @click="loginWithPhone">Login with Phone</button>
    <button @click="loginWithGithub">Login with GitHub</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import api from '../services/api';
import axios from 'axios';
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const phoneNumber = ref('');
    const successMessage = ref('');
    const auth = getAuth();

    const login = async () => {
      try {
        await api.post('/auth/login', { email: email.value, password: password.value });
        successMessage.value = 'User registered successfully!';
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message);
        } else {
          alert('An unexpected error occurred');
        }
      }
    };

    const loginWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const token = await user.getIdToken();
        const response = await api.post('/auth/login/token', { token });
        alert('User logged in with Google!');
        console.log(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message);
        } else {
          alert('An unexpected error occurred');
        }
      }
    };

    const loginWithPhone = async () => {
      try {
        const recaptchaVerifier =  new RecaptchaVerifier(auth, 'recaptcha-container', { size: 'invisible' });
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber.value, recaptchaVerifier);
        const code = prompt('Enter the OTP sent to your phone');
        if (code) {
          const result = await confirmationResult.confirm(code);
          const user = result.user;
          const token = await user.getIdToken();
          const response = await api.post('/auth/login/token', { token });
          alert('User logged in with Phone!');
          console.log(response.data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message);
        } else {
          alert('An unexpected error occurred');
        }
      }
    };

    const loginWithGithub = async () => {
      const provider = new GithubAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const token = await user.getIdToken();
        const response = await api.post('/auth/login/token', { token });
        alert('User logged in with GitHub!');
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
      phoneNumber,
      login,
      loginWithGoogle,
      loginWithPhone,
      loginWithGithub,
      successMessage
    };
  }
});
</script>
