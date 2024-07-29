import { AxiosSingleton } from "../src/request/request-manager.js";

jest.setTimeout(30000);

let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
});

describe("Hadja", () => {
  test("should return json format if url param type json was provided", async () => {
    const { headers } = await axiosInstance.get(`/ws/01001000/json/`);

    expect(headers.get("Content-Type").split(";")[0]).toBe("application/json");
  });

  test("should return json format if url param type xml was provided", async () => {
    const { headers } = await axiosInstance.get(`/ws/01001000/xml`);

    expect(headers.get("Content-Type").split(";")[0]).toBe(
      "application/xhtml+xml"
    );
  });
});
