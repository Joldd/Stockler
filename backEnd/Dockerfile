# Utiliser une image Node.js comme base
FROM node:22-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json .

# Installer les dépendances
RUN npm install

# Copier tout le code dans le conteneur
COPY . .

# Exposer le port par défaut d'Adonis.js
EXPOSE 3001

# Commande pour lancer le serveur en mode développement
CMD ["npm", "run", "dev"]