import env from "../src/config/env.js";
import { logger } from "../src/config/logger.js";
import { AxiosSingleton } from "../src/request/request-manager.js";
import {setIdBoard} from "../src/config/cache.js"

jest.setTimeout(30000);

describe("Create test board", () =>{
  let axiosInstance;
  let response
  beforeAll( async () =>{
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance")
    const name = "sofrimento"
    response = await axiosInstance.post(`${env.URL}1/boards/?name=${name}&key=${env.API_KEY}&token=${env.TOKEN_KEY}&defaultLists=false`)
  })

  afterAll( () => {
    setIdBoard(response.data.id)
  })


  it("should return a status 200 when create a new board", () =>{
    const status = response.status;
    expect(status).toBe(200)
  })

  it("should return a status text OK when create a new board", () =>{
    const statusText = response.statusText;
    expect(statusText).toBe("OK")
  })

  it("should return a name sofrimento when create a new board", () =>{
    const name = response.data.name;
    expect(name).toBe("sofrimento")
  })
})