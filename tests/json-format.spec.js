import { AxiosSingleton } from "../src/request/request-manager.js";
import { logger } from "../src/config/logger.js";


jest.setTimeout(30000);

let axiosInstance;

beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
  logger.info("Set Request Manager Instance in Json format")
});

describe("Json format @high @smoke @functional @regression", () => {
  test("should return json format if url param type json was provided", async () => {
    logger.info("Running should return json format if url param type json was provided")
    const { headers } = await axiosInstance.get(`/ws/01001000/json/`);

    expect(headers.get("Content-Type").split(";")[0]).toBe("application/json");
  });

  test("should return status 200", async () => {
    logger.info("Running should return status 200")

    let statusCode;
    await axiosInstance.get(`/ws/01001000/json/`).then((data) => {
      statusCode = data.status;
    });

    expect(statusCode).toBe(200);
  });

  test("should return status text ok", async () => {
    logger.info("Running should return status text ok")

    let statusText;
    await axiosInstance.get(`/ws/01001000/json/`).then((data) => {
      statusText = data.statusText;
    });

    expect(statusText).toBe("OK");
  });

  test("should return a correct data", async () => {
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

    let responseData;

    await axiosInstance.get(`/ws/01001000/json/`).then((response) => {
      responseData = response.data;
    });

    expect(responseData).toStrictEqual(expectedData);
  });

});
