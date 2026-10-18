/** Run the same browser journeys on a developer machine, with no hosted CI account. */
import {spawn} from 'node:child_process';
import {createServer} from 'node:net';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const probe=createServer();
await new Promise((resolve,reject)=>{probe.once('error',reject);probe.listen(0,'127.0.0.1',resolve);});
const port=probe.address().port;
await new Promise((resolve,reject)=>probe.close(error=>error?reject(error):resolve()));
const server=spawn(process.execPath,[resolve(root,'node_modules/vite/bin/vite.js'),'preview','--host','127.0.0.1','--port',String(port),'--strictPort'],{cwd:root,stdio:['ignore','pipe','pipe']});
let logs='',serverError=null,journey;
for(const stream of [server.stdout,server.stderr])stream.on('data',chunk=>logs=(logs+chunk).slice(-8000));
server.on('error',error=>serverError=error);
const stop=()=>{journey?.kill();server.kill();};
process.once('SIGINT',stop);process.once('SIGTERM',stop);
const base=`http://127.0.0.1:${port}`;
try{
 let ready=false;
 for(let attempt=0;attempt<60;attempt++){
  if(serverError)throw serverError;
  if(server.exitCode!==null)throw new Error(`Preview exited before it was ready.\n${logs}`);
  try{const response=await fetch(base,{signal:AbortSignal.timeout(1000)});if(response.ok){ready=true;break;}}catch{}
  await new Promise(resolve=>setTimeout(resolve,500));
 }
 if(!ready)throw new Error(`Preview did not become ready.\n${logs}`);
 const screenshots=process.env.LEDGER_SCREENSHOTS||resolve(root,'test-artifacts');
 console.log(`Testing the built portfolio. Screenshots: ${screenshots}`);
 journey=spawn(process.execPath,[resolve(root,'scripts/browser-journeys.mjs')],{cwd:root,stdio:'inherit',env:{...process.env,LEDGER_BASE_URL:base,LEDGER_SCREENSHOTS:screenshots}});
 const code=await new Promise((resolve,reject)=>{journey.once('error',reject);journey.once('exit',(code,signal)=>resolve(signal?1:code??1));});
 process.exitCode=code;
}finally{
 stop();process.removeListener('SIGINT',stop);process.removeListener('SIGTERM',stop);
}
