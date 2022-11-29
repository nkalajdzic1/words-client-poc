import axios from "axios";

/**
 * @description axios wrapper class to configure the url, headers and etc.
 */
export class ApiClient {
  #instance = null;

  constructor(baseURL = process.env.REACT_APP_API_URL) {
    this.#instance = axios.create({
      baseURL,
    });
  }

  getInstance = () => this.#instance;
}
