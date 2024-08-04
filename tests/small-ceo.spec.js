import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";


jest.setTimeout(30000);

let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in Small Cep test")
});

describe("Small Cep @medium @error @regression", () => {
  test("should return status code 400", async () => {
    logger.info("Running should return status code 400")
    let status;
    await axiosInstance.get(`/ws/0100100/json/`).catch((err) => {
      status = err.response.status;
    });
    expect(status).toBe(400);
  });
  test("should return status text Bad Request", async () => {
    logger.info("Running should return status text Bad Request")
    let statusText;
    await axiosInstance.get(`/ws/0100100/json/`).catch((err) => {
      statusText = err.response.statusText;
    });
    expect(statusText).toBe("Bad Request");
  });
});
