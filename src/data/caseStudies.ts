import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'missions-control',
    title: 'Missions Control Field Operations Platform',
    role: 'Lead Full Stack Developer',
    timeframe: '2023',
    summary: 'Unified mobile + web tooling for dispatchers and field agents with real-time mission tracking.',
    context:
      'A logistics provider needed to replace spreadsheets and fragmented tools with a single source of truth for live missions.',
    challenge: [
      'Dispatchers lacked visibility into agent status, causing overlapping assignments and missed SLAs.',
      'Legacy backend could not push real-time updates to the native app footprint that stakeholders wanted.',
      'Field teams operated in low-connectivity areas, so the solution had to degrade gracefully offline.',
    ],
    solution: [
      'Planned a React Native client with offline-first caching and background sync using SQLite + Axios queues.',
      'Refactored the Laravel backend into modular services, exposing mission events over websockets and REST.',
      'Introduced a role-based workflow builder so operations could reconfigure mission stages without code pushes.',
    ],
    impact: [
      'Cut average dispatch time from 18 minutes to 11 minutes (‑39%) within the first release cycle.',
      'Raised mission completion SLA adherence to 94% by surfacing blockers to dispatchers in real time.',
      'Reduced support tickets by 60% after consolidating three legacy tools into the unified console.',
    ],
    stack: [
      'React Native',
      'Laravel',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Socket.IO',
      'AWS Fargate',
    ],
    links: [
      { label: 'Product overview', url: 'https://github.com/amine-abbouti?tab=repositories' },
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
      { label: 'Demo walkthrough', url: 'https://github.com/amine-abbouti?tab=repositories' },
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
    stack: [
      'React',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'Vercel',
      'Stripe',
    ],
    links: [
      { label: 'Storefront repo (selected modules)', url: 'https://github.com/amine-abbouti?tab=repositories' },
    ],
  },
];

export default caseStudies;
