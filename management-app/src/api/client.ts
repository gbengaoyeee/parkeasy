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
      headers: {
        // "ngrok-skip-browser-warning": "69420",
        "bypass-tunnel-reminder": "69420",
        'x-api-key': import.meta.env.VITE_SERVER_API_KEY
      }
    });
  }
}

export default ApiClient