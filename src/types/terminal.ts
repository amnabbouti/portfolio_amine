export interface ProjectListItem {
  slug: string;
  title: string;
  summary: string;
}

export interface Command {
  command: string;
  output: string[] | string;
  isError?: boolean;
  showMenu?: boolean;
  projectList?: ProjectListItem[];
  skillList?: SkillCategorySummary[];
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

export interface SkillItemResult {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  focus: 'Primary' | 'Supporting' | 'Emerging';
  summary: string;
  lastUsed: string;
  highlights?: string[];
}

export interface SkillCategory {
  slug: string;
  label: string;
  tagline: string;
  narrative: string;
  stack: SkillItemResult[];
  tools?: string[];
  proofPoints?: string[];
}

export interface SkillCategorySummary {
  slug: string;
  label: string;
  teaser: string;
  primaryTools: string[];
}
