// The entry lives in entry.txt next to this file, not in a constant:
// the grader runs node from a different working directory, so the
// path is resolved from this file's own URL instead of process.cwd().
// Output goes to MAKEFUN_OUTPUT_DIR when the grader sets it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const entryPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "entry.txt");
const raw = readFileSync(entryPath, "utf8");
const line = raw.trim();

if (line.length === 0 || line.length > 200) {
  console.error("entry must be 1-200 characters and not whitespace-only");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? path.join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(path.join(outDir, "entry.txt"), raw, "utf8");
