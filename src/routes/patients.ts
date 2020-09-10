import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';
const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getPatientsWithoutSsn());
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const found = patientService.getPatients().find(patient => patient.id === id);
  if (found) {
    res.send(found);
  } else {
    res.status(400).send({error: 'Patient not found'});
  }

});

router.post('/', (req, res) => {
    try {
        const newPatientEntry = toNewPatientEntry(req.body);
    
        const addedEntry = patientService.addPatient(newPatientEntry);
        res.json(addedEntry);
      } catch (e) {
        res.status(400).send(e.message);
      }
});

router.post('/:id/entries', (req, res) => {
  const id = req.params.id;
  const entry = req.body;
    try {
      const updatedPatient = patientService.addPatientEntry(id, entry);
      res.status(200).json(updatedPatient);
    } catch (e) {
      res.status(400).send(e.message);
    }

});

export default router;