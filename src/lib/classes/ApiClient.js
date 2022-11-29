import axios from "axios";

export class ApiClient {
  #instance = null;

  constructor(baseURL = process.env.REACT_APP_API_URL) {
    this.#instance = axios.create({
      baseURL,
    });
  }

  getInstance = () => this.#instance;
}
