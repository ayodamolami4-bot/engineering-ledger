export type DesignDecision = {
  id: string;
  title: string;
  problem: string;
  approach: string;
  tradeOff: string;
};

export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  year: string;
  stack: readonly string[];
  businessProblem: string;
  productApproach: string;
  intendedValue: readonly string[];
  architecture: readonly { label: string; description: string }[];
  decisions: readonly DesignDecision[];
  verification: readonly string[];
  scaleOutlook: string;
  demoPath: string;
  previewScreenshot: string;
  previewScene: string;
  practicalScenario: string;
  workflow: readonly string[];
  outcomesToMeasure: readonly string[];
  liveUrl: string;
  githubUrl?: string;
  visual: 'operations' | 'commerce';
};

// Add new projects ONLY here. Project cards and case study routes are generated from this registry.
// All business outcomes below are potential mechanisms, not measured customer ROI.
export const projects: readonly Project[] = [
  {
    slug: 'manageos', number: '01', category: 'OPERATIONS / ORGANIZATIONS',
    title: 'ManageOS', subtitle: 'Operational visibility, accountability, and traceable decisions.',
    summary: 'A business operations platform connecting organizational goals to the people, projects, work, reviews and auditable decisions that move them forward.',
    role: 'Product Engineer / Full-Stack Software Engineer — collaborative development', year: '2026',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Server-side sessions', 'RBAC'],
    businessProblem: 'Work can fragment across departments, spreadsheets, meetings and chat threads. When responsibility, progress and decisions are difficult to trace, coordination consumes management time and problems surface late.',
    productApproach: 'ManageOS organizes company goals, units, projects and tasks into connected workflows. Assignments, submissions, reviews, approvals, updates and audit records preserve context between decisions and execution.',
    intendedValue: [
      'Less effort gathering routine updates because progress and ownership are visible in one place.',
      'Faster identification of blocked work and approvals awaiting attention.',
      'More reliable reconstruction of changes and decisions through permission-controlled audit records.'
    ],
    architecture: [
      {label:'Interface',description:'React application with role-aware workflows and actionable states.'},
      {label:'Application',description:'Node.js / Express modular backend with session authentication and scoped authorization.'},
      {label:'Persistence',description:'PostgreSQL relational model for companies, memberships, goals, projects and review state.'},
      {label:'Audit & recovery',description:'Company-scoped audit events, test coverage, database migrations and verified backup restoration.'}
    ],
    decisions: [
      {id:'OPS-01',title:'Company-scoped authorization',problem:'A shared service must not return one organization’s data to another.',approach:'Enforce company context and role capabilities on protected backend operations and queries.',tradeOff:'More explicit permission and context propagation in exchange for stronger access boundaries.'},
      {id:'OPS-02',title:'Workflow transitions instead of arbitrary status changes',problem:'Directly setting a task to complete can bypass submission evidence, review permissions and the activity history.',approach:'Constrain transitions and route submissions and reviews through dedicated workflows.',tradeOff:'Additional state-machine complexity for clearer accountability and testable business rules.'},
      {id:'OPS-03',title:'Modular deployment at current scale',problem:'A small team with limited infrastructure budget still needs domain separation without operating distributed services.',approach:'Maintain explicit modules and shared deployment with PostgreSQL-backed persistence.',tradeOff:'Fewer independently scalable boundaries but lower deployment and operational overhead.'}
    ],
    verification: ['API and authorization tests', 'Browser-based end-to-end checks', 'Database migrations', 'Encrypted backup and restoration verification'],
    scaleOutlook: 'Measure workflow load, database contention, p95 request latency and error rates before introducing caches, queues or independently deployed services. Architecture changes should follow operational evidence.',
    practicalScenario:'A team finishes a deliverable, but the manager cannot see who approved it or why it was changed. The organization needs a clear path from assigned work to review, acceptance and a traceable record.',
    workflow:['A company defines a goal and the projects supporting it.','A project member receives an assignment and submits completed work.','An authorized reviewer records a decision.','Activity and audit histories preserve relevant context, within company and permission boundaries.'],
    outcomesToMeasure:['Time managers spend requesting routine progress updates.','Median time between submission and review decision.','Time required to reconstruct a significant operational change.'],
    previewScreenshot:'/previews/assets/manageos-overview.webp',
    previewScene:'An illustrative audit screen from the independent sample-data walkthrough, not a production screenshot.',
    demoPath:'/previews/#manageos', liveUrl:'https://manageos.onrender.com', visual:'operations'
  },
  {
    slug: 'marketplace', number:'02', category:'COMMERCE / TRANSACTIONS',
    title:'Multi-Vendor Marketplace', subtitle:'A unified buying experience with vendor-specific fulfillment.',
    summary:'A multi-vendor commerce platform with order orchestration, inventory coordination, payment recovery, and separate customer, vendor and administrator workflows.',
    role:'Lead Backend Engineer — collaborative client project', year:'2026',
    stack:['Java','Spring Boot','Spring Security','JPA','PostgreSQL','Docker'],
    businessProblem:'A single customer basket can span multiple merchants. Checkout must remain coherent for the buyer, while inventory, order fulfillment and uncertain payment states must remain correct for each vendor.',
    productApproach:'A parent order represents the customer purchase; vendor-specific sub-orders carry independent fulfillment work. Transaction boundaries coordinate stock updates, and payment verification and reconciliation handle uncertain states.',
    intendedValue:[
      'One checkout experience while vendors receive their own fulfillment work.',
      'Lower risk of overselling or duplicate order effects under competing and repeated requests.',
      'More recoverable payment processing when callbacks or external responses are delayed.'
    ],
    architecture:[
      {label:'Commerce API',description:'Java / Spring Boot REST services for customer, vendor and administrator operations.'},
      {label:'Order model',description:'Parent order, vendor-specific sub-orders, order items and payment attempts.'},
      {label:'Consistency',description:'PostgreSQL transactions, database coordination, controlled retries and checkout idempotency.'},
      {label:'Recovery',description:'Payment verification, payment-status reconciliation and asynchronous recovery paths.'}
    ],
    decisions:[
      {id:'COM-01',title:'One checkout, multiple fulfillment units',problem:'Customer orders and vendor responsibilities have different lifecycles.',approach:'Separate the customer-facing parent order from vendor-specific sub-orders.',tradeOff:'A more expressive state model and additional aggregation logic for correct multi-vendor behavior.'},
      {id:'COM-02',title:'Idempotent checkout',problem:'Repeated submission or retry must not unintentionally create a second purchase.',approach:'Track checkout idempotency keys and coordinate record access for repeated requests.',tradeOff:'Additional persistence and recovery rules in return for safer retry behavior.'},
      {id:'COM-03',title:'Reconcile external payment state',problem:'External payment may succeed even when confirmation fails to reach the application.',approach:'Verify status and reconcile unresolved payments rather than trusting the first response.',tradeOff:'Extra lifecycle and background processing complexity for greater recoverability.'}
    ],
    verification:['Checkout and payment-flow tests', 'Lock retry and validation tests', 'Schema migrations and constraints', 'Backend CI checks'],
    scaleOutlook:'If provider failures, traffic or operational requirements justify it, evaluate isolated queues, outbox publication, richer monitoring and stronger dependency resilience. Keep correctness independent of infrastructure scale.',
    practicalScenario:'One buyer checks out items from two different sellers. The customer needs one order, each seller needs their own fulfillment record, and the system must handle a repeated checkout request without generating unintended duplicate effects.',
    workflow:['The customer selects products belonging to separate vendors.','One checkout creates a customer-facing parent order with vendor-specific sub-orders.','Transaction boundaries coordinate stock and order state.','Payment confirmation and reconciliation account for delayed or uncertain external outcomes.'],
    outcomesToMeasure:['Frequency of duplicate checkout effects under repeated requests.','Oversell attempts in concurrent-inventory tests.','Time to resolve unsettled payment states after external failures.'],
    previewScreenshot:'/previews/assets/marketplace-catalog.webp',
    previewScene:'A fictional order and vendor-fulfillment scene from the static guided preview, not a real transaction.',
    demoPath:'/previews/#marketplace',liveUrl:'https://marketplace-frontend-sir8.onrender.com',githubUrl:'https://github.com/ayodamolami4-bot/marketplace-backend',visual:'commerce'
  }
];
export const getProject = (slug: string): Project | undefined => projects.find(project => project.slug === slug);
