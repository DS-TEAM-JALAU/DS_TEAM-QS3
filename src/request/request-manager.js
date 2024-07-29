import axios from "axios";
import env from "../config/env.js";

export class AxiosSingleton {
  static instance

  static getInstance() {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL: env.URL,
        timeout: 10000,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return this.instance
  }
}