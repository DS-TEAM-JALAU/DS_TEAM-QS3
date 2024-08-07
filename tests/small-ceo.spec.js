import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";


jest.setTimeout(30000);

describe("Small Cep @medium @error @regression", () => {
  let axiosInstance;
  let status;
  let statusText;
  beforeAll( async () => {
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance in Small Cep test")
    await axiosInstance.get(`/ws/0100100/json/`).catch((err) => {
      status = err.response.status;
      statusText = err.response.statusText;
    });
  });

  it("should return status code 400", () => {
    logger.info("Running should return status code 400")
    expect(status).toBe(400);
  });
  it("should return status text Bad Request", () => {
    logger.info("Running should return status text Bad Request")
    expect(statusText).toBe("Bad Request");
  });
});
