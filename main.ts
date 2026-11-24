// Warning Label for Humans: One Line, Big Laugh.
// Writes the entry's single-line warning label to entry.txt in the
// harness output directory. Deterministic: every run writes the same bytes.
// The label is 99 characters, well inside the 160-character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: This human runs on coffee, spite, and the unshakable belief that it read the instructions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL + "\n", "utf8");
console.log(`Wrote entry.txt (${LABEL.length} characters)`);
