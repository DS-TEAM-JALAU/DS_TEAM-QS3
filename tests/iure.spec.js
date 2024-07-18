import axios from "axios";

jest.setTimeout(30000);

const validResponse = [
  {
    cep: "91790-072",
    logradouro: "Rua Domingos José Poli",
    complemento: "",
    unidade: "",
    bairro: "Restinga",
    localidade: "Porto Alegre",
    uf: "RS",
    ibge: "4314902",
    gia: "",
    ddd: "51",
    siafi: "8801",
  },
  {
    cep: "90420-200",
    logradouro: "Rua Domingos José de Almeida",
    complemento: "",
    unidade: "",
    bairro: "Rio Branco",
    localidade: "Porto Alegre",
    uf: "RS",
    ibge: "4314902",
    gia: "",
    ddd: "51",
    siafi: "8801",
  },
];

describe("Iure", () => {
  test("should return valid response when use + in 'logradouro'", async () => {
    const { data } = await axios.get(
      "https://viacep.com.br/ws/RS/Porto Alegre/Domingos+Jose/json/"
    );

    expect(data).toStrictEqual(validResponse);
  });

  test("should return valid response when use space in 'logradouro'", async () => {
    const { data } = await axios.get(
      "https://viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/"
    );

    expect(data).toStrictEqual(validResponse);
  });
});
