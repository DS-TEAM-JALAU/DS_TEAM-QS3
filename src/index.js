import { iure } from "./iure.js";
import { hadja } from "./hadja.js";

async function executeFunctions() {
  console.log("Executando");
  await hadja();
  console.log("Hadja executado com sucesso");
}

executeFunctions();
