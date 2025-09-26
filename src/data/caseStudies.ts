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
      'Delivered hardened API access with rotating keys, IP allow lists, custom rate limits, anomaly scoring (ThreatDetectionService), and signed webhook callbacks for downstream ERPs.',
      'Integrated barcode/label printing over ZPL, IPP, and TCP 9100, plus mission templates and license-aware feature toggles that ops can deploy without engineering intervention.',
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
    title: 'StockMaster Dashboard - Mission Control Interface',
    role: 'Lead Frontend Developer',
    timeframe: '2025',
    summary: 'Enterprise management dashboard for the Missions Control API ecosystem featuring real-time monitoring, inventory management, and integrated security operations.',
    context:
      'The Missions Control Field Operations Platform required a sophisticated administrative interface to manage the entire API ecosystem, including inventory operations, client relationships, user management, and real-time security monitoring.',
    challenge: [
      'Operations teams needed a centralized command center to manage multiple aspects: API gateway monitoring, inventory tracking, client management, and user administration.',
      'System administrators required real-time threat detection, security monitoring, and the ability to execute system commands directly from the interface.',
      'The dashboard needed to handle complex data visualization, Excel exports, and integrate terminal functionality while maintaining enterprise-grade security.',
    ],
    solution: [
      'Developed StockMaster Dashboard using Next.js 15 and React 19 with a classic interface featuring an intelligent sidebar with auto-hide functionality and real-time system status.',
      'Integrated xterm.js terminal emulation with custom security commands, threat level monitoring, and direct API interaction, providing administrators with comprehensive system control.',
      'Implemented modular architecture with dedicated sections: Command Center (real-time monitoring), API Gateway (security & metrics), Inventory Matrix (stock management with Excel export), Client Hub (CRM), User Hub (RBAC), and Analytics Engine.',
      'Built sophisticated API integration with intelligent caching, bearer token authentication, and real-time threat detection monitoring with color-coded security status displays.',
    ],
    stack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'xterm.js',
      'Zustand',
      'Recharts',
      'Firebase Hosting',
      'shadcn/ui',
    ],
    links: [
      { label: 'Demo walkthrough', url: 'https://github.com/amnabbouti?tab=repositories' },
    ],
    preview: {
      images: [
        {
          src: '/src/assets/images/dashboard.png',
          alt: 'StockMaster Dashboard - Command Center with real-time monitoring and integrated terminal',
        },
        {
          src: '/src/assets/images/dashboard_2.png',
          alt: 'StockMaster Dashboard - API Gateway management and security monitoring',
        },
        {
          src: '/src/assets/images/dashboard_3.png',
          alt: 'StockMaster Dashboard - Inventory Matrix with stock management and tracking',
        },
        {
          src: '/src/assets/images/dashboard_4.png',
          alt: 'StockMaster Dashboard - User management and access control interface',
        },
      ],
    },
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
