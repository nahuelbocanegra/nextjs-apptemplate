import axios from 'axios';
import getConfig from 'next/config';
import Router from 'next/router';
import Cookie from 'js-cookie';
import { error } from 'console';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  async (confing) => {
    const token = await getTokenFromCookie();
    if (token) {
      confing.headers.Authorization = `Bearer ${token}`;
    }
    return confing;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      Router.push('/');
    }
  }
);

export default instance;

async function getTokenFromCookie() {
    return Cookie.get('token')
}
