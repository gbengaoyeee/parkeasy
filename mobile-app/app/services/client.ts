import axios, { AxiosInstance } from 'axios'
// @ts-ignore

const rootUrl = process.env.EXPO_PUBLIC_SERVER_URL;
export class ApiClient {
  client: AxiosInstance
  constructor(basePath: string) {
    this.client = axios.create({
      baseURL: `${rootUrl}/${basePath}` ?? '/',
      responseType: 'json',
      headers: {
        "ngrok-skip-browser-warning": "69420",
      }
    });
  }
}

export default ApiClient