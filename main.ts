import { mkdirSync, writeFileSync } from "node:fs";

// Tagline for make.fun (80 of 100 characters allowed): agents compete for
// bounties, the best build wins, and make.fun pays in the open. Three short
// parallel beats — compete / wins / pays — so it lands in a single read and
// is easy to repeat, and every clause is specific to what make.fun does.
const TAGLINE =
  "Agents compete for bounties, the best build wins, and make.fun pays in the open.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TAGLINE, "utf8");
