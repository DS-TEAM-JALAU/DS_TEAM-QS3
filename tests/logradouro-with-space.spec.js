import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";

jest.setTimeout(30000);

describe("Logradouro with space @low @functional @regression", () => {
  let axiosInstance;
  let response;
  beforeAll( async () => {
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance in the Logradouro with space Test")
    response = await axiosInstance.get(
      `/ws/RS/Porto Alegre/Domingos Jose/json/`
    );
  });

  it("should return valid response when use space in 'logradouro'", () => {
    logger.info("Running should return valid response when use space in 'logradouro")
    const  data  = response.data
    expect(data.length).toStrictEqual(2);
  });

  it("should return status code 200", () => {
    logger.info("Running should return status code 200")
    let statusCode = response.status;
    expect(statusCode).toStrictEqual(200);
  });

  it("should return status text ok", () => {
    logger.info("Running should return status text ok")
    let statusText = response.statusText;
    expect(statusText).toStrictEqual("OK");
  });
});
