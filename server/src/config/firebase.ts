import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();


// Inicializa o Firebase Admin SDK usando as variáveis de ambiente
admin.initializeApp({
  credential: admin.credential.cert({
    projectId:  process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
});

export const auth = admin.auth();
export const db = admin.firestore();
