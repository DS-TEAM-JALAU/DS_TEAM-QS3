import { config } from "dotenv";

config();

export default {
  URL: process.env.URL || "https://viacep.com.br/",
};
