import env from "../src/config/env.js";
import { logger } from "../src/config/logger.js";
import { AxiosSingleton } from "../src/request/request-manager.js";

jest.setTimeout(30000);

let boardId;
const listIds = [];

describe("Create test board", () =>{
  let axiosInstance;
  let response
  const name = "DS"
  beforeAll( async () =>{
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance")
    response = await axiosInstance.post(`${env.URL}1/boards/?name=${name}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&defaultLists=false`)
  })

  afterAll(()=>{
    boardId = response.data.id
  })

  it("should return a status 200 when create a new board", () =>{
    const status = response.status;
    expect(status).toBe(200)
  })

  it("should return a status text OK when create a new board", () =>{
    const statusText = response.statusText;
    expect(statusText).toBe("OK")
  })

  it("should return a name DS when create a new board", () =>{
    const nameResponse = response.data.name;
    expect(nameResponse).toBe(name)
  })
})

describe("Create list at the board", () =>{
  let axiosInstance;
  let responseTodo;
  let responseProgress;
  let responseFinished
  const todo = "A Fazer"
  const progress = "Em Progresso"
  const finish = "Finalizado"
  beforeAll( async () =>{
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance")
    responseFinished = await axiosInstance.post(`${env.URL}1/boards/${boardId}/lists?name=${finish}&key=${env.API_KEY}&token=${env.TOKEN_KEY}`)
    responseProgress = await axiosInstance.post(`${env.URL}1/boards/${boardId}/lists?name=${progress}&key=${env.API_KEY}&token=${env.TOKEN_KEY}`)
    responseTodo = await axiosInstance.post(`${env.URL}1/boards/${boardId}/lists?name=${todo}&key=${env.API_KEY}&token=${env.TOKEN_KEY}`)
  })
  afterAll(()=>{
    listIds[0] = responseTodo.data.id
    listIds[1] = responseProgress.data.id
    listIds[2] = responseFinished.data.id
  })

  it("should return status 200 when creating a list 'A Fazer'", () =>{
    expect(responseTodo.status).toBe(200)
  })
  it("should return status 200 when creating a list 'Em Progresso'", () =>{
    expect(responseProgress.status).toBe(200)
  })
  it("should return status 200 when creating a list 'Finalizado'", () =>{
    expect(responseFinished.status).toBe(200)
  })

  it("should return status text OK when creating a list 'A Fazer'", () =>{
    expect(responseTodo.statusText).toBe("OK")
  })
  it("should return status text OK when creating a list 'Em Progresso'", () =>{
    expect(responseProgress.statusText).toBe("OK")
  })
  it("should return status text OK when creating a list 'Finalizado'", () =>{
    expect(responseFinished.statusText).toBe("OK")
  })

  it("should return a name 'A Fazer' when creating a list 'A Fazer'", () =>{
    expect(responseTodo.data.name).toBe(todo)
  })
  it("should return a name 'Em Progresso' when creating a list 'Em Progresso'", () =>{
    expect(responseProgress.data.name).toBe(progress)
  })
  it("should return a name 'Finalizado' when creating a list 'Finalizado'", () =>{
    expect(responseFinished.data.name).toBe(finish)
  })

  it("should return closed false when creating a list 'A Fazer'", () =>{
    expect(responseTodo.data.closed).toBe(false)
  })
  it("should return closed false when creating a list 'Em Progresso'", () =>{
    expect(responseProgress.data.closed).toBe(false)
  })
  it("should return closed false when creating a list 'Finalizado'", () =>{
    expect(responseFinished.data.closed).toBe(false)
  })

})