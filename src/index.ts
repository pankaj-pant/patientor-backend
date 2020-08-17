import express from 'express';
import cors from 'cors';
import diagnoses from './routes/diagnoses';
import patients from './routes/patients';

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

const port = 3001;

app.get('/', (_req, res) => {
  res.send("Welcome to Patientor backend");
});

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/diagnoses', diagnoses);

app.use('/api/patients', patients);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});