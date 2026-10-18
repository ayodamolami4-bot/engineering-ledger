/** Generate the editable cover from the same bridge component used on the home page.
 * The checked-in PNG is the social-platform asset; re-rasterize this SVG after artwork edits.
 */
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import ts from 'typescript';
const source=readFileSync('src/components/BridgeStudy.tsx','utf8').replace('export function BridgeStudy','function BridgeStudy');
const js=ts.transpileModule(source,{compilerOptions:{jsx:ts.JsxEmit.React,target:ts.ScriptTarget.ES2022}}).outputText;
const BridgeStudy=new Function('React',js+'; return BridgeStudy;')(React);
const artwork=renderToStaticMarkup(React.createElement(BridgeStudy)).match(/<svg[\s\S]*?<\/svg>/)[0].replace('<svg ','<svg x="492" y="110" width="680" height="435" ');
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><pattern id="cover-hex" width="70" height="121.24" patternUnits="userSpaceOnUse"><path d="M0 20.2L35 0 70 20.2V60.6L35 80.8 0 60.6ZM0 101L35 80.8 70 101M35 0V-40M35 80.8v40.4" fill="none" stroke="#596f61" stroke-width=".5" opacity=".13"/></pattern></defs>
<rect width="1200" height="630" fill="#f3efe6"/><rect x="484" width="716" height="630" fill="url(#cover-hex)"/>
<path d="M52 62H1148M52 562H1148" stroke="#bfafa0" stroke-width="1"/>
<text x="54" y="44" fill="#506454" font-family="monospace" font-size="12" letter-spacing="2.3">AYODAMOLA ADESINA / SELECTED WORK</text>
<text x="54" y="160" fill="#a36343" font-family="monospace" font-size="13" letter-spacing="2">THE ENGINEERING LEDGER</text>
<g fill="#233a30" font-family="Georgia,serif" font-size="61"><text x="50" y="246">Thoughtful</text><text x="50" y="316">engineering.</text><text x="50" y="386" font-style="italic">Real products.</text></g>
<path d="M54 427H116" stroke="#b8744a" stroke-width="3"/>
<text x="54" y="468" fill="#304a3c" font-family="sans-serif" font-size="24">Ayodamola Adesina</text>
<text x="54" y="499" fill="#627267" font-family="sans-serif" font-size="17">Product Engineer · Full-Stack Developer</text>
${artwork}
<text x="54" y="598" fill="#56695d" font-family="monospace" font-size="12" letter-spacing="1">MANAGEOS / MARKETPLACE / ENGINEERING NOTES</text>
<text x="1147" y="598" text-anchor="end" fill="#9c6547" font-family="Georgia,serif" font-size="15" font-style="italic">Ideas, connected with care.</text>
</svg>`;
mkdirSync('public/social',{recursive:true});writeFileSync('public/social/engineering-ledger.svg',svg);console.log('Wrote editable 1200 × 630 sharing cover.');
