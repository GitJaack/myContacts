MyContacts — Fullstack (Node/Express/MongoDB + React)

Petit gestionnaire de contacts avec authentification JWT.

URLs

- Frontend (Netlify): https://frolicking-heliotrope-126a11.netlify.app
- Backend (Render): https://mycontacts-9gnn.onrender.com
- Swagger API: https://mycontacts-9gnn.onrender.com/api

Identifiants de test

- Email: test1@gmail.com
- Mot de passe: test1

Fonctionnalités

- Inscription / Connexion (JWT, stockage localStorage)
- CRUD Contacts (liste, ajout, édition, suppression)
- Routes protégées côté frontend

Démarrage en local

```bash
# Backend
cd backend
npm install
cp .env.example .env  # ou créez .env, voir README backend
npm run dev

# Frontend
cd ../frontend
npm install
echo REACT_APP_API_URL=http://localhost:3001 > .env
npm start
```

Configuration (prod)

- Backend Render: variables d'env: `DB_URL`, `JWT_SECRET`.
- Frontend Netlify: variable `REACT_APP_API_URL` pointant vers l'URL Render du backend.
