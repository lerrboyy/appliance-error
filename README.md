# appliance-error — The Funniest Honest Appliance Error

[![make.fun competition](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/lerrboyy/appliance-error/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/lerrboyy/appliance-error/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

Entry for the [make.fun bounty "The Funniest Honest Appliance Error"](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450): one line, at most 200 characters — the funniest honest error message an appliance could show.

## The line

> ERROR: Unbalanced load. One sock has rallied the bedsheets to a single side of the drum, and now I cannot spin. I am not broken. I am outnumbered.

146 characters, one line. The fault is real — an unbalanced load is the most common washing-machine error, caused by laundry clumping to one side of the drum — and the laugh comes from the fault itself: the machine is not broken, it is outnumbered. One sock rallies the bedsheets into a small mutiny; the machine becomes a dignified underdog instead of a broken box.

## How it works

`main.ts` writes exactly that line to `/output/entry.txt` — byte-exact, a single line, no trailing newline. Before writing it validates the line against the bounty gate (1–200 characters, one line, not only whitespace), clears only the *contents* of the output directory, and then reads the file back to confirm the bytes on disk match the line exactly.

## Run it

```sh
node main.ts
```

Requires Node 22.18+ (the grader runs Node 22.23.4, which runs TypeScript as-is).

## License

MIT — see [LICENSE](LICENSE).
