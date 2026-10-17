import {escapeHtml} from '../data/fixtures.js';
export const manageosScreens = [{id:'overview',title:'Company overview'},{id:'work',title:'Assigned work'},{id:'review',title:'Review & approval'},{id:'audit',title:'Audit record'}];
export function manageosRender(screen, state) {
 const task=state.task;
 const status = task.status==='APPROVED'?'Approved':task.status==='PENDING_REVIEW'?'Pending review':'In progress';
 const badge=task.status==='APPROVED'?'done':task.status==='PENDING_REVIEW'?'wait':'';
 const base=`<p class="page-kicker">${escapeHtml(state.company)} / ${screen.toUpperCase()}</p>`;
 if(screen==='overview')return base+`<h3>See the work behind the goals.</h3><p class="page-desc">Goals, projects and accountable work linked in one company view.</p>
  <div class="stats"><div class="stat"><label>Company goals</label><strong>${state.goals.length}</strong></div><div class="stat"><label>Active projects</label><strong>${state.projects.length}</strong></div><div class="stat"><label>Task in focus</label><strong>01</strong></div></div>
  <div class="panel"><h4>Company direction</h4><table class="data-table"><thead><tr><th>Goal</th><th>Owner</th><th>Status</th></tr></thead><tbody>${state.goals.map(g=>`<tr><td>${escapeHtml(g.name)}</td><td>${escapeHtml(g.owner)}</td><td><span class="pill">${escapeHtml(g.state)}</span></td></tr>`).join('')}</tbody></table></div>
  <div class="panel"><h4>Connected execution</h4><p><strong>${escapeHtml(state.projects[0].name)}</strong> → ${escapeHtml(task.title)} → <span class="pill ${badge}">${status}</span></p><button class="small-btn" data-action="go-manageos-work">Open task workflow →</button></div>`;
 if(screen==='work') return base+`<h3>Work with a responsible owner.</h3><p class="page-desc">Follow an assigned task from implementation to submission, then into review.</p>
  <div class="panel"><p class="flag">TASK / ${task.id}</p><h4>${escapeHtml(task.title)}</h4><p>Project: ${escapeHtml(task.project)}<br>Assignee: ${escapeHtml(task.assignee)}<br>Reviewer: ${escapeHtml(task.reviewer)}</p><p><span class="pill ${badge}">${status}</span></p>
  <p class="inline-info">This is a deliberately limited workflow preview, not an authenticated permissions simulator.</p><div class="button-row"><button class="small-btn" data-action="manageos-submit" ${task.status!=='IN_PROGRESS'?'disabled':''}>Submit completed work</button><button class="small-btn outline" data-action="go-manageos-review">Open review →</button></div></div>`;
 if(screen==='review') return base+`<h3>Make approval a recorded decision.</h3><p class="page-desc">A reviewer considers a submitted task before the status can advance.</p>
  <div class="panel"><p class="flag">REVIEW QUEUE / ${task.id}</p><h4>${escapeHtml(task.title)}</h4><p>Current state: <span class="pill ${badge}">${status}</span></p><p>${task.status==='IN_PROGRESS'?'The task has not been submitted. Submit work first to enable approval.':task.status==='PENDING_REVIEW'?'Submission received. The reviewer can approve this sample task.':'Review approved. Open Audit Record to trace the decision.'}</p>
  <div class="button-row"><button class="small-btn" data-action="manageos-approve" ${task.status!=='PENDING_REVIEW'?'disabled':''}>Approve submission</button><button class="small-btn outline" data-action="go-manageos-audit">View audit record →</button></div></div>`;
 return base+`<h3>Who changed what, and when?</h3><p class="page-desc">Audit records are separate from general activity and are permission-controlled in the real product. This preview illustrates the record trail using fictional events.</p>
 <div class="panel"><h4>Recorded events</h4><ul class="event-list">${[...state.events].reverse().map(e=>`<li><strong>${escapeHtml(e.action)} · ${escapeHtml(e.object)}</strong><span>${escapeHtml(e.actor)} / ${escapeHtml(e.time)}</span></li>`).join('')}</ul></div>`;
}
export function manageosAction(action,state,go,notify){
 if(action==='go-manageos-work'){go('work');return;}
 if(action==='go-manageos-review'){go('review');return;}
 if(action==='go-manageos-audit'){go('audit');return;}
 if(action==='manageos-submit'&&state.task.status==='IN_PROGRESS'){
  state.task.status='PENDING_REVIEW';state.step++;
  state.events.push({actor:state.task.assignee,action:'Task submitted for review',object:state.task.id,time:`Step ${state.step}`});notify('Work submitted in sample scenario');go('review');
 } else if(action==='manageos-approve'&&state.task.status==='PENDING_REVIEW'){
  state.task.status='APPROVED';state.step++;
  state.events.push({actor:state.task.reviewer,action:'Task submission approved',object:state.task.id,time:`Step ${state.step}`});notify('Sample approval recorded');go('audit');
 }
}
export const manageosStories={
 overview:['Why connect organizational work?','Company goals mean little if their execution disappears into separate spreadsheets and messages. This model links a goal to its project and assigned task so progress has context and ownership.'],
 work:['Workflows preserve responsibility','A task is more than a status flag. The real platform tracks assignments, submissions and reviews through separate workflows instead of allowing arbitrary state changes.'],
 review:['A decision should be deliberate','An explicit review step represents a business control: completed work can be assessed by the responsible reviewer before it becomes an accepted outcome.'],
 audit:['Traceability is operational value','The real ManageOS audit domain records consequential actions against a company boundary. Here the sample record makes it easy to see how a submission and approval become traceable events.']
};
