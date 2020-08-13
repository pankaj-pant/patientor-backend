import express from 'express';
import cors from 'cors';

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

const port = 3001;

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});