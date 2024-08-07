import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";


jest.setTimeout(30000);

describe("Jsonp format @low @functional @regression", () => {
  let axiosInstance;
  let response;
  beforeAll( async () => {
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance in the jsonp format Test")
    response = await axiosInstance.get(
      `/ws/01001000/json?callback=callback`
    );
  });

  it("should return jsonp format if callback param provided", () => {
    logger.info("Running should return jsonp format if callback param provided")
    const headers = response.headers
    expect(headers.get("Content-Type").split(";")[0]).toBe(
      "application/javascript"
    );
  });

  it("should return status code 200", () => {
    logger.info("Running should return status code 200")
    let statusCode = response.status
    expect(statusCode).toBe(200);
  });

  test("should return status text ok", () => {
    logger.info("Running should return status text ok")
    let statusText = response.statusText;

    expect(statusText).toBe("OK");
  });
});
