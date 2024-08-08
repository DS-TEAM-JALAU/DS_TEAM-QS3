import env from "../src/config/env.js";
import { logger } from "../src/config/logger.js";
import { AxiosSingleton } from "../src/request/request-manager.js";
import {getIdBoard} from "../src/config/cache.js"

jest.setTimeout(30000);

describe("Create list at the board", () =>{
  let axiosInstance;
  let responseTodo;
  let responseProgress;
  let responseFinished
  beforeAll( async () =>{
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance")
    const todo = "A Fazer"
    const progress = "Em Progresso"
    const finish = "Finalizado"
    responseTodo = await axiosInstance.post(`${env.URL}1/boards/${id}/lists?name=${todo}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&defaultLists=false`)
    responseProgress = await axiosInstance.post(`${env.URL}1/boards/${id}/lists?name=${progress}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&defaultLists=false`)
    responseFinished = await axiosInstance.post(`${env.URL}1/boards/${id}/lists?name=${finish}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&defaultLists=false`)
  })


  it("should return a status 200 when create a new board", () =>{
    console.log(getIdBoard)
  })
})