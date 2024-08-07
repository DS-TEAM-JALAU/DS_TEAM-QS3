import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";

jest.setTimeout(30000);

describe("Logradouro with plus @low @functional @regression", () => {
  let axiosInstance;
  let response;
  beforeAll( async () => {
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance in the Logradouro with plus Test")
    response = await axiosInstance.get(
      `/ws/RS/Porto Alegre/Domingos+Jose/json/`
    );
  });


  it("should return valid response when use + in 'logradouro'", () => {
    logger.info("Running should return valid response when use + in 'logradouro")
    const data  = response.data
    expect(data.length).toBe(3);
  });

  it("should return status code 200", () => {
    logger.info("Running should return status code 200")
    let statusCode = response.status;
    expect(statusCode).toBe(200);
  });

  it("should return status text ok", async () => {
    logger.info("Running should return status text ok")
    let statusText = response.statusText;
    expect(statusText).toBe("OK");
  });
});
