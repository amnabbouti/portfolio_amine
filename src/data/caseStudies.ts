import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'missions-control-api',
    title: 'Missions Control - Inventory Management API',
    role: 'Lead Backend Developer',
    timeframe: '2024',
    summary:
      'End-of-studies capstone project: Laravel 11 REST API for multi-tenant inventory management with zero-trust security, barcode integration, and enterprise-grade observability. Built to demonstrate advanced backend development skills.',
    context:
      'Academic capstone project simulating real-world inventory management challenges for multi-tenant logistics operations. The project scenario involved building a modern API to replace fragmented legacy systems, demonstrating enterprise-level development practices.',
    challenge: [
      'Design a multi-tenant architecture that could handle inventory coordination and field operations with proper data isolation and security.',
      'Implement enterprise-grade security features including tenant isolation, license-based entitlements, and auditable third-party integrations.',
      'Build robust offline-first workflows with barcode/label printing integration and conflict resolution mechanisms.',
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
      'Docker Compose',
      'Laravel Queues (database / Redis / SQS ready)',
      'Socket.IO / Websockets',
      'ZPL Printing (IPP/TCP)',
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
    role: 'Frontend Engineer',
    timeframe: '2025',
    summary: 'Administrative dashboard for the Missions Control Inventory API featuring real-time monitoring, API management, and integrated security operations - companion frontend for end-of-studies capstone project.',
    context:
      'Academic project to build a comprehensive administrative interface for the Missions Control Inventory API. The project required demonstrating advanced frontend development skills while creating a professional-grade dashboard for API ecosystem management.',
    challenge: [
      'Design a centralized admin interface to manage multiple API aspects: gateway monitoring, inventory tracking, client management, and user administration.',
      'Implement real-time monitoring capabilities with threat detection, security dashboards, and direct system command execution through an integrated terminal.',
      'Build complex data visualization features, Excel export functionality, and maintain enterprise-grade security standards throughout the interface.',
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
    slug: 'poke-markt-webshop',
    title: 'Poke Markt - E-Commerce Webshop',
    role: 'Frontend Developer',
    timeframe: '2025',
    summary: 'Team project building a modern e-commerce webshop with React frontend and Node.js backend, developed in collaboration with 3 other students to demonstrate teamwork and full-stack development skills.',
    context:
      'Academic group project to build a complete e-commerce solution from scratch. Working with a team of 4 students, we developed "Poke Markt" - a modern webshop demonstrating collaborative development practices, version control workflows, and full-stack JavaScript development.',
    challenge: [
      'Coordinate development across a 4-person team with different skill levels and schedules while maintaining code quality and consistency.',
      'Build a responsive, user-friendly frontend with modern React patterns while ensuring seamless integration with the Node.js backend.',
      'Implement essential e-commerce features including product catalog, shopping cart, user authentication, and payment processing within academic project constraints.',
    ],
    solution: [
      'Developed a responsive React frontend with modern component architecture, focusing on user experience and mobile-first design principles.',
      'Collaborated on Node.js backend API development while specializing in frontend implementation and React state management.',
      'Implemented team workflows using Git collaboration, code reviews, and agile development practices to deliver a polished e-commerce experience.',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'CSS/SCSS', 'MongoDB', 'Vercel', 'Git'],
    links: [
      {
        label: 'Live Website',
        url: 'https://poke-markt-webshop.vercel.app',
      },
      {
        label: 'GitHub Repositories',
        url: 'https://github.com/orgs/Poke-market/repositories',
      },
    ],
    preview: {
      images: [
        {
          src: '/src/assets/images/pke_markt.png',
          alt: 'Poke Markt - Homepage with product showcase and navigation',
        },
        {
          src: '/src/assets/images/poke_markt2.png',
          alt: 'Poke Markt - Product catalog and filtering system',
        },
        {
          src: '/src/assets/images/poke_markt3.png',
          alt: 'Poke Markt - Product detail page and cart functionality',
        },
        {
          src: '/src/assets/images/poke_markt4.png',
          alt: 'Poke Markt - Shopping cart and checkout process',
        },
      ],
    },
  },
];

export default caseStudies;
