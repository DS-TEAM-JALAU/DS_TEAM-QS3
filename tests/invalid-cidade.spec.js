import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";

jest.setTimeout(30000);



let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in the Invalid Cidade Test")
});

describe(" Invalid Cidade @high @error @regression", () => {

  test("should return status 400 a invalid 'cidade' was provided", async () => {
    logger.info("Running should return status 400 a invalid 'cidade' was provided")
    let status;
    await axiosInstance.get(`/ws/RS/Po/Domingos/json/`).catch((err) => {
      status = err.response.status;
    });

    expect(status).toBe(400);
  });

  test("should return status text bad request a invalid 'cidade' was provided", async () => {
    logger.info("Running should return status text bad request a invalid 'cidade' was provided")
    let statusText;
    await axiosInstance.get(`/ws/RS/Po/Domingos/json/`).catch((err) => {
      statusText = err.response.statusText;
    });

    expect(statusText).toBe("Bad Request");
  });
});
