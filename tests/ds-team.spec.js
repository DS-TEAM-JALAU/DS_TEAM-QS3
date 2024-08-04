import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";


jest.setTimeout(30000);

let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in the DS Team Test")
});

describe("Ds Team @low @functional @regression", () => {
  test("should return a XML type with encoding equal UTF-8", async () => {
    logger.info("Running should return a XML type with encoding equal UTF-8")
    const { data } = await axiosInstance.get(`/ws/01001000/xml`);

    const encoding = JSON.stringify(data).split('"')[4].match("UTF-8");

    expect(encoding[0]).toStrictEqual("UTF-8");
  });

  test("should return a connection header with keep-alive", async () => {
    logger.info("Running should return a connection header with keep-alive")
    const { headers } = await axiosInstance.get(`/ws/01001000/json/`, {
      headers: {
        Connection: "keep-alive",
      },
    });

    expect(headers.get("connection")).toBe("keep-alive");
  });
});
