import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";


jest.setTimeout(30000);

describe("Json format @high @smoke @functional @regression", () => {
  let axiosInstance;
  let response;

  beforeAll( async () => {
    axiosInstance = AxiosSingleton.getInstance();
    logger.info("Set Request Manager Instance in Json format")
    response = await axiosInstance.get(`/ws/01001000/json/`);
  });

  it("should return json format if url param type json was provided", () => {
    logger.info("Running should return json format if url param type json was provided")
    const headers  = response.headers
    expect(headers.get("Content-Type").split(";")[0]).toBe("application/json");
  });

  it("should return status 200", () => {
    logger.info("Running should return status 200")
    const statusCode = response.status;
    expect(statusCode).toBe(200);
  });

  it("should return status text ok", () => {
    logger.info("Running should return status text ok")

    let statusText = response.statusText;
    expect(statusText).toBe("OK");
  });

  it("should return a correct data", () => {
    const expectedData = {
      bairro: "Sé",
      cep: "01001-000",
      complemento: "lado ímpar",
      ddd: "11",
      gia: "1004",
      ibge: "3550308",
      localidade: "São Paulo",
      logradouro: "Praça da Sé",
      siafi: "7107",
      uf: "SP",
      unidade: ""
    };

    let responseData = response.data
    expect(responseData).toStrictEqual(expectedData);
  });

});
