export interface Command {
  command: string;
  output: string[] | string;
  isError?: boolean;
  showMenu?: boolean;
}

export interface MenuOption {
  command: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  role: string;
  timeframe?: string;
  summary: string;
  context: string;
  challenge: string[];
  solution: string[];
  impact: string[];
  stack: string[];
  links?: Array<{ label: string; url: string }>;
}
