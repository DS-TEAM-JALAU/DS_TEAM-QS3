import { config } from "dotenv";

config();

export default {
	URL: process.env.URL || "ghttps://viacep.com.br/",
};
