import axios from "axios";

jest.setTimeout(70 * 3000);

let url;
beforeAll(() => {
  url = "https://viacep.com.br";
});

describe("Willian", () => {
  test("should return a limit of 50 ceps", async () => {
    const { data } = await axios.get(url + "/ws/RS/Porto Alegre/Dom/json/");
    expect(data.length).toBe(50);
  });

  test("should return status code 400 if an invalid url was provided", async () => {
    let statusCode;

    await axios.get(url + "/ws/RS/Porto Alegre/Domingos/jso/").catch((err) => {
      statusCode = err.response.status;
    });

    expect(statusCode).toBe(400);
  });
});
