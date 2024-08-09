import { config } from "dotenv";

config();

export default {
  API_KEY: process.env.API_KEY,
  TOKEN_KEY: process.env.TOKEN_KEY,
  URL_TRELLO: process.env.URL,
};
