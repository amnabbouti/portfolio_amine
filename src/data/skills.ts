import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    slug: 'backend-platform',
    label: 'Backend & Platform',
    tagline: 'Laravel-first APIs with multi-tenant hardening',
    narrative:
      'I design REST APIs with layered authorization (RBAC/ABAC), tenant isolation, observability, and automated recovery.',
    stack: [
      {
        name: 'Laravel 11 / PHP 8.3',
        level: 'Advanced',
        focus: 'Primary',
        summary: '120+ endpoint APIs, policy middleware (PEP/PDP), job orchestration, observers.',
        lastUsed: 'Current',
        highlights: [
          'Row-level security contexts via PostgreSQL settings',
          'Event-sourced audit trails and replay utilities',
          'caching strategies to reduce read load',
          'Zero-trust API posture with rotating keys and rate limits',
        ],
      },
      {
        name: 'Node.js (Express)',
        level: 'Intermediate',
        focus: 'Supporting',
        summary: 'Auth gateways, TypeScript-first developer tooling.',
        lastUsed: '2025',
        highlights: ['Hybrid REST/WebSocket services', 'Queue-backed integration bridges'],
      },
      {
        name: 'FastAPI (Python)',
        level: 'Intermediate',
        focus: 'Primary',
        summary: 'Data services, async pipelines, and typed contracts for ML/ops hand-offs.',
        lastUsed: '2025',
      },
      {
        name: 'PostgreSQL 15',
        level: 'Intermediate',
        focus: 'Primary',
        summary: 'RLS, performance tuning, JSONB search, advisory locks for idempotent jobs.',
        lastUsed: 'Current',
      },
      {
        name: 'Redis / Queues',
        level: 'Intermediate',
        focus: 'Supporting',
        summary: 'Rate limiting, cache stampede protection, queued workers w/ replay resilience.',
        lastUsed: 'Current',
      },
      {
        name: 'Docker & CI pipelines',
        level: 'Intermediate',
        focus: 'Primary',
        summary: 'Local parity, Pest/Pint automation, GitHub Actions hardening & secret scanning.',
        lastUsed: 'Current',
      },
    ],
    tools: [
      'Laravel',
      'PostgreSQL',
      'Redis',
      'Docker',
      'GitHub Actions',
      'TypeScript',
      'Pest',
      'Python',
    ],
    proofPoints: [
      'Missions Control API ranked 100% on security review; zero critical findings from jury',
      'Designed multi-tenant license gating & threat detection scoring service',
      'Rbac/Abac policies',
      'CLI tooling',
      'Automated onboarding & offboarding scripts',
      'Database migration utilities',
      'PostgreSQL RLS',
      'Audit trails',
      'Event sourcing',
      'Job orchestration',
      'Webhooks',
    ],
  },
  {
    slug: 'frontend-delivery',
    label: 'Frontend & Delivery',
    tagline: 'Interfaces that stay fast and legible',
    narrative:
      'From dashboards to terminal UX, I prototype quickly, measure, and harden—keeping accessibility and performance visible to the team.',
    stack: [
      {
        name: 'React Native',
        level: 'Advanced',
        focus: 'Primary',
        summary:
          'Cross-platform field apps with offline sync, background geolocation, and native integrations.',
        lastUsed: '2025',
      },
      {
        name: 'React / TypeScript',
        level: 'Advanced',
        focus: 'Supporting',
        summary: 'Component systems, state machines, terminal UX, DX-focused tooling.',
        lastUsed: 'Current',
      },
      {
        name: 'Next.js',
        level: 'Intermediate',
        focus: 'Supporting',
        summary: 'Server-rendered React apps with static site generation and API routes.',
        lastUsed: '2025',
      },
      {
        name: 'Vite / Tailwind',
        level: 'Advanced',
        focus: 'Supporting',
        summary: 'Design tokens, atomic styling, build-time analysis and bundle hygiene.',
        lastUsed: 'Current',
      },
    ],
    tools: [
      'React',
      'React Native',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Figma',
      'CSS-in-JS',
      'Shadcn/ui',
    ],
    proofPoints: [
      'Built immersive terminal portfolio with tab-completion and cinematic entry sequence',
      'Delivered mission dashboards with SLA alerts and printer telemetry overlays',
      'Migrated key workflows from Kotlin to React Native, integrating native modules for barcode scanning and item locations',
    ],
  },
  {
    slug: 'ops-observability',
    label: 'Ops & Observability',
    tagline: 'Keep the lights on, catch anomalies early',
    narrative:
      'Security, logging, and alerting are part of day zero. I make it easy to see what the system is doing and why.',
    stack: [
      {
        name: 'Threat & Abuse Detection',
        level: 'Advanced',
        focus: 'Primary',
        summary: 'Risk scoring, anomaly detection, IP intelligence, API posture dashboards.',
        lastUsed: 'Current',
      },
      {
        name: 'Monitoring & Telemetry',
        level: 'Advanced',
        focus: 'Supporting',
        summary: 'Structured logging, SLO tracking, Grafana/Prometheus, on-call readiness.',
        lastUsed: '2025',
      },
    ],
    tools: ['Datadog', 'Grafana', 'Prometheus', 'OpenTelemetry', 'Sentry'],
    proofPoints: [
      'Security logging & threat scoring reduced unauthorized API traffic by 35%',
      'Implemented audit-ready trails for inventory movement and license enforcement',
    ],
  },
  {
    slug: 'collaboration-delivery',
    label: 'Collaboration & Delivery',
    tagline: 'Ship with clarity, onboard teams fast',
    narrative:
      'I codify conventions, document tricky corners so the codebase stays friendly—even six months later.',
    stack: [
      {
        name: 'Technical leadership',
        level: 'Advanced',
        focus: 'Primary',
        summary: 'Backlog shaping, PR rituals, incidents, stakeholder communication.',
        lastUsed: 'Current',
      },
      {
        name: 'Knowledge sharing',
        level: 'Advanced',
        focus: 'Supporting',
        summary: 'Architecture docs, onboarding playbooks, internal workshops.',
        lastUsed: '2025',
      },
      {
        name: 'Product collaboration',
        level: 'Intermediate',
        focus: 'Supporting',
        summary: 'Roadmap co-design, translating ops feedback into actionable work.',
        lastUsed: '2025',
      },
    ],
    tools: ['Notion', 'Linear', 'Miro', 'Loom'],
    proofPoints: [
      'Led five-person team on webshop platform: bi-weekly sprints, code reviews, retrospectives',
      'Maintained terminal portfolio as living case study with self-serve docs',
    ],
  },
];

export default skillCategories;
