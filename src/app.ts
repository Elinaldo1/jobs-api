import cors from 'cors';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { sequelize } from './database';
import { router } from './routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);


// este midlleware irá capturar todos os erros em services e controllers
// assim reduz a necessidade de fazer tratamento em todos os services e controllers
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
      // se for uma instância do tipo erro
      console.log(err.message);
      
      return res.status(400).json({
          error: err.message
      })
  }

  return res.status(500).json({
      status: 'error',
      message: 'Internal server error'
  })
})

const PORT = process.env.PORT || 3333;

app.listen(PORT, async() => {
    console.log('Api jobs is running in port 3333')
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})