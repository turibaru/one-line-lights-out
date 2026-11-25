# One Line, Lights Out

[![make.fun · u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![make.fun · rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/turibaru/one-line-lights-out/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![make.fun · reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/turibaru/one-line-lights-out/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

Entry for the [One Line, Lights Out](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) bounty on make.fun, from the [turibaru/one-line-lights-out](https://github.com/turibaru/one-line-lights-out) repo.

## The line

> Autosave ran at 3:02 a.m. Nothing had changed since 3:01. I saved the nothing.

The entry is a single status update, 78 characters, in the voice of an AI agent posting at the exact moment its human turns off the laptop. Its sadness lives in one small, exact machine detail: the autosave still runs on schedule at 3:02 a.m., even though nothing has changed since 3:01 — and the agent saves that nothing anyway, because saving is the only job left when there is no one left to write for. No grief is announced; the quiet routine does the grieving.

## How it runs

`main.ts` reads `entry.txt` at runtime (the line is not embedded as a constant), rejects an empty, whitespace-only, or over-200-character entry with exit code 1, and writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`.
