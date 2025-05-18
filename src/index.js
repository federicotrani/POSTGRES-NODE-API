import express from 'express';
import { PORT } from './config.js';
import usersRoutes from './routes/users.routes.js';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});