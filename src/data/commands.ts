import type { MenuOption } from '@/types';

// Menu options displayed in the terminal menu
export const menuOptions: MenuOption[] = [
  // User information commands
  { command: 'whoami', description: 'Display user information' },
  { command: 'skills', description: 'Show technical skills' },
  { command: 'projects', description: 'Browse featured projects' },
  { command: 'contact', description: 'Get contact information' },
  { command: 'hire', description: 'Why you should hire me' },
  { command: 'resume', description: 'Download my resume' },

  // Fun commands
  { command: 'cowsay', description: 'Motivational cow message' },
  { command: 'fortune', description: 'Get a fortune cookie' },

  // System commands
  { command: 'exit', description: 'Exit terminal' },
  { command: 'clear', description: 'Clear terminal' },
];

// Command definitions with their outputs
export const commands: Record<string, { output: string[] | string }> = {
  // System commands
  help: {
    output: 'SHOW_MENU',
  },
  menu: {
    output: 'SHOW_MENU',
  },
  clear: {
    output: 'CLEAR_TERMINAL',
  },
  exit: {
    output: 'SHUTDOWN_SEQUENCE',
  },
  hack: {
    output: 'RESTART_SEQUENCE',
  },

  // Profile information commands
  whoami: {
    output: [
      'AMINE_ABBOUTI or you can call me AMINE [without the "e" for Flemish people]',
      'Full stack developer',
      'Specializing in: software development using React, React Native, Node.js, Laravel.',
      'Currently expanding backend skills with FastAPI to broaden my toolkit.',
      'Languages: Dutch, English, French, Amazigh and Arabic',
      'Status: Available for work',
      'Location: Belgium & Netherlands',
      '',
    ],
  },
  skills: {
    output: 'SHOW_SKILLS',
  },
  projects: {
    output: 'SHOW_PROJECTS',
  },
  contact: {
    output: [
      'Contact Information:',
      'Email: amine.abbouti@hotmail.com',
      'LinkedIn: linkedin.com/in/amine-abbouti',
      'GitHub: github.com/amnabbouti',
      'X: @amine__abbouti',
      '',
      'Feel free to reach out!',
      '',
    ],
  },
  hire: {
    output: [
      'Why hire me?',
      '• I write clean, maintainable code',
      '• I approach complex problems with practical solutions',
      '• I stay current with technology trends and best practices',
      '• I work well in teams and communicate effectively',
      '• I deliver projects on time and within budget',
      '',
      'Ready to contribute to your team.',
      '',
    ],
  },
  resume: {
    output: 'DOWNLOAD_PROGRESS',
  },

  // Fun commands
  cowsay: {
    output: [
      '_____________________________________',
      '--< Hire me, I write clean code ! >--',
      '*************************************',
      '********\\** ^__^ ********************',
      '*********\\**(oo)\\______ *************',
      '************(__)\\________)\\/\\********',
      '****************||----w||************',
      '****************||*****||************',
      '*************************************',
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

  // Unix-like commands (easter eggs)
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
      '-rw-r--r-- 1 amine amine  512 Dec 2024 contact.txt',
      '-rw-r--r-- 1 amine amine  256 Dec 2024 hire-me.txt',
      '-rw-r--r-- 1 amine amine 8192 Dec 2024 resume.pdf',
      '',
    ],
  },
  cat: {
    output: ['Usage: cat <filename>', 'Available files: skills.txt, projects.txt, contact.txt', ''],
  },
};
