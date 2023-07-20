# Establece la imagen base de Node.js
FROM node:alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json .

# Instala las dependencias
RUN npm install

# Copia el código fuente de tu aplicación al directorio de trabajo
COPY . .

# Crear versión de producción
RUN npm run build

# Expone el puerto 3000, que es el puerto por defecto utilizado por Next.js
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]