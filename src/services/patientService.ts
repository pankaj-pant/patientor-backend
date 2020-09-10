import patientEntries from '../../data/patients';
import {Patient, PatientWithoutSsn, NewPatient, PatientEntryData} from '../types';
import { v4 as uuidv4 } from 'uuid';

const getPatients = (): Array<Patient> => {
    return patientEntries;
};

const getPatientsWithoutSsn = (): Array<PatientWithoutSsn> => {
    return patientEntries.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id, 
        name, 
        dateOfBirth, 
        gender, 
        occupation
    }));
};

const addPatient = (patient: NewPatient): Patient => {
    
    const newPatient = {
        id: uuidv4(),
        ...patient
    };
    patientEntries.push(newPatient);

    return newPatient;
};

const addPatientEntry = (id: string, patientEntryData: PatientEntryData): Patient | { error: string } => {
    const entry = {
      ...patientEntryData,
      id: uuidv4(),
    };

    const assertNever = (value: never): never => {
      throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
      );
    };

    const patient = patientEntries.find((patient) => patient.id === id);
    if (!patient) {
      throw new Error ('no patient found!');
    }
    if (Object.keys(entry).length === 1) {
        throw new Error ('no entry found!');
      }
    if (
      !entry.date ||
      !entry.description ||
      !entry.specialist ||
      !entry.type
    ) {
      throw new Error('missing date or description or specialist or type!');
    }
    switch (entry.type) {
      case 'Hospital':
        if (!entry.discharge) {
          throw new Error('discharge info is missing!');
        }
        patient.entries.push(entry);
        return patient;
      case 'HealthCheck':
        if (entry.healthCheckRating >= 0 && entry.healthCheckRating <= 3) {
          patient.entries.push(entry);
          return patient;
        }
        throw new Error('heath check rating is missing!');
      case 'OccupationalHealthcare':
        if (!entry.employerName) {
          throw new Error('employer name is missing!');
        }
        patient.entries.push(entry);
        return patient;
      default:
        return assertNever(entry);
    }
  };

export default {
    getPatients,
    getPatientsWithoutSsn,
    addPatient,
    addPatientEntry
};