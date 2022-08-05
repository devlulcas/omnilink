# Base image encima do alpine -  versão mais recente
FROM node:alpine as base 
RUN apk update
WORKDIR /app
COPY package*.json ./

# OBS: Substituir estágio de build para algo que possa tomar proveito do turbo
FROM base as builder 
RUN npm install 
COPY . .
RUN npx prisma generate
RUN npm run build

# Imagem de "produção"
FROM base
RUN npm install --production
COPY --from=builder /app/dist ./dist
COPY .env .
EXPOSE 8080
CMD node dist/src/index.js