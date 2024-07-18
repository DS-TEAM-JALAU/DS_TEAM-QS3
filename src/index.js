import { iure } from "./iure.js";
import { hadja } from "./hadja.js";
import { roger } from "./roger.js";
import { dsteam } from "./ds-team.js";
import { willian } from "./willian.js";

async function executeFunctions() {
  await hadja();
  await iure();
  await roger();
  await willian();
  await dsteam();
}

executeFunctions();
