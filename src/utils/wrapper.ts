import axios from 'axios';
import { URLS } from '../constants/urls';

const checkResponse = (response: any) => response.data.response;
const catchError = (error: any) => error;

export const wrapper = (method: "post" | "get" | "put" | "delete", url: string, data?: any) => axios.request({
  method,
  url,
  data,
  baseURL: URLS.BASE,
  headers: { 'version': '0.0' }
}).then(checkResponse).catch(catchError);
