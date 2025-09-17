import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    slug: 'backend-platform',
    label: 'Backend & Platform',
    tagline: 'Laravel-first APIs with multi-tenant hardening',
    narrative:
      'I design REST APIs that survive enterprise scrutiny: layered authorization (RBAC/ABAC), tenant isolation, observability, and automated recovery.',
    stack: [
      {
        name: 'Laravel 11 / PHP 8.3',
        level: 'Expert',
        focus: 'Primary',
        summary: '120+ endpoint APIs, policy middleware (PEP/PDP), job orchestration, observers.',
        lastUsed: 'Current',
        highlights: [
          'Row-level security contexts via PostgreSQL settings',
          'Event-sourced audit trails and replay utilities',
        ],
      },
      {
        name: 'Node.js (Express / Nest)',
        level: 'Advanced',
        focus: 'Supporting',
        summary: 'Auth gateways, webhook relays, worker pools, TypeScript-first developer tooling.',
        lastUsed: '2025',
        highlights: ['Hybrid REST/WebSocket services', 'Queue-backed integration bridges'],
      },
      {
        name: 'FastAPI (Python)',
        level: 'Intermediate',
        focus: 'Emerging',
        summary: 'Data services, async pipelines, and typed contracts for ML/ops hand-offs.',
        lastUsed: '2025',
      },
      {
        name: 'PostgreSQL 15',
        level: 'Advanced',
        focus: 'Primary',
        summary: 'RLS, performance tuning, JSONB search, advisory locks for idempotent jobs.',
        lastUsed: 'Current',
      },
      {
        name: 'Redis / Queues',
        level: 'Advanced',
        focus: 'Supporting',
        summary: 'Rate limiting, cache stampede protection, queued workers w/ replay resilience.',
        lastUsed: 'Current',
      },
      {
        name: 'Docker & CI pipelines',
        level: 'Advanced',
        focus: 'Supporting',
        summary: 'Local parity, Pest/Pint automation, GitHub Actions hardening & secret scanning.',
        lastUsed: 'Current',
      },
    ],
    tools: ['Pest', 'Pint', 'PHPStan', 'Sentry', 'OpenAPI'],
    proofPoints: [
      'Missions Control API passed enterprise security audit with no critical findings',
      'Designed multi-tenant license gating & threat detection scoring service',
    ],
  },
  {
    slug: 'frontend-delivery',
    label: 'Frontend & Delivery',
    tagline: 'Interfaces that stay fast and legible under pressure',
    narrative:
      'From dashboards to terminal UX, I prototype quickly, measure, and harden—keeping accessibility and performance visible to the team.',
    stack: [
      {
        name: 'React / TypeScript',
        level: 'Advanced',
        focus: 'Primary',
        summary: 'Component systems, state machines, terminal UX, DX-focused tooling.',
        lastUsed: 'Current',
      },
      {
        name: 'Vite / Tailwind',
        level: 'Advanced',
        focus: 'Supporting',
        summary: 'Design tokens, atomic styling, build-time analysis and bundle hygiene.',
        lastUsed: 'Current',
      },
      {
        name: 'Design Ops',
        level: 'Intermediate',
        focus: 'Supporting',
        summary: 'Storybook, accessibility audits, snapshot testing, motion prototyping.',
        lastUsed: '2025',
      },
    ],
    tools: ['Storybook', 'Testing Library', 'Vitest', 'Figma'],
    proofPoints: [
      'Built immersive terminal portfolio with tab-completion and cinematic entry sequence',
      'Delivered mission dashboards with SLA alerts and printer telemetry overlays',
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
      {
        name: 'DevSecOps',
        level: 'Intermediate',
        focus: 'Supporting',
        summary: 'Secret scanning, dependency audits, container hardening, IaC linting.',
        lastUsed: '2025',
      },
    ],
    tools: ['Sentry', 'Grafana', 'Prometheus', 'OWASP ZAP'],
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
      'I codify conventions, document tricky corners, and coach teams so the codebase stays friendly—even six months later.',
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
      'Led five-person team on inventory platform capstone; hit MVP in 12 weeks',
      'Maintained terminal portfolio as living case study with self-serve docs',
    ],
  },
];

export default skillCategories;
