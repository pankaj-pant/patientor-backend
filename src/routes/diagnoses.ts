import express from 'express';
import getEntries from '../services/diagnoseService';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(getEntries());
});

export default router;