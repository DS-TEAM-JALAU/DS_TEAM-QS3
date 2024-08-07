import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";

jest.setTimeout(30000);

describe(" Invalid Cidade @high @error @regression",() => {
  let status;
  let statusText;
  let axiosInstance;
  beforeAll( async () => {
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance in the Invalid Cidade Test")
    await axiosInstance.get(`/ws/RS/Po/Domingos/json/`).catch((err) => {
      status = err.response.status;
      statusText = err.response.statusText;
    });
  });

  it("should return status 400 a invalid 'cidade' was provided", () => {
    logger.info("Running should return status 400 a invalid 'cidade' was provided")
    expect(status).toBe(400);
  });

  it("should return status text bad request a invalid 'cidade' was provided", () => {
    logger.info("Running should return status text bad request a invalid 'cidade' was provided")
    expect(statusText).toBe("Bad Request");
  });
});
