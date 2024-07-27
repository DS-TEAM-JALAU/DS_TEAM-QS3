import axios from "axios";
import env from "../config/env.js";

class AxiosSingleton {
  constructor() {
    if (!AxiosSingleton.instance) {
      this.axiosInstance = axios.create({
        baseURL: env.URL,
      });

      AxiosSingleton.instance = this;
    }
  }

  getInstance() {
    return this.axiosInstance;
  }
}

const instance = new AxiosSingleton();
Object.freeze(instance);

export default instance;
