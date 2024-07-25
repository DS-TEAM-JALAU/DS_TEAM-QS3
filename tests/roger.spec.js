import axios from "axios";
import env from "../src/config/env.js";

jest.setTimeout(30000);

let url;
beforeAll(() => {
  url = env.URL;
});

describe("Roger", () => {
  test("should return status code 400 BAD REQUEST", async () => {
    let status;
    await axios
      .get(url + "/ws/010010000/json/")
      .catch((err) => (status = err.response.status));
    expect(status).toBe(400);
  });

  test("should return status code 400 BAD REQUEST", async () => {
    let status;
    await axios
      .get(url + "/ws/0100100/json/")
      .catch((err) => (status = err.response.status));
    expect(status).toBe(400);
  });
});
