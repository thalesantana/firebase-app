import express from 'express';
import userRoutes from './routes/authRoutes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/auth', userRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
