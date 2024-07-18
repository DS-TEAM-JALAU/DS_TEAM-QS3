import axios from "axios";

jest.setTimeout(30000);

describe("Ds team", () => {
  test("should return jsonp format if callback param provided", async () => {
    const { headers } = await axios.get(
      "https://viacep.com.br/ws/01001000/json?callback=callback"
    );

    expect(headers.get("Content-Type").split(";")[0]).toBe(
      "application/javascript"
    );
  });

  test("should return a XML type with encoding equal UTF-8", async () => {
    const { data } = await axios.get("https://viacep.com.br/ws/01001000/xml");

    const encoding = JSON.stringify(data).split('"')[4].match("UTF-8");

    expect(encoding[0]).toStrictEqual("UTF-8");
  });

  test("should return a connection header with keep-alive", async () => {
    const { headers } = await axios.get(
      "https://viacep.com.br/ws/01001000/json/",
      {
        headers: {
          Connection: "keep-alive",
        },
      }
    );

    expect(headers.get("connection")).toBe("keep-alive");
  });
});
