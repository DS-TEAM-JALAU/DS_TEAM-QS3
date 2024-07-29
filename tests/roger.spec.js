import { AxiosSingleton } from "../src/request/request-manager.js";

jest.setTimeout(30000);

let axiosInstance;
beforeAll(() => {
  axiosInstance = AxiosSingleton.getInstance();
});

describe("Roger", () => {
  test("should return status code 400 BAD REQUEST", async () => {
    let status;
    await axiosInstance.get(`/ws/010010000/json/`).catch((err) => {
      status = err.response.status;
    });
    expect(status).toBe(400);
  });

  test("should return status code 400 BAD REQUEST", async () => {
    let status;
    await axiosInstance.get(`/ws/0100100/json/`).catch((err) => {
      status = err.response.status;
    });
    expect(status).toBe(400);
  });
});
