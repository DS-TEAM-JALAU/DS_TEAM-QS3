import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";


jest.setTimeout(30000);

let axiosInstance;

beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in XML format")
});

describe("XML format @low", () => {
  test("should return XML format if url param type XML was provided", async () => {
    logger.info("Running should return XML format if url param type XML was provided")
    const { headers } = await axiosInstance.get(`/ws/01001000/xml/`);

    expect(headers.get("Content-Type").split(";")[0]).toBe("application/xhtml+xml");
  });

  test("should return status 200", async () => {
    logger.info("Running should return status 200")

    let statusCode;
    await axiosInstance.get(`/ws/01001000/xml/`).then((data) => {
      statusCode = data.status;
    });

    expect(statusCode).toBe(200);
  });

  test("should return status text ok", async () => {
    logger.info("Running should return status text ok")

    let statusText;
    await axiosInstance.get(`/ws/01001000/xml/`).then((data) => {
      statusText = data.statusText;
    });

    expect(statusText).toBe("OK");
  });

  test("should return a correct data", async () => {
    const expectedData =  '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<xmlcep>\n' +
          '  <cep>01001-000</cep>\n' +
          '  <logradouro>Praça da Sé</logradouro>\n' +
          '  <complemento>lado ímpar</complemento>\n' +
          '  <unidade></unidade>\n' +
          '  <bairro>Sé</bairro>\n' +
          '  <localidade>São Paulo</localidade>\n' +
          '  <uf>SP</uf>\n' +
          '  <ibge>3550308</ibge>\n' +
          '  <gia>1004</gia>\n' +
          '  <ddd>11</ddd>\n' +
          '  <siafi>7107</siafi>\n' +
          '</xmlcep>'

    let responseData;

    await axiosInstance.get(`/ws/01001000/xml/`).then((response) => {
      responseData = response.data;
    });

    expect(responseData).toStrictEqual(expectedData);
  });

});
