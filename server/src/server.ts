import fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import 'dotenv/config';
import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';

const app = fastify();

app.register(cors, {
  origin: true,
});
app.register(jwt, {
  secret: 'spacetime',
});
app.register(memoriesRoutes);
app.register(authRoutes);

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🤣 Server running atumalaca http://localhost:3333');
  });
