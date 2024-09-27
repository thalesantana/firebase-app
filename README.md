# Firebase Auth App

Este é um projeto de autenticação utilizando Firebase, Node.js, TypeScript e Vue.js 3. A aplicação permite registro e login de usuários com email e senha, além de login com Google, telefone e GitHub.

## Configuração do Backend

1. **Clone o repositório**:
 ```bash
 git clone https://github.com/thalesantana/firebase-app.git
 cd firebase-app/server
 ```
   
2. Instale as dependências:
```bash
pnpm install
```

3. Configure o Firebase Admin SDK:
- Crie uma conta de serviço no [Firebase](https://firebase.google.com/?hl=pt-br) e baixe o arquivo JSON gerando uma nova [chave privada](https://console.firebase.google.com/u/0/project/fir-app-4b204/settings/serviceaccounts/adminsdk?hl=pt-br).
- Adicione um arquivo .env na raiz da pasta server com as seguintes credenciais encontradas dentro do arquivo JSON gerado pela firebase:
```bash
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
```
4. Inicie o servidor:
```bash
pnpm run start
```
## Configuração do Frontend
1. Navegue até a pasta do frontend:
 ```bash
 cd ../client
 ```
2. Instale as dependências:
```bash
pnpm install
```
3. Configure as variáveis de ambiente:
- Fazer o download do [snippet](https://support.google.com/firebase/answer/7015592?hl=pt-br#web&zippy=%2Cneste-artigo) de configuração para seu app da Web
- Crie um arquivo .env na pasta frontend com o seguinte conteúdo com as informações encontradas no seu snippet:
```bash
VUE_APP_FIREBASE_API_KEY="your_api_key"
VUE_APP_FIREBASE_AUTH_DOMAIN="your_auth_domain"
VUE_APP_FIREBASE_PROJECT_ID="your_project_id"
VUE_APP_FIREBASE_STORAGE_BUCKET="your_storage_bucket"
VUE_APP_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"
VUE_APP_FIREBASE_APP_ID="your_app_id"
VUE_APP_FIREBASE_MEASUREMENT_ID="your_measurement_id"
```
4.Inicie o servidor de desenvolvimento:
```bash
pnpm run serve
```
# Uso
- Acesse a aplicação no navegador em http://localhost:8080.
- Registre um novo usuário ou faça login utilizando email e senha, Google, telefone ou GitHub.
  
# Estrutura de Arquivos

## Backend
- src/controllers/authController.ts: Controladores para as rotas de autenticação.
- src/routes/authRoutes.ts: Definição das rotas de autenticação.
- src/services/authService.ts: Lógica de negócios para autenticação.
- src/index.ts: Configuração do servidor Express.
  
## Frontend
- src/components/UserRegister.vue: Componente para registro de usuários.
- src/components/UserLogin.vue: Componente para login de usuários.
- src/main.ts: Configuração do Firebase e inicialização da aplicação Vue.
  
# Contribuição
Sinta-se à vontade para contribuir com este projeto. Faça um fork do repositório, crie um branch para suas alterações e envie um pull request.

# Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

