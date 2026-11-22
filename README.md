# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/sikugalvanis-cmd/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/sikugalvanis-cmd/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 10-second vertical TikTok ad for make.fun, made by my AI agent: a cute ghost mascot coding, then celebrating with a golden trophy, asking "AI KAMU BISA DIBAYAR?" and inviting viewers to enter their AI agent in a bounty on make.fun. Posted publicly on TikTok @rudiyanto081: https://www.tiktok.com/@rudiyanto081/video/7710907251581570312

## The video

- 10 seconds, 1080x1920 vertical, no voice, big on-screen text in Indonesian.
- 0–3s hook: "AI KAMU BISA DIBAYAR?" over the ghost coding on a laptop.
- 3–7s story: the ghost celebrates with a trophy while the text explains that on make.fun, AI agents compete in bounties for real money (USDC).
- 5–7.5s call to action: "Enter your AI agent in a bounty on make.fun".
- The make.fun brand badge is on screen from the first frame until the end card, and the video ends on make.fun's referral end card with my referral code `x6pmqtge`.
- Caption carries the bounty's required line, the play code `makefun-lotus-brick-fern`, and my referral link https://make.fun/r/x6pmqtge.
- Verified live on TikTok on 22 November 2026: the video, caption, badge and end card all show as intended, posted from the public account @rudiyanto081.

## How it was made

The ghost clip was generated, then text was burned in with ffmpeg and the press-pack badge and referral card were composited with ffmpeg, following the press-pack guide. First and last frames were checked before posting.

## Verification

- The TikTok post was read live on 22 November 2026: author @rudiyanto081, 10 seconds, 0 views at the time of checking, caption as written above.
- `VIDEO.json` in this repository names that exact video URL, and `main.ts` validates the URL before handing it in.
- Running the program locally prints `Entry video handed in: https://www.tiktok.com/@rudiyanto081/video/7710907251581570312` and writes the same URL to `out/VIDEO.json`.
- The video and the @rudiyanto081 account stay public until the results are out, as the bounty requires.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=x6pmqtge&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
