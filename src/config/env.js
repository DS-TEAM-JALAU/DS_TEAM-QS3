import { config } from "dotenv";

config();

export default {
  API_KEY: process.env.API_KEY,
  TOKEN_KEY: process.env.TOKEN_KEY,
  URL: process.env.URL,
};
