import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";


jest.setTimeout(30000);

let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in the jsonp format Test")
});

describe("Jsonp format @low", () => {
  test("should return jsonp format if callback param provided", async () => {
    logger.info("Running should return jsonp format if callback param provided")
    const { headers } = await axiosInstance.get(
      `/ws/01001000/json?callback=callback`
    );

    expect(headers.get("Content-Type").split(";")[0]).toBe(
      "application/javascript"
    );
  });

  test("should return status code 200", async () => {
    logger.info("Running should return status code 200")
    let statusCode;

    await axiosInstance.get(
      `/ws/01001000/json?callback=callback`
    ).then((response) => statusCode = response.status);

    expect(statusCode).toBe(200);
  });

  test("should return status text ok", async () => {
    logger.info("Running should return status text ok")
    let statusText;

    await axiosInstance.get(
      `/ws/01001000/json?callback=callback`
    ).then((response) => statusText = response.statusText);

    expect(statusText).toBe("OK");
  });
});
