import { logger } from "../src/config/logger.js";
import { AxiosSingleton } from "../src/request/request-manager.js";

jest.setTimeout(70 * 3000);

let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in the limit cep");
});

describe("Limit Cep @medium @performance @regression", () => {
  test("should return 50 ceps", async () => {
    logger.info("Running should return a limit of 50 ceps");
    const { data } = await axiosInstance.get(`/ws/RS/Porto Alegre/Dom/json/`);
    expect(data.length).toBe(50);
  });

  test("should return status 200", async () => {
    logger.info("Running should return a limit of 50 ceps");
    const response = await axiosInstance.get('/ws/RS/Porto Alegre/Dom/json/');
    const status = response.status;
    expect(status).toBe(200);
  });

});
