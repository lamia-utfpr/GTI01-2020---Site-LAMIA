import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import AppError from '@shared/Errors/AppError';
import routes from './routes';

import '@shared/container';
import '@shared/infra/typeorm';

const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    // if (error instanceof multer.MulterError) {
    //   if (error.code === 'LIMIT_FILE_SIZE') {
    //     return response.status(400).json({
    //       status: 'error',
    //       mensagem: `O tamanho arquivo ${error.field} ultrapassa o limite permitido (${upload.maxSize} MB).`,
    //     });
    //   }
    //   return response.status(500).json({
    //     status: 'error',
    //     mensagem:
    //       'Ocorreu um erro ao salvar seu arquivo, tente novamente mais tarde.',
    //   });
    // }

    return response.status(500).json({
      status: 'error',
      mensagem: 'Internal server error.',
      error,
    });
  },
);

app.listen(process.env.PORT, () => {
  console.log(`...... Started on port ${process.env.PORT}!`);
});
