MyContacts — Frontend (React)

Interface web pour s'inscrire, se connecter et gérer ses contacts.

Prérequis

- Node.js 18+

Installation

```bash
cd frontend
npm install
```

Configuration (env)
Créer un fichier `.env` dans `frontend/` avec:

```bash
REACT_APP_URL=http://localhost:3000
```

Lancer l'application

```bash
npm start
```

- Frontend: http://localhost:3000

Structure

```
src/
  App.js
  components/
    ProtectedRoute.jsx
  pages/
    Login.jsx
    Register.jsx
    Contacts.jsx
  services/
    api.js
```

Fonctionnalités

- Authentification: inscription, connexion (token stocké dans localStorage)
- Contacts: lister, créer, modifier, supprimer
- Route protégée: `/contacts` nécessite un token
