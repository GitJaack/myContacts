MyContacts — Backend (Node/Express/MongoDB)

API d'authentification (JWT) et gestion de contacts.

Prérequis

- Node.js 18+
- MongoDB en local (ou une URL MongoDB distante)

Installation

```bash
cd backend
npm install
```

Configuration (env)
Créer un fichier `.env` dans `backend/` avec:

```bash
PORT=3001
DB_URL=mongodb://localhost:27017/myContactsDB
JWT_SECRET=mon_token
```

- PORT: port HTTP de l'API
- DB_URL: URI MongoDB
- JWT_SECRET: secret pour signer les JWT

Lancer le serveur

```bash
npm run dev   # avec nodemon
# ou
npm start     # node app.js
```

- API: http://localhost:3001
- Swagger UI: http://localhost:3001/api

Structure

```
backend/
  app.js
  config/
    cors.js
    db.js
    swagger.js
  controllers/
    authController.js
    contactController.js
  middlewares/
    authMiddleware.js
  models/
    userModel.js
    contactModel.js
  routes/
    authRoutes.js
    contactRoutes.js
  services/
    authService.js
    contactService.js
```

Endpoints (aperçu)

- Auth
  - POST `/auth/register` { email, password }
  - POST `/auth/login` { email, password } → { token }
- Contacts (Bearer token requis)
  - GET `/contacts`
  - POST `/contacts` { firstName, lastName, phone }
  - PATCH `/contacts/:id` { firstName?, lastName?, phone? }
  - DELETE `/contacts/:id`
