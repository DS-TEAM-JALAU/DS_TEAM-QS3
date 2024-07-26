import axios from 'axios';

class AxiosSingleton {
  constructor() {
    if (!AxiosSingleton.instance) {
      this.axiosInstance = axios.create({
        baseURL: 'https://viacep.com.br/'
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