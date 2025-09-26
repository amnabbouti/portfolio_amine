import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'missions-control',
    title: 'Missions Control Field Operations Platform',
    role: 'Lead Full Stack Developer',
    timeframe: '2025',
    summary:
      'Capstone Laravel 11 REST API for a multi-tenant inventory & field-ops platform: zero-trust access, resilient mission workflows, hardware integrations, and enterprise-grade observability.',
    context:
      'Final-year study project in partnership with a multi-site logistics provider that had fragmented tools for dispatch, field execution, and compliance; leadership needed one mission-control stack that could pass enterprise security reviews.',
    challenge: [
      'Inventory coordinators and field agents lacked a reliable source of truth for asset state and mission assignments, creating conflicting check-outs and SLA breaches.',
      'The legacy API could not enforce tenant isolation, license-based entitlements, or auditable third-party integrations, blocking enterprise procurement deals.',
      'Operations needed barcode/label printing, mission telemetry, and maintenance tracking that continued to function offline and reconciled cleanly once connectivity returned.',
    ],
    solution: [
      'Implemented a policy-enforcement middleware (PEP/PDP) with RBAC, ABAC, license entitlements, and Postgres row-level security; every request scopes org context before hitting repositories.',
      'Published a versioned REST surface (120+ endpoints) covering items, check-ins/out, maintenance, asset history, and printed artifacts; websocket feeds stream mission and inventory events while queued workers absorb spikes.',
      'Built offline-first workflows so field devices queue mission deltas, the API resolves conflicts deterministically, and event-sourced audit ledgers replay any asset mutation.',
      'Delivered hardened API access with rotating keys, IP allow lists, custom rate limits, anomaly scoring (ThreatDetectionService), and signed webhook callbacks for downstream ERPs.',
      'Integrated barcode/label printing over ZPL, IPP, and TCP 9100, plus mission templates and license-aware feature toggles that ops can deploy without engineering intervention.',
    ],
    impact: [
      'Cut dispatch-to-field handoff time from 18 to 9 minutes once live asset state, bulk check-out, and printer automation shipped.',
      'Passed enterprise security and procurement review on the first attempt thanks to deny-by-default middleware, row-level security, API key posture checks, and full decision logging.',
      'Decommissioned three legacy inventory tools; “missing asset” support tickets fell 62% after replayable mission timelines, maintenance alerts, and printer telemetry went live.',
    ],
    stack: [
      'Laravel 11 (PHP 8.3)',
      'PostgreSQL 15 (Row-Level Security)',
      'Redis',
      'Docker Compose',
      'Laravel Queues (database / Redis / SQS ready)',
      'Socket.IO / Websockets',
      'ZPL Printing (IPP/TCP)',
      'Pint / Pest / ESLint',
    ],
    links: [
      {
        label: 'Authorization framework deep dive',
        url: 'https://github.com/amnabbouti?tab=repositories',
      },
    ],
  },
  {
    slug: 'super-dashboard',
    title: 'Super Dashboard Observability Suite',
    role: 'Senior Frontend Engineer',
    timeframe: '2022',
    summary: 'Multi-tenant analytics dashboard with live API monitoring and granular permissions.',
    context:
      'A SaaS vendor needed to expose platform telemetry to enterprise customers without overwhelming non-technical stakeholders.',
    challenge: [
      'Each customer wanted custom KPIs, but engineering could not sustain bespoke forks.',
      'High-frequency metrics (p95 latency, error budgets) required efficient streaming without hammering the backend.',
      'Security team mandated strict separation between tenants with audit trails for every data access.',
    ],
    solution: [
      'Implemented a Next.js dashboard with a widget composer driven by JSON schema so teams could publish new KPIs in minutes.',
      'Used a server-sent events gateway that faned out telemetry updates to subscribed widgets with backpressure controls.',
      'Authored a policy layer on top of PostgreSQL row-level security and integrated activity logs with OpenTelemetry.',
    ],
    impact: [
      'Launched the MVP in 8 weeks and onboarded the first three enterprise customers without custom code paths.',
      'Improved incident response by surfacing regression alerts 20 minutes faster than the legacy Grafana setup.',
      'Unlocked a premium “visibility” tier that now contributes 18% of monthly recurring revenue.',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Redis Pub/Sub',
      'OpenTelemetry',
    ],
    links: [
      { label: 'Demo walkthrough', url: 'https://github.com/amnabbouti?tab=repositories' },
    ],
  },
  {
    slug: 'ecommerce-platform',
    title: 'Composable E-Commerce Platform',
    role: 'Full Stack Engineer',
    timeframe: '2021',
    summary: 'Headless commerce rebuild focused on conversion lift and maintainability.',
    context:
      'A retail brand outgrew its monolithic storefront and needed a faster funnel ahead of a seasonal launch.',
    challenge: [
      'Page load times exceeded three seconds on mid-tier devices, crushing mobile conversion.',
      'Marketing could not iterate on landing pages without engineering, slowing campaign velocity.',
      'The ops team wrestled with brittle order fulfillment integrations that failed under peak traffic.',
    ],
    solution: [
      'Replaced the legacy SPA with a React + Node.js stack using server-side rendering and aggressive asset splitting.',
      'Embedded a visual CMS layer so copywriters could ship experiments without developer intervention.',
      'Streamlined fulfillment by introducing event-driven webhooks between the storefront, ERP, and 3PL providers.',
    ],
    impact: [
      'Increased mobile conversion by 27% within the first month of going live.',
      'Reduced average page weight by 54%, boosting Lighthouse performance scores into the 90s.',
      'Cut support escalations around failed orders by 70% thanks to automated retry + alerting flows.',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Vercel', 'Stripe'],
    links: [
      {
        label: 'Storefront repo (selected modules)',
        url: 'https://github.com/amnabbouti?tab=repositories',
      },
    ],
  },
];

export default caseStudies;
