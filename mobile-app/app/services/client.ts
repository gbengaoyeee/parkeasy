import axios, { AxiosInstance } from 'axios'
// @ts-ignore
import {SERVER_URL} from '@env'

const rootUrl = SERVER_URL;

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