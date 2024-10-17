# Pasos:

1) Entrar a `streetdevs-challenge/backend/database/` donde está el archivo `docker-compose.yml`:
    ```bash
    docker compose up -d
    ```

2) Entrar a `streetdevs-challenge/backend/nodeJs/` donde está el archivo `index.js`:
    - Copiar el archivo `.env.example` y renombrarlo a `.env`:
      ```bash
      cp .env.example .env
      ```
    - Instalar las dependencias y levantar el servidor:
      ```bash
      npm install
      npm test
      node index.js
      ```
    El backend se desplegará en el puerto 3000.

3) Entrar a `streetdevs-challenge/frontendReact/src/` donde está el archivo `index.js`:
    - Copiar el archivo `.env.example` y renombrarlo a `.env`:
      ```bash
      cp .env.example .env
      ```
    - Instalar las dependencias y levantar el servidor de desarrollo:
      ```bash
      npm install
      npm start // hacer click en yes para cambiar el puerto a 3001
      ```
    El frontend se desplegará en el puerto 3001.
