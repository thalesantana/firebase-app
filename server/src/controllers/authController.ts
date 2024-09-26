import { Request, Response } from 'express';
import { auth, db } from '../config/firebase';
import { verifyToken } from '../services/authService';

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userRecord = await auth.createUser({ email, password });
    res.status(201).json({ message: 'Usuário criado com sucesso!', uid: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const saveUserData = async (req: Request, res: Response) => {
  const { uid, userData } = req.body;

  try {
    await db.collection('users').doc(uid).set(userData);
    res.status(200).json({ message: 'Dados do usuário salvos com sucesso' });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    // Verificar credenciais com o Firebase Auth
    const user = await auth.getUserByEmail(email);
    const token = await auth.createCustomToken(user.uid);
    
    // Retornar o token JWT
    res.status(200).json({
      message: 'Login bem-sucedido!',
      token,
    });
  } catch (error) {
    res.status(400).json({ error: 'Credenciais inválidas ou usuário não encontrado.' });
  }
};

export const loginWithToken = async (req: Request, res: Response) => {
  const { token } = req.body;
  try {
    const decodedToken = await verifyToken(token);
    res.status(200).send(decodedToken);
  } catch (error) {
    res.status(400).send(error);
  }
};