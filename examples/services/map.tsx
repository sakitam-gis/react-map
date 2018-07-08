import axios from 'axios';
import { layer } from './api';

const getData = () => {
  return axios.get(layer);
};

export default getData;
