import axios, { AxiosInstance } from 'axios'

const rootUrl = import.meta.env.VITE_SERVER_URL;
// const client = axios.create({
//     baseURL: rootUrl ?? '/',
//     responseType: 'json',
// });

export class ApiClient {
  client: AxiosInstance
  constructor(basePath: string) {
    this.client = axios.create({
      baseURL: `${rootUrl}/${basePath}` ?? '/',
      responseType: 'json',
    });
  }
}

export default ApiClient