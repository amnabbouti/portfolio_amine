import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    slug: 'frontend-systems',
    label: 'Frontend Systems & Architecture',
    tagline: 'User interfaces with modern React and TypeScript',
    narrative:
      'I build frontend applications using React, Next.js, and React Native, focusing on clean, maintainable code and user-centered design.',
    stack: [
      {
        name: 'React 19 / TypeScript',
        level: 'Intermediate',
        focus: 'Primary',
        summary:
          'Interactive dashboards, terminal interfaces, e-commerce platforms. Built 4 applications using modern React patterns.',
        lastUsed: 'Current',
        highlights: [
          'Real-time admin dashboards with complex state management',
          'Interactive terminal portfolio with command parsing',
          'E-commerce frontend with team collaboration (4 developers)',
          'Component systems with TypeScript for maintainable codebases',
        ],
      },
      {
        name: 'Next.js 15',
        level: 'Intermediate',
        focus: 'Primary',
        summary:
          'Full-stack applications with server components. Built Admin Dashboard for the Missions Control project.',
        lastUsed: 'Current',
        highlights: [
          'Complex admin dashboard with 6 integrated modules',
          'Real-time monitoring with Firebase deployment',
          'Excel export features and data visualization',
          'Modern React Server Components architecture',
        ],
      },
      {
        name: 'React Native / Expo',
        level: 'Intermediate',
        focus: 'Primary',
        summary:
          'Cross-platform mobile development. Built inventory management app with native device integrations.',
        lastUsed: '2025',
        highlights: [
          'Native camera and barcode scanner integration',
          'Cross-platform deployment (iOS, Android, Web)',
          'Offline-first architecture with data synchronization',
          'Modern mobile UI with React Native Paper',
        ],
      },
      {
        name: 'Modern Frontend Tooling',
        level: 'Intermediate',
        focus: 'Supporting',
        summary:
          'Vite, Tailwind CSS, TypeScript, component libraries. Focused on good developer experience.',
        lastUsed: 'Current',
        highlights: [
          'Efficient development workflow with Vite build system',
          'Design systems with Tailwind and shadcn/ui',
          'TypeScript for type-safe development at scale',
        ],
      },
    ],
    tools: [
      'React 19',
      'Next.js 15',
      'TypeScript',
      'React Native',
      'Expo SDK',
      'Tailwind CSS',
      'Vite',
      'Zustand',
      'shadcn/ui',
    ],
    proofPoints: [
      'Built 4 applications across web and mobile platforms',
      'Worked on frontend development in team settings',
      'Created UI components for real-time data and user interactions',
      'Developed cross-platform mobile app using React Native and Expo',
      'Built reusable components used across different projects',
    ],
  },
  {
    slug: 'backend-integration',
    label: 'Backend & API Integration',
    tagline: 'Backend development',
    narrative:
      'I build robust backend systems with Laravel, designing scalable APIs and data architectures. Currently expanding my backend expertise through hands-on project development.',
    stack: [
      {
        name: 'Laravel 11 / PHP',
        level: 'Intermediate',
        focus: 'Primary',
        summary:
          'REST API development for inventory management. Built comprehensive API system with 120+ endpoints.',
        lastUsed: '2024',
        highlights: [
          'Multi-tenant architecture with role-based access control',
          'API security with authentication and authorization layers',
          'Database optimization with PostgreSQL and query performance',
          'RESTful API design following industry best practices',
        ],
      },
      {
        name: 'Database Architecture',
        level: 'Intermediate',
        focus: 'Primary',
        summary:
          'Relational database design with MySQL and PostgreSQL. Architected multi-table systems for user management and inventory tracking.',
        lastUsed: 'Current',
        highlights: [
          'Relational database design and normalization',
          'User authentication and session management',
          'Data migration and seeding strategies',
        ],
      },
      {
        name: 'Node.js / Express',
        level: 'Intermediate',
        focus: 'Supporting',
        summary:
          'Full-stack JavaScript development for e-commerce platforms. Team collaboration on REST API development.',
        lastUsed: '2025',
      },
      {
        name: 'API Integration',
        level: 'Intermediate',
        focus: 'Supporting',
        summary:
          'Third-party API consumption and integration. NASA API, payment systems, external service connections.',
        lastUsed: 'Current',
        highlights: [
          'RESTful API consumption with error handling',
          'Real-time data synchronization between services',
          'API client architecture for mobile and web applications',
        ],
      },
    ],
    tools: [
      'Laravel',
      'PHP 8.3',
      'PostgreSQL',
      'MySQL',
      'Node.js',
      'Express',
      'REST APIs',
      'Database Design',
      'API Testing',
    ],
    proofPoints: [
      'Built multi-tenant API with 120+ endpoints using Laravel',
      'Built multi-tenant user authentication and inventory management systems',
      'Integrated external APIs like NASA data services for project features',
      'Worked on full-stack applications connecting frontend and backend',
      'Followed RESTful API standards in team development projects',
    ],
  },
  {
    slug: 'development-tools',
    label: 'Development & Tools',
    tagline: 'Development tools and deployment workflows',
    narrative:
      'I leverage modern development workflows including Git collaboration and automated deployment to deliver production-ready applications.',
    stack: [
      {
        name: 'Git & Version Control',
        level: 'Intermediate',
        focus: 'Primary',
        summary:
          'Team collaboration workflows, branching strategies, code reviews, and repository management.',
        lastUsed: 'Current',
        highlights: [
          'Collaborative development with multiple team members',
          'Feature branch workflows and pull request reviews',
          'Repository organization and documentation',
        ],
      },
      {
        name: 'Firebase & Hosting',
        level: 'Intermediate',
        focus: 'Supporting',
        summary: 'Application deployment and hosting for academic projects.',
        lastUsed: '2025',
      },
      {
        name: 'Database Management',
        level: 'Intermediate',
        focus: 'Supporting',
        summary:
          'Relational database architecture, schema design, and data modeling with MySQL and PostgreSQL.',
        lastUsed: 'Current',
      },
    ],
    tools: ['Git', 'GitHub', 'Firebase', 'Vercel', 'Google Cloud', 'MySQL', 'PostgreSQL'],
    proofPoints: [
      'Managed collaborative development across multiple team-based academic projects',
      'Deployed projects to Firebase hosting and Vercel for live demonstrations',
      'Architected user management and inventory tracking systems',
    ],
  },
  {
    slug: 'leadership-delivery',
    label: 'Technical Leadership & Delivery',
    tagline: 'Team collaboration and project coordination',
    narrative:
      'I collaborate effectively in team environments and coordinate academic projects. I contribute to shared goals while learning from team members in collaborative settings.',
    stack: [
      {
        name: 'Project Leadership',
        level: 'Intermediate',
        focus: 'Primary',
        summary:
          'Coordinated development teams on academic projects. Experience working with teammates to deliver complete applications.',
        lastUsed: 'Current',
        highlights: [
          'Successfully led 3-person team on full-stack educational platform',
          'Coordinated 4-person development team on e-commerce project',
          'Drove technical decisions and architecture choices',
          'Managed project timelines and deliverable milestones',
        ],
      },
      {
        name: 'Mentoring & Collaboration',
        level: 'Advanced',
        focus: 'Primary',
        summary:
          'Code reviews and knowledge sharing with teammates. Helped establish Git workflows for team projects.',
        lastUsed: 'Current',
      },
      {
        name: 'Product Delivery',
        level: 'Advanced',
        focus: 'Supporting',
        summary:
          'Full project lifecycle experience from planning to deployment. Learning agile development practices.',
        lastUsed: 'Current',
      },
    ],
    tools: ['Git', 'GitHub', 'Project Management', 'Code Review', 'Documentation'],
    proofPoints: [
      'Successfully delivered 5 academic projects meeting all requirements and deadlines',
      'Led development teams of 3-4 members with strong collaboration and results',
      'Established Git workflows and code review practices adopted by project teams',
      'Collaborated effectively with teammates, sharing knowledge and best practices',
      'Built applications designed for real-world usage and deployment',
    ],
  },
];

export default skillCategories;
