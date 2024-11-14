FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate


# the migrations is automatically made also on a new machine.
# RUN npx prisma migrate dev --name init --preview-feature

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]
