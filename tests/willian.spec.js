import { logger } from "../src/config/logger.js";
import { AxiosSingleton } from "../src/request/request-manager.js";

jest.setTimeout(70 * 3000);

let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in the Willian Test");
});

describe("Willian", () => {
  test("should return a limit of 50 ceps @integration @smoke", async () => {
    logger.info("Running should return a limit of 50 ceps");
    const { data } = await axiosInstance.get(`/ws/RS/Porto Alegre/Dom/json/`);
    expect(data.length).toBe(50);
  });

  test("should return status code 400 if an invalid url was provided @smoke", async () => {
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
});
