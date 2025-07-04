import type {MenuOption} from '@/types';

export const menuOptions: MenuOption[] = [
    {command: 'whoami', description: 'Display user information'},
    {command: 'skills', description: 'Show technical skills'},
    {command: 'projects', description: 'List my projects'},
    {command: 'experience', description: 'Show work experience'},
    {command: 'contact', description: 'Get contact information'},
    {command: 'hire', description: 'Why you should hire me'},
    {command: 'resume', description: 'Download my resume'},
    {command: 'cowsay', description: 'Motivational cow message'},
    {command: 'fortune', description: 'Get a fortune cookie'},
    {command: 'exit', description: 'Exit terminal'},
    {command: 'clear', description: 'Clear terminal'},
];

export const commands: Record<string, { output: string[] | string }> = {
    help: {
        output: 'SHOW_MENU',
    },
    menu: {
        output: 'SHOW_MENU',
    },
    whoami: {
        output: [
            'AMINE_ABBOUTI',
            'Full Stack Developer',
            'Location: Earth, UTC+1',
            'Status: Available for work',
            'Specializing in: Digital solutions that actually work',
            '',
        ],
    },
    skills: {
        output: [
            'Technical Skills:',
            '├── Frontend: React, TypeScript, Next.js, Tailwind CSS',
            '├── Backend: Node.js, Python, PHP, Express',
            '├── Database: PostgreSQL, MongoDB, Redis',
            '├── Cloud: AWS, Docker, Kubernetes',
            '├── Tools: Git, Linux, VS Code, Figma',
            '└── Other: REST APIs, GraphQL, WebSockets',
            '',
        ],
    },
    projects: {
        output: [
            'Recent Projects:',
            '1. [E-Commerce Platform] - Full-stack React/Node.js',
            '2. [Task Management App] - CRUD operations with auth',
            "3. [Portfolio Website] - The one you're using right now!",
            '4. [API Gateway] - Microservices architecture',
            '5. [Chat Application] - Real-time messaging with WebSockets',
            '',
            'Visit my GitHub for more: github.com/amine-abbouti',
            '',
        ],
    },
    experience: {
        output: [
            'Work Experience:',
            '2023-Present: Senior Full Stack Developer',
            '  ├── Built scalable web applications',
            '  ├── Led development team of 5 engineers',
            '  └── Improved system performance by 40%',
            '',
            '2021-2023: Full Stack Developer',
            '  ├── Developed RESTful APIs',
            '  ├── Implemented CI/CD pipelines',
            '  └── Mentored junior developers',
            '',
        ],
    },
    contact: {
        output: [
            'Contact Information:',
            'Email: amine.abbouti@example.com',
            'LinkedIn: linkedin.com/in/amine-abbouti',
            'GitHub: github.com/amine-abbouti',
            'Twitter: @amine_abbouti',
            '',
            'Feel free to reach out!',
            '',
        ],
    },
    resume: {
        output: 'DOWNLOAD_PROGRESS',
    },
    hire: {
        output: [
            'Why hire me?',
            '• I write clean, maintainable code',
            '• I solve complex problems with simple solutions',
            "• I'm passionate about technology and innovation",
            '• I work well in teams and communicate effectively',
            '• I stay updated with latest tech trends',
            '• I deliver projects on time and within budget',
            '',
            "Let's build something amazing together!",
            '',
        ],
    },
    hack: {
        output: 'RESTART_SEQUENCE',
    },
    clear: {
        output: 'CLEAR_TERMINAL',
    },
    exit: {
        output: 'SHUTDOWN_SEQUENCE',
    },
    cowsay: {
        output: [
            ' ___________________________________',
            '< Hire me, I write clean code! >',
            ' -----------------------------------',
            '        \\   ^__^',
            '         \\  (oo)\\_______',
            '            (__)\\       )\\/\\',
            '                ||----w |',
            '                ||     ||',
            '',
        ],
    },
    fortune: {
        output: [
            "Today's Fortune:",
            '"The best way to predict the future is to implement it."',
            '                                    - Anonymous Developer',
            '',
        ],
    },
    sudo: {
        output: [
            'sudo: command not found',
            'Nice try! But this is a portfolio, not a real terminal.',
            'Though I do have sudo access to your attention.',
            '',
        ],
    },
    'rm -rf': {
        output: [
            "rm: cannot remove '*': Operation not permitted",
            'Phew! Good thing this is just a portfolio.',
            "I promise I'm more careful with real systems.",
            '',
        ],
    },
    'ls -la': {
        output: [
            'total 42',
            'drwxr-xr-x 1 amine amine 4096 Dec 2024 portfolio-contents/',
            '-rw-r--r-- 1 amine amine 1337 Dec 2024 skills.txt',
            '-rw-r--r-- 1 amine amine 2048 Dec 2024 projects.txt',
            '-rw-r--r-- 1 amine amine 1024 Dec 2024 experience.txt',
            '-rw-r--r-- 1 amine amine  512 Dec 2024 contact.txt',
            '-rw-r--r-- 1 amine amine  256 Dec 2024 hire-me.txt',
            '-rw-r--r-- 1 amine amine 8192 Dec 2024 resume.pdf',
            '',
        ],
    },
    cat: {
        output: [
            'Usage: cat <filename>',
            'Available files: skills.txt, projects.txt, experience.txt, contact.txt',
            '',
        ],
    },
};
