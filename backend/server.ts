import express from 'express';
import { PORT } from './utils/config';
import router from './routes';
import { errorHandler } from './middleware/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/', router());

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
