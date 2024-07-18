import axios from "axios";

describe("Willian", () => {
  test("should return a limit of 50 ceps", async () => {
    const { data } = await axios.get(
      "https://viacep.com.br/ws/RS/Porto Alegre/Dom/json/"
    );
    expect(data.length).toBe(50);
  });

  test("should return status code 400 if an invalid url was provided", async () => {
    let statusCode;

    await axios
      .get("https://viacep.com.br/ws/RS/Porto Alegre/Domingos/jso/")
      .catch((err) => {
        statusCode = err.response.status;
      });

    expect(statusCode).toBe(400);
  });
});
