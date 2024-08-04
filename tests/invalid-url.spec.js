import { logger } from "../src/config/logger.js";
import { AxiosSingleton } from "../src/request/request-manager.js";

jest.setTimeout(70 * 3000);

let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in the invalid url");
});

describe("Invalid url @high @functional @smoke @error @regression", () => {
  test("should return status code 400 if an invalid url was provided", async () => {
    logger.info(
      "Running should return status code 400 if an invalid url was provided"
    );
    let statusCode;

    await axiosInstance
      .get(`/ws/RS/Porto Alegre/Domingos/jso/`)
      .catch((err) => {
        statusCode = err.response.status;
      });

    expect(statusCode).toBe(400);
  });

  test("should return status text Bad Request", async () => {
    logger.info(
      "Running should return status text Bad Request"
    );
    let statusText;

    await axiosInstance
      .get(`/ws/RS/Porto Alegre/Domingos/jso/`)
      .catch((err) => {
        statusText = err.response.statusText;
      });

    expect(statusText).toBe('Bad Request');
  });
});
