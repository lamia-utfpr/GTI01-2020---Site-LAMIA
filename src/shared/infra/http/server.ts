import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import routes from './routes';
import '@shared/container';
import '@shared/infra/typeorm';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`...... Started on port ${process.env.PORT}!`);
});
