import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";


jest.setTimeout(30000);

describe("XML format @low @functional @regression", () => {
  let axiosInstance;
  let response;
  beforeAll( async() => {
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance in XML format")
    response = await axiosInstance.get(`/ws/01001000/xml/`);
  });

  it("should return XML format if url param type XML was provided", () => {
    logger.info("Running should return XML format if url param type XML was provided")
    const headers  = response.headers
    expect(headers.get("Content-Type").split(";")[0]).toBe("application/xhtml+xml");
  });

  it("should return status 200", () => {
    logger.info("Running should return status 200")
    let statusCode  = response.status;
    expect(statusCode).toBe(200);
  });

  it("should return status text ok", () => {
    logger.info("Running should return status text ok")

    let statusText = response.statusText;
    expect(statusText).toBe("OK");
  });

  it("should return a correct data", () => {
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

    let responseData = response.data;
    expect(responseData).toStrictEqual(expectedData);
  });

});
