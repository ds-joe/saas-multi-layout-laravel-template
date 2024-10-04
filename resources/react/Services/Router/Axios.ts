// Dependencies

// Classes
import Validation from "./Validation";

// Types
import raxios, { Axios as RAxios, Method, AxiosRequestConfig } from 'axios';

class Axios extends Validation {

  private axios: RAxios;

  constructor() {
    super();
    this.axios = raxios;
  }


}

export default Axios;
