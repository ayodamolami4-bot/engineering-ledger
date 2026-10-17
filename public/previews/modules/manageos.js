import {escapeHtml as e} from '../data/fixtures.js';
export const manageosScreens=[
 {id:'overview',title:'Company overview'},{id:'organization',title:'People & units'},{id:'goals',title:'Goals & projects'},
 {id:'work',title:'Assigned work'},{id:'blockers',title:'Blockers & requests'},{id:'review',title:'Review & approval'},
 {id:'activity',title:'Updates & activity'},{id:'audit',title:'Audit records'}
];
const stateName=s=>s.replaceAll('_',' ').toLowerCase().replace(/\b\w/g,c=>c.toUpperCase());
const button=(action,title,disabled=false)=>`<button class="small-btn" type="button" data-action="${action}" ${disabled?'disabled':''}>${title}</button>`;
const move=(id,title)=>`<button class="small-btn outline" data-action="go-manageos-${id}">${title} →</button>`;
const rows=(head,body)=>`<table class="data-table"><thead><tr>${head.map(x=>`<th>${e(x)}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table>`;
const marker=(s)=>`<span class="pill ${s==='APPROVED'||s==='RESOLVED'?'done':s==='PENDING_REVIEW'||s==='OPEN'?'wait':''}">${e(stateName(s))}</span>`;
const notice='<p class="inline-info">Illustrative interface and fictional state; access rules are enforced by the real backend, not in this static demo.</p>';
export function manageosRender(screen,s){
 const task=s.task;const base=`<p class="page-kicker">${e(s.company)} / ${screen.toUpperCase()}</p>`;
 if(screen==='overview')return base+`<h3>Company work, in context.</h3><p class="page-desc">Not a scorecard for show: follow a goal to its project, assignment, review and recorded decision.</p><div class="stats"><div class="stat"><label>Company goals</label><strong>${s.goals.length}</strong></div><div class="stat"><label>Active projects</label><strong>${s.projects.length}</strong></div><div class="stat"><label>Open blockers</label><strong>${s.blocker.status==='OPEN'?1:0}</strong></div></div>
 <div class="panel"><h4>Operational direction</h4>${rows(['Goal','Accountable unit','Progress'],s.goals.map(g=>`<tr><td>${e(g.name)}</td><td>${e(g.owner)}</td><td>${marker(g.state.toUpperCase().replaceAll(' ','_'))}</td></tr>`).join(''))}</div>
 <div class="panel"><h4>Responsibility in motion</h4><div class="journey-line"><span>GOAL 01</span><b>→</b><span>PROJECT 01</span><b>→</b><span>TSK-104</span><b>→</b><span>${e(stateName(task.status))}</span></div><div class="button-row">${move('goals','Explore alignment')}${move('work','Open assigned task')}</div></div>`;
 if(screen==='organization')return base+`<h3>Who owns the work?</h3><p class="page-desc">Organizational units and roles determine which people should participate in projects and reviews.</p><div class="panel"><h4>Units & team leads</h4>${rows(['Organizational unit','Lead','Members'],s.units.map(u=>`<tr><td>${e(u.name)}</td><td>${e(u.lead)}</td><td>${u.members}</td></tr>`).join(''))}</div><div class="panel"><h4>Sample memberships</h4>${rows(['Person','Role','Unit'],s.people.map(p=>`<tr><td>${e(p.name)}</td><td>${marker(p.role)}</td><td>${e(p.unit)}</td></tr>`).join(''))}<div class="button-row">${move('goals','See aligned projects')}</div></div>`;
 if(screen==='goals')return base+`<h3>Connect strategy to execution.</h3><p class="page-desc">A company goal explains why the work matters. Projects and milestones give it structure.</p>
 ${s.projects.map(p=>`<div class="panel"><p class="flag">${e(p.id)} / ${e(p.unit)} / ALIGNED TO ${e(p.goal)}</p><h4>${e(p.name)}</h4><div class="milestone-list">${p.milestones.map((m,i)=>`<div><span>${String(i+1).padStart(2,'0')}</span>${e(m)}</div>`).join('')}</div><p>${marker(p.state.toUpperCase().replaceAll(' ','_'))}</p></div>`).join('')}<div class="button-row">${move('work','Inspect responsible task')}</div>`;
 if(screen==='work')return base+`<h3>An assignment has a lifecycle.</h3><p class="page-desc">This selected task belongs to a project, an assignee and a reviewer; it cannot be approved without a submission.</p><div class="panel"><p class="flag">${e(task.id)} / ${e(task.project)}</p><h4>${e(task.title)}</h4>
 <div class="split-facts"><div><small>ASSIGNEE</small><strong>${e(task.assignee)}</strong></div><div><small>REVIEWER</small><strong>${e(task.reviewer)}</strong></div><div><small>STATE</small>${marker(task.status)}</div><div><small>OPEN BLOCKERS</small><strong>${s.blocker.status==='OPEN'?'01':'00'}</strong></div></div>
 <div class="journey-line"><span>Assigned</span><b>→</b><span>Submit</span><b>→</b><span>Review</span><b>→</b><span>Audit</span></div>
 <div class="button-row">${button('manageos-submit','Submit work for review',task.status!=='IN_PROGRESS'||s.blocker.status==='OPEN')}${move('blockers','Manage blocker')}${move('review','Review queue')}</div></div>${s.blocker.status==='OPEN'?'<p class="inline-info">Resolve the sample blocker before submitting. In this guided scenario, the blocked work is not marked ready while its dependency is unresolved.</p>':''}${notice}`;
 if(screen==='blockers')return base+`<h3>Surface a dependency before it becomes a delay.</h3><p class="page-desc">Blockers and requests make responsibilities visible rather than leaving them buried in messages.</p><div class="panel"><p class="flag">${e(s.blocker.id)} / PROJECT ${e(s.projects[0].id)}</p><h4>${e(s.blocker.title)}</h4><p>Responsible owner: <strong>${e(s.blocker.owner)}</strong></p><p>${marker(s.blocker.status)}</p><div class="button-row">${button('manageos-resolve','Mark sample blocker resolved',s.blocker.status!=='OPEN')}${move('work','Return to the task')}</div></div>
 <div class="panel"><h4>Operational request</h4>${rows(['Request','Owner','State'],s.requests.map(r=>`<tr><td>${e(r.subject)}</td><td>${e(r.owner)}</td><td>${marker(r.status)}</td></tr>`).join(''))}</div>`;
 if(screen==='review')return base+`<h3>Review should be a real decision.</h3><p class="page-desc">Work passes from assignee to reviewer. A rejection returns responsibility to the owner; approval leaves a formal audit record.</p><div class="panel"><p class="flag">REVIEW QUEUE / ${e(task.id)}</p><h4>${e(task.title)}</h4><p>Assignee: ${e(task.assignee)} · Reviewer: ${e(task.reviewer)}</p><p>Current state: ${marker(task.status)}</p>
 <p>${task.status==='IN_PROGRESS'?'No pending submission. Return to work to complete and submit it.':task.status==='PENDING_REVIEW'?'A sample submission is awaiting a decision.':'This task has an accepted submission.'}</p>
 <div class="button-row">${button('manageos-approve','Approve submission',task.status!=='PENDING_REVIEW')}${button('manageos-reject','Request changes',task.status!=='PENDING_REVIEW')}${move('audit','Inspect formal record')}</div></div>
 <div class="panel"><h4>Decision history</h4>${task.reviews.length?rows(['Reviewer','Decision','Attempt'],task.reviews.map((r,i)=>`<tr><td>${e(task.reviewer)}</td><td>${marker(r)}</td><td>${i+1}</td></tr>`).join('')):'<p>No review decision has been recorded yet.</p>'}</div>${notice}`;
 if(screen==='activity')return base+`<h3>Progress shouldn't vanish into chat threads.</h3><p class="page-desc">Updates keep colleagues oriented. Formal audit logs remain a separate, permission-controlled domain.</p><div class="panel"><h4>Team updates</h4>${s.updates.map(u=>`<div class="activity-item"><strong>${e(u.author)}</strong><small>${e(u.scope)}</small><p>${e(u.text)}</p></div>`).join('')}</div><div class="panel"><h4>Sample notifications</h4>${s.notifications.map(n=>`<div class="activity-item"><strong>${e(n.to)}</strong><p>${e(n.message)}</p></div>`).join('')}</div><div class="button-row">${move('audit','Compare with the audit trail')}</div>`;
 return base+`<h3>Who changed what, and when?</h3><p class="page-desc">Consequential actions are traceable. The production system separately enforces audit viewing permissions and company isolation.</p><div class="panel"><h4>Formal audit timeline</h4><ul class="event-list">${[...s.events].reverse().map(v=>`<li><strong>${e(v.action)} · ${e(v.object)}</strong><span>${e(v.actor)} / ${e(v.time)}</span></li>`).join('')}</ul></div><div class="button-row">${move('overview','Back to company overview')}</div>${notice}`;
}
export function manageosAction(action,s,go,notify){
 if(action.startsWith('go-manageos-')){go(action.replace('go-manageos-',''));return;}
 const record=(actor,operation,object)=>{s.step++;s.events.push({actor,action:operation,object,time:`Step ${s.step}`});};
 if(action==='manageos-resolve'&&s.blocker.status==='OPEN'){
  s.blocker.status='RESOLVED';s.requests[0].status='RESOLVED';record(s.blocker.owner,'Blocker resolved',s.blocker.id);
  s.updates.unshift({author:s.blocker.owner,text:'Policy wording confirmed. The onboarding guide can proceed.',scope:s.task.project});notify('Sample blocker resolved; work can now be submitted');go('work');return;
 }
 if(action==='manageos-submit'&&s.task.status==='IN_PROGRESS'&&s.blocker.status==='RESOLVED'){
  s.task.status='PENDING_REVIEW';s.task.submissions++;record(s.task.assignee,'Task submitted for review',s.task.id);
  s.notifications.unshift({to:s.task.reviewer,message:`Review requested for ${s.task.id}`,read:false});notify('Work submitted in sample scenario');go('review');return;
 }
 if(action==='manageos-reject'&&s.task.status==='PENDING_REVIEW'){
  s.task.status='IN_PROGRESS';s.task.reviews.push('CHANGES_REQUESTED');record(s.task.reviewer,'Changes requested',s.task.id);
  s.notifications.unshift({to:s.task.assignee,message:`Changes requested on ${s.task.id}`,read:false});notify('Changes requested in sample scenario');go('work');return;
 }
 if(action==='manageos-approve'&&s.task.status==='PENDING_REVIEW'){
  s.task.status='APPROVED';s.task.reviews.push('APPROVED');record(s.task.reviewer,'Task submission approved',s.task.id);
  s.notifications.unshift({to:s.task.assignee,message:`Submission approved: ${s.task.id}`,read:false});notify('Sample approval recorded');go('audit');
 }
}
export const manageosStories={
 overview:['One chain of operational context','Company direction, accountable units and tasks should stay connected. The scenario illustrates the link from a strategic goal to a project, a responsible assignee and an eventual approval.'],
 organization:['Access begins with membership','The real system requires company and unit membership before some responsibilities can be assigned. These populated records demonstrate the organizational model without pretending to enforce permissions in a browser.'],
 goals:['Milestones make intention concrete','A goal states what the organization wants; a project coordinates delivery; milestones make progress reviewable. An employee should never have to guess which business outcome their work serves.'],
 work:['A task is more than a status badge','Submitting work and reviewing it are separate responsibilities. This preview also models a blocking dependency to show why “mark done” is too simplistic.'],
 blockers:['Escalation is part of delivery','Delays often persist because ownership is unclear. A blocker record gives someone responsibility for removing the dependency, then returns the task to its normal flow.'],
 review:['Reviews are deliberate transitions','A rejection returns work to its assignee rather than quietly converting it into an approved result. Each decision leaves a record.'],
 activity:['Updates communicate; audit proves','People use updates and notifications to coordinate work. Audit events are distinct formal records of consequential operations and deserve stronger authorization.'],
 audit:['Auditability is business accountability','The production ManageOS backend records controlled, company-scoped events. The fictional timeline here illustrates the operational meaning of assignment, blocker resolution, submission and review.']
};
