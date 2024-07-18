import axios from "axios";

const makeRequest = async () => {
  try {
    const response = await axios.get(
      "https://viacep.com.br/ws/RS/Porto Alegre/Dom/json/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

describe("Willian", () => {
  test("should return a limit of 50 ceps", async () => {
    const response = await makeRequest();
    expect(response.length).toBe(50);
  });
});
