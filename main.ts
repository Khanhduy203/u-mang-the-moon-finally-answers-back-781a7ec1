// The Moon Finally Answers Back — make.fun program/v1 entry.
//
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or ./output/entry.txt when the variable is unset).
// Node 22 runs this TypeScript file directly; stdlib only, no deps.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Moon, at last, answers four billion years of wishes,
// howls and late-night promises.
const ENTRY =
  "Four billion years of wishes, howls, and 2 a.m. promises \u2014 and you're still asking me for a boyfriend.";

function main(): void {
  const text = ENTRY.trim();
  if (text.length < 1 || text.length > 240) {
    throw new Error(
      `entry must be 1-240 characters, got ${text.length}`,
    );
  }
  if (text !== ENTRY || text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
