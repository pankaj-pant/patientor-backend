import patientEntries from '../../data/patients';
import {Patient, PatientWithoutSsn} from '../types';

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

export default {
    getPatients,
    getPatientsWithoutSsn
};