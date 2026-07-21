import { chromium } from "/Users/clementinelotode/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import fs from "node:fs";

const root = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({headless:true,executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"});

const jobs = [
  ["logos/pericles-symbole.svg","exports/pericles-symbole-1024.png",1024,1024,true],
  ["logos/pericles-symbole-inverse.svg","exports/pericles-symbole-inverse-1024.png",1024,1024,true],
  ["logos/pericles-logo-horizontal.svg","exports/pericles-logo-horizontal-2000.png",2000,496,true],
  ["logos/pericles-logo-horizontal-inverse.svg","exports/pericles-logo-horizontal-inverse-2000.png",2000,496,true],
  ["logos/pericles-logo-compact.svg","exports/pericles-logo-compact-1280.png",1280,976,true],
  ["templates/linkedin-post.svg","exports/pericles-linkedin-post-1080.png",1080,1080,false],
  ["templates/carte-visite.svg","exports/pericles-carte-visite.png",1800,1050,false],
  ["templates/couverture-rapport.svg","exports/pericles-couverture-rapport.png",1240,1754,false]
];

for (const [src,out,w,h,transparent] of jobs) {
  const page = await browser.newPage({viewport:{width:w,height:h},deviceScaleFactor:1});
  const srcPath = path.join(root,src);
  const fontBase = pathToFileURL(path.join(root,"fonts") + path.sep).href;
  const markup = fs.readFileSync(srcPath,"utf8").replaceAll("../fonts/",fontBase);
  await page.setContent(`<style>html,body{margin:0;width:100%;height:100%;overflow:hidden;background:transparent}svg{display:block;width:100vw;height:100vh}</style>${markup}`,{waitUntil:"networkidle"});
  await page.screenshot({path:path.join(root,out),omitBackground:transparent});
  await page.close();
}
await browser.close();
