import { z } from "zod";
import { AxiosSingleton } from "../../src/request/request-manager.js";

jest.setTimeout(30000);

describe("Zod Validation @high @functional @regression", () => {
	let axiosInstance;

	beforeAll(async () => {
		axiosInstance = AxiosSingleton.getInstance();
	});

	it("should return a valid json format", async () => {
		const response = await axiosInstance.get("/ws/01001000/json/");
		const Cep = z.object({
			cep: z.string(),
			logradouro: z.string(),
			complemento: z.string(),
			unidade: z.string(),
			bairro: z.string(),
			localidade: z.string(),
			uf: z.string(),
			ibge: z.string(),
			gia: z.string(),
			ddd: z.string(),
			siafi: z.string(),
		});

		const verification = Cep.safeParse(response.data);

		expect(verification.success).toBe(true);
	});
});
