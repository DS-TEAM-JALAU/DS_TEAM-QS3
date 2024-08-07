import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";

jest.setTimeout(30000);


describe(" Invalid Logradouro @high @error @regression", () => {
  let axiosInstance;
  let status;
  let statusText;
  beforeAll( async () => {
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance in the Invalid Logradouro Test")
    await axiosInstance.get(`/ws/RS/Porto Alegre/Do/json/`).catch((err) => {
      status = err.response.status;
      statusText = err.response.statusText;
    });
  });

  it("should return status 400 a invalid 'logradouro' was provided", () => {
    logger.info("Running should return status 400 a invalid 'logradouro' was provided")
    expect(status).toBe(400);
  });

  it("should return status text bad request a invalid 'logradouro' was provided", () => {
    logger.info("Running should return status text bad request a invalid 'logradouro' was provided")
    expect(statusText).toBe("Bad Request");
  });
});
