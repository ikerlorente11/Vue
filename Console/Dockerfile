# Usa la imagen oficial de Node.js como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json e instala las dependencias
COPY package*.json ./
RUN npm install

# Copia todos los archivos del proyecto al directorio de trabajo del contenedor
COPY . .

# Expone el puerto 8080 (puerto predeterminado de Vue.js)
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["npm", "run", "serve"]