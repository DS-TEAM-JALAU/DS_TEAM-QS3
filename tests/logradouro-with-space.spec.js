import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";

jest.setTimeout(30000);

let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in the Logradouro with space Test")
});

describe("Logradouro with space @low @functional @regression", () => {
  test("should return valid response when use space in 'logradouro'", async () => {
    logger.info("Running should return valid response when use space in 'logradouro")
    const { data } = await axiosInstance.get(
      `/ws/RS/Porto Alegre/Domingos Jose/json/`
    );

    expect(data.length).toStrictEqual(2);
  });

  test("should return status code 200", async () => {
    logger.info("Running should return status code 200")
    let statusCode;
    await axiosInstance.get(
      `/ws/RS/Porto Alegre/Domingos Jose/json/`
    ).then((response) => statusCode = response.status);

    expect(statusCode).toStrictEqual(200);
  });

  test("should return status text ok", async () => {
    logger.info("Running should return status text ok")
    let statusText;
    await axiosInstance.get(
      `/ws/RS/Porto Alegre/Domingos Jose/json/`
    ).then((response) => statusText = response.statusText);

    expect(statusText).toStrictEqual("OK");
  });
});