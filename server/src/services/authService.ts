import { auth, db } from '../config/firebase';
import admin from 'firebase-admin';

export const registerUser = async (email: string, password: string) => {
  try {
    const user = await admin.auth().createUser({
      email,
      password
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email: string) => {
  try {
    const user = await admin.auth().getUserByEmail(email);
    return user;
  } catch (error) {
    throw error;
  }
};

export const verifyToken = async (token: string) => {
  try {
    const decodedToken = await auth.verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw error;
  }
};
