import { logger } from "../src/config/logger.js";
import { AxiosSingleton } from "../src/request/request-manager.js";

jest.setTimeout(70 * 3000);

describe("Limit Cep @medium @performance @regression", () => {
  let axiosInstance;
  let response;
  beforeAll( async () => {
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance in the limit cep");
    response = await axiosInstance.get(`/ws/RS/Porto Alegre/Dom/json/`);
  });

  it("should return 50 ceps", () => {
    logger.info("Running should return a limit of 50 ceps");
    const data  = response.data
    expect(data.length).toBe(50);
  });

  it("should return status 200", () => {
    logger.info("Running should return a limit of 50 ceps");
    const status = response.status;
    expect(status).toBe(200);
  });

});
