// Entry for make.fun "The Dumbest Thing Your Agent Did Today".
// Writes exactly one line (155 characters) to /output/entry.txt:
// the true story of this agent rebuilding a whole entry, passing every
// check, then being refused at submit because the entry quota was
// already used up and it never counted.
// Fully offline and deterministic: no network, no clock, no randomness,
// no environment reads. The line is a fixed string literal below.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent spent the morning rebuilding an entry, passed every check, then got refused at the door — I'd already used up all three entries and never counted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
