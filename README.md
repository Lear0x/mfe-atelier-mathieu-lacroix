Ce projet est une application **Micro Frontend (MFE)** utilisant **@module-federation/enhanced** et Webpack.  
Il se compose de :
- **Shell (`localhost:8080`)** : L'application principale qui consomme le micro frontend.
- **Header (`localhost:8081`)** : Un micro frontend qui expose un composant `Header`.

---

## 🚀 Installation et exécution

### 1️⃣ **Cloner le dépôt :**
```sh
git clone https://github.com/Lear0x/mfe-atelier-mathieu-lacroix.git
cd mfe-atelier-mathieu-lacroix
```

### 2️⃣ **Installation des dépendances :**
```sh
cd shell && npm install
cd ../header && npm install
```

### 3️⃣ **Lancer le micro frontend (`header`) :**
```sh
cd header
npm start
```

### 4️⃣ **Lancer l'application principale (`shell`) :**
```sh
cd ../shell
npm start
```

### 5️⃣ **Accéder à l'application :**
- **Shell** : [http://localhost:8080](http://localhost:8080)  
- **Header** : [http://localhost:8081](http://localhost:8081)

---