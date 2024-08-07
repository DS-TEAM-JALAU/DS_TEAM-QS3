import { logger } from "../src/config/logger.js";
import { AxiosSingleton } from "../src/request/request-manager.js";

jest.setTimeout(70 * 3000);

describe("Invalid url @high @functional @smoke @error @regression", () => {
  let axiosInstance;
  let statusCode;
  let statusText;
  beforeAll( async() => {
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance in the invalid url");
    await axiosInstance
      .get(`/ws/RS/Porto Alegre/Domingos/jso/`)
      .catch((err) => {
        statusCode = err.response.status;
        statusText = err.response.statusText;
      });
  });


  it("should return status code 400 if an invalid url was provided", async () => {
    logger.info(
      "Running should return status code 400 if an invalid url was provided"
    );
    expect(statusCode).toBe(400);
  });

  it("should return status text Bad Request", async () => {
    logger.info(
      "Running should return status text Bad Request"
    );
    expect(statusText).toBe('Bad Request');
  });
});
