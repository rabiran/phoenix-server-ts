import axios from 'axios';
import https from 'https';
import { getToken } from '../auth/auth';

const apiReqConfig = {
  baseURL: `${process.env.API_URL}:${process.env.API_PORT}/api`,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // only for development
  }),
};
const axiosInstance = axios.create(apiReqConfig);

export async function getPersons() {
  const res = await axiosInstance.get('/persons', {
    headers: { Authorization : await getToken() },
  });
  return res.data;
}
