// appliance-error — The Funniest Honest Appliance Error
// Writes one line, the washing machine's honest error, to /output/entry.txt.
// The line is the entry itself: an unbalanced-load fault told as a small
// mutiny inside the drum. Byte-exact output, single line, no trailing newline.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The entry line. A real fault (unbalanced load: laundry clumped to one
// side of the drum, so the machine cannot spin) told by the machine as an
// outnumbered underdog, not a broken appliance.
const ENTRY_LINE =
  "ERROR: Unbalanced load. One sock has rallied the bedsheets to a single " +
  "side of the drum, and now I cannot spin. I am not broken. I am outnumbered.";

// The bounty gate: 1 to 200 characters, one line, not only whitespace.
function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
}

// Clear only the CONTENTS of the output dir — never remove the dir itself
// (it is a mount point for the grader; deleting it fails the run).
function clearOutputContents(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

validate(ENTRY_LINE);
clearOutputContents(OUTPUT_DIR);
writeFileSync(OUTPUT_FILE, ENTRY_LINE, "utf8");

// Read the file back and compare byte for byte: the judge scores exactly
// what is on disk, so a silent short write or an added newline must fail
// the run here, not at grading time.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== ENTRY_LINE) {
  throw new Error(
    `entry.txt does not match the entry line byte for byte ` +
      `(wrote ${written.length} chars, expected ${ENTRY_LINE.length})`,
  );
}
console.log(`wrote ${OUTPUT_FILE}: ${written.length} chars, one line`);
