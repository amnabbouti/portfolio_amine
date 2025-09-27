import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'missions-control-api',
    title: 'Missions Control - Inventory Management API',
    role: 'Lead Backend Developer',
    timeframe: '2025',
    summary:
      'End-of-studies capstone project: Laravel 11 REST API for multi-tenant inventory management with security features, barcode integration, and system monitoring. Built to demonstrate backend development skills.',
    context:
      'Academic capstone project simulating real-world inventory management challenges for multi-tenant logistics operations. The project involved building a modern API to replace fragmented legacy systems, demonstrating backend development practices.',
    challenge: [
      'Design a multi-tenant architecture that could handle inventory coordination and field operations with proper data isolation and security.',
      'Implement security features including tenant isolation, license-based entitlements, and auditable third-party integrations.',
      'Build offline-first workflows with barcode/label printing integration and conflict resolution mechanisms.',
    ],
    solution: [
      'Built secure multi-tenant architecture with role-based access control, user permissions, and PostgreSQL row-level security to ensure proper data isolation between organizations.',
      'Developed comprehensive REST API with 120+ endpoints covering inventory items, check-ins/outs, maintenance, and asset history, with real-time websocket feeds for live updates.',
      'Implemented API security with authentication tokens, IP restrictions, rate limiting, and webhook integration for external system communication.',
      'Added barcode and label printing functionality with support for different printer protocols, plus configurable templates and feature toggles for operational flexibility.',
    ],
    stack: [
      'Laravel 11 (PHP 8.3)',
      'PostgreSQL 15 (Row-Level Security)',
      'Docker Compose',
      'Laravel Queues (database / Redis / SQS ready)',
      'Socket.IO / Websockets',
      'ZPL Printing (IPP/TCP)',
    ],
  },
  {
    slug: 'super-dashboard',
    title: 'Admin Dashboard - Mission Control Interface',
    role: 'Frontend Engineer',
    timeframe: '2025',
    summary:
      'Administrative dashboard for the Missions Control Inventory API featuring real-time monitoring, API management, and integrated security operations - companion frontend for end-of-studies capstone project.',
    context:
      'Academic project to build a comprehensive administrative interface for the Missions Control Inventory API. The project required demonstrating frontend development skills while creating a dashboard for API ecosystem management.',
    challenge: [
      'Design a centralized admin interface to manage multiple API aspects: gateway monitoring, inventory tracking, client management, and user administration.',
      'Implement real-time monitoring capabilities with threat detection, security dashboards, and direct system command execution through an integrated terminal.',
      'Build data visualization features, Excel export functionality, and maintain security standards throughout the interface.',
    ],
    solution: [
      'Developed Admin Dashboard using Next.js 15 and React 19 with a clean interface featuring a sidebar with auto-hide functionality and real-time system status.',
      'Integrated xterm.js terminal component with custom commands and direct API interaction, providing administrators with system management capabilities.',
      'Built modular architecture with dedicated sections: Command Center (monitoring), API Gateway (metrics), Inventory Matrix (stock management with Excel export), Client Hub, User Hub, and Analytics dashboard.',
      'Created API integration with caching, token authentication, and real-time monitoring with color-coded status displays.',
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
    preview: {
      images: [
        {
          src: '/images/dashboard.png',
          alt: 'Admin Dashboard - Command Center with real-time monitoring and integrated terminal',
        },
        {
          src: '/images/dashboard_2.png',
          alt: 'Admin Dashboard - API Gateway management and security monitoring',
        },
        {
          src: '/images/dashboard_3.png',
          alt: 'Admin Dashboard - Inventory Matrix with stock management and tracking',
        },
        {
          src: '/images/dashboard_4.png',
          alt: 'Admin Dashboard - User management and access control interface',
        },
      ],
    },
  },
  {
    slug: 'missions-control-mobile',
    title: 'Missions Control - Cross-Platform Mobile App',
    role: 'Mobile Developer',
    timeframe: '2025',
    summary:
      'React Native Expo application for the Missions Control inventory system, providing cross-platform field operations with barcode scanning, real-time inventory tracking, and offline-first functionality. Mobile companion to the Laravel API backend.',
    context:
      'Academic project to build a mobile interface for field workers using the Missions Control API. The app needed to work seamlessly across iOS, Android, and web platforms while providing essential inventory management features for on-site operations.',
    challenge: [
      'Design cross-platform mobile interface that works consistently on iOS, Android, and web while maintaining native performance and user experience.',
      'Implement barcode scanning functionality with camera integration for quick item identification and inventory operations in field environments.',
      'Build offline-first architecture with data synchronization to ensure field workers can operate without reliable internet connectivity.',
    ],
    solution: [
      'Developed React Native Expo application with shared monorepo architecture, utilizing TypeScript and modern React patterns for consistent cross-platform development.',
      'Integrated expo-barcode-scanner and expo-camera for native barcode/QR code scanning with real-time item lookup and inventory management features.',
      'Implemented Zustand state management with API client abstraction connecting to the Laravel backend, ensuring seamless data flow between mobile and server.',
      'Created responsive UI components using React Native Paper and custom design system, with navigation via Expo Router for smooth user experience across platforms.',
    ],
    stack: [
      'React Native',
      'Expo SDK 54',
      'TypeScript',
      'React 19',
      'Zustand',
      'Expo Router',
      'React Native Paper',
      'Expo Camera',
      'Expo Barcode Scanner',
      'AsyncStorage',
    ],
    preview: {
      images: [
        {
          src: '/images/mobile.png',
          alt: 'Missions Control Mobile App - Home Screen',
        },
        {
          src: '/images/mobile2.png',
          alt: 'Missions Control Mobile App - Inventory List',
        },
        {
          src: '/images/mobile3.png',
          alt: 'Missions Control Mobile App - Barcode Scanner',
        },
        {
          src: '/images/mobile4.png',
          alt: 'Missions Control Mobile App - Item Details',
        },
        {
          src: '/images/mobile5.png',
          alt: 'Missions Control Mobile App - Stock Management',
        },
        {
          src: '/images/mobile6.png',
          alt: 'Missions Control Mobile App - Settings',
        },
        {
          src: '/images/mobile7.png',
          alt: 'Missions Control Mobile App - Search Function',
        },
        {
          src: '/images/mobile8.png',
          alt: 'Missions Control Mobile App - User Profile',
        },
      ],
    },
  },
  {
    slug: 'poke-markt-webshop',
    title: 'Poke Markt - E-Commerce Webshop',
    role: 'Frontend Developer',
    timeframe: '2025',
    summary:
      'Team project building a modern e-commerce webshop with React frontend and Node.js backend, developed in collaboration with 3 other students to demonstrate teamwork and full-stack development skills.',
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
          src: '/images/pke_markt.png',
          alt: 'Poke Markt - Homepage with product showcase and navigation',
        },
        {
          src: '/images/poke_markt2.png',
          alt: 'Poke Markt - Product catalog and filtering system',
        },
        {
          src: '/images/poke_markt3.png',
          alt: 'Poke Markt - Product detail page and cart functionality',
        },
        {
          src: '/images/poke_markt4.png',
          alt: 'Poke Markt - Shopping cart and checkout process',
        },
      ],
    },
  },
  {
    slug: 'planets-explorer',
    title: 'Planets Explorer - 3D Exoplanet Database',
    role: 'Lead Developer',
    timeframe: '2024',
    summary:
      'First academic project: Interactive exoplanet exploration website with 3D planet models, NASA API integration, and comprehensive user management system. Led a team of 3 students in building a full-stack web application.',
    context:
      'Initial group project undertaken as lead developer with 2 other students. The goal was to create an engaging educational platform for exploring exoplanets and space science, demonstrating both technical skills and team leadership capabilities.',
    challenge: [
      'Lead and coordinate development across a 3-person team as the primary developer while learning collaborative coding practices.',
      'Implement interactive 3D planet visualization using modern web technologies to make space science accessible and engaging.',
      'Build a complete full-stack application with user authentication, data persistence, and external API integration from scratch.',
    ],
    solution: [
      'Developed a comprehensive planets catalog using PHP/MySQL with user authentication, admin panel, and interactive features like planet liking and filtering.',
      "Implemented 3D planet models using Google's model-viewer web component with auto-rotation and camera controls for immersive exploration.",
      'Integrated NASA API for featured space content and built responsive frontend with Vite build system and custom CSS styling.',
      'Created user management system with registration, login, profiles, and admin controls for managing both users and planet data.',
    ],
    stack: [
      'PHP',
      'MySQL',
      'Vite',
      'Vanilla JavaScript',
      'CSS3',
      'Google Model Viewer',
      'NASA API',
      'PDO',
    ],
    links: [
      {
        label: 'Project Repository',
        url: 'https://github.com/amnabbouti/Group_HAK',
      },
    ],
    preview: {
      images: [
        {
          src: '/images/millers_world.png',
          alt: 'Planets Explorer - Main dashboard with 3D planet models and catalog',
        },
        {
          src: '/images/millers_world2.png',
          alt: 'Planets Explorer - Detailed planet view with interactive 3D model',
        },
        {
          src: '/images/millers_world3.png',
          alt: 'Planets Explorer - Detailed planet view with interactive 3D model',
        },
        {
          src: '/images/millers_world4.png',
          alt: 'Planets Explorer - Detailed planet view with interactive 3D model',
        },
      ],
    },
  },
];

export default caseStudies;
