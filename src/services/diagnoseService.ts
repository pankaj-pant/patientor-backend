import diagnosesData from '../../data/diagnoses';
import {Diagnosis} from '../types';

const getEntries = (): Array<Diagnosis> => {
    return diagnosesData;
};

export default getEntries;