import axios from "axios";

jest.setTimeout(30000);

describe("Hadja", () => {
  test("should return json format if url param type json was provided", async () => {
    const { headers } = await axios.get(
      "https://viacep.com.br/ws/01001000/json/"
    );

    expect(headers.get("Content-Type").split(";")[0]).toBe("application/json");
  });

  test("should return json format if url param type xml was provided", async () => {
    const { headers } = await axios.get(
      "https://viacep.com.br/ws/01001000/xml"
    );

    expect(headers.get("Content-Type").split(";")[0]).toBe(
      "application/xhtml+xml"
    );
  });
});
