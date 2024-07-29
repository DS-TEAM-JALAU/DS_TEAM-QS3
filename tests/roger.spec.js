import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";


jest.setTimeout(30000);

let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in the Roger Test")
});

describe("Roger", () => {
  test("should return status code 400 BAD REQUEST", async () => {
    logger.info("Running should return status code 400 BAD REQUEST")
    let status;
    await axiosInstance.get(`/ws/010010000/json/`).catch((err) => {
      status = err.response.status;
    });
    expect(status).toBe(400);
  });

  test("should return status code 400 BAD REQUEST", async () => {
    logger.info("Running should return status code 400 BAD REQUEST")
    let status;
    await axiosInstance.get(`/ws/0100100/json/`).catch((err) => {
      status = err.response.status;
    });
    expect(status).toBe(400);
  });
});
