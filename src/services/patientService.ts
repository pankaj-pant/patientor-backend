import patientEntries from '../../data/patients';
import {Patient, PatientWithoutSsn, NewPatient} from '../types';
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

export default {
    getPatients,
    getPatientsWithoutSsn,
    addPatient
};