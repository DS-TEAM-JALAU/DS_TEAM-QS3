import { z } from "zod";
import { AxiosSingleton } from "../../src/request/request-manager.js";
import { XMLParser } from "fast-xml-parser";

jest.setTimeout(30000);

describe("Zod Validation @high @functional @regression", () => {
	let axiosInstance;

	beforeAll(async () => {
		axiosInstance = AxiosSingleton.getInstance();
	});

	it("should return a valid xml format", async () => {
		const response = await axiosInstance.get("/ws/01001000/xml/");
		const Cep = z.object({
			cep: z.string(),
			logradouro: z.string(),
			complemento: z.string(),
			unidade: z.string(),
			bairro: z.string(),
			localidade: z.string(),
			uf: z.string(),
			ibge: z.number(),
			gia: z.number(),
			ddd: z.number(),
			siafi: z.number(),
		});

		const parser = new XMLParser({
			ignoreAttributes: false,
			attributeNamePrefix: "@_",
		});

		const jsonData = parser.parse(response.data);
		const verification = Cep.safeParse(jsonData.xmlcep);

		expect(verification.success).toBe(true);
	});
});
