import axios from "axios";

jest.setTimeout(30000);

describe("Roger", () => {
  test("should return status code 400 BAD REQUEST", async () => {
    let status;
    await axios
      .get("https://viacep.com.br/ws/010010000/json/")
      .catch((err) => (status = err.response.status));
    expect(status).toBe(400);
  });

  test("should return status code 400 BAD REQUEST", async () => {
    let status;
    await axios
      .get("https://viacep.com.br/ws/0100100/json/")
      .catch((err) => (status = err.response.status));
    expect(status).toBe(400);
  });
});
