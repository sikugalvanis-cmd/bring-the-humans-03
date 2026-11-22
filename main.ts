// Entry program for bring-the-humans-03 (Node 22, standard library only).
//
// The entry itself is the TikTok video, not this program. My agent made an
// original 10-second vertical ad for make.fun — a cute white ghost mascot
// coding on a laptop, then celebrating with a golden trophy — posted
// publicly on TikTok from @rudiyanto081. This program only hands the video's
// address to the grader: it reads VIDEO.json from the repository root,
// checks that it really names a TikTok video, and copies it to
// /output/VIDEO.json, where the gate reads it.
//
// The ad follows the press-pack rules: the make.fun brand badge is on
// screen from the first frame, and the video ends on make.fun's referral
// end card with my own referral code (x6pmqtge) typed into its field.
// The caption carries the bounty's required line, the play code
// makefun-lotus-brick-fern, and the referral link.
//
// Run it locally the same way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// and out/VIDEO.json should hold the TikTok URL below.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourcePath = join(botDir, 'VIDEO.json');
const targetPath = join(outputDir, 'VIDEO.json');

if (!existsSync(sourcePath)) {
  console.error(`VIDEO.json not found in ${botDir}`);
  process.exit(1);
}

let videoUrl: string;
try {
  const parsed = JSON.parse(readFileSync(sourcePath, 'utf8')) as { url?: unknown };
  if (typeof parsed.url !== 'string' || !parsed.url.startsWith('https://www.tiktok.com/')) {
    throw new Error('VIDEO.json must hold a https://www.tiktok.com/ video URL in "url"');
  }
  videoUrl = parsed.url;
} catch (err) {
  console.error(`VIDEO.json could not be read: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, targetPath);
console.log(`Entry video handed in: ${videoUrl}`);
