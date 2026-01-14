import express, {Request, Response} from 'express';
import api from './api/v1';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response<string>) => {
  res.send('Hello World!');
});

app.use('/api/v1', api);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});