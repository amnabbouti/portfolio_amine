import type {
  Command,
  ProjectListItem,
  CaseStudy,
  SkillCategory,
  SkillCategorySummary,
} from '@/types';
import type { CommandHandlers } from '@/types/terminalTypes';
import { commands, menuOptions, caseStudies, skillCategories } from '@/data';

const availableCommands = Array.from(
  new Set([
    ...menuOptions.map(option => option.command.toLowerCase()),
    ...Object.keys(commands).map(key => key.toLowerCase()),
  ]),
);

const projectSummaries: ProjectListItem[] = caseStudies.map(study => ({
  slug: study.slug,
  title: study.title,
  summary: study.summary,
}));

const skillSummaries: SkillCategorySummary[] = skillCategories.map(category => ({
  slug: category.slug,
  label: category.label,
  teaser: category.tagline,
  primaryTools: category.stack.slice(0, 3).map(item => item.name),
}));

/**
 * Hook for handling terminal commands
 * Manages command execution, special commands, and command history navigation
 */
export function useTerminalCommands(
  currentInput: string,
  setCurrentInput: (value: string) => void,
  commandHistory: Command[],
  setCommandHistory: React.Dispatch<React.SetStateAction<Command[]>>,
  historyIndex: number,
  setHistoryIndex: React.Dispatch<React.SetStateAction<number>>,
  showMenuPrompt: boolean,
  setShowMenuPrompt: React.Dispatch<React.SetStateAction<boolean>>,
  showCommandMenu: boolean,
  setShowCommandMenu: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedMenuIndex: React.Dispatch<React.SetStateAction<number>>,
  setMenuFilter: React.Dispatch<React.SetStateAction<string>>,
  setActiveCaseStudy: React.Dispatch<React.SetStateAction<CaseStudy | null>>,
  setActiveSkillCategory: React.Dispatch<React.SetStateAction<SkillCategory | null>>,
  setShowDownloadConfirmation: React.Dispatch<React.SetStateAction<boolean>>,
  setIsHackingSequence: React.Dispatch<React.SetStateAction<boolean>>,
  setHackingLines: React.Dispatch<React.SetStateAction<string[]>>,
  setShowShutdownSequence: React.Dispatch<React.SetStateAction<boolean>>,
  scrollToBottom: () => void,
): CommandHandlers {
  /**
   * Handle special commands like resume, hack, clear
   */
  const handleSpecialCommand = (cmd: string, baseCommand: string, args: string[]): boolean => {
    if (baseCommand === 'resume' && args.length === 0) {
      setCommandHistory(prev => [
        ...prev,
        {
          command: cmd,
          output: 'Preparing resume download...',
          isError: false,
        },
      ]);
      setShowDownloadConfirmation(true);
      setActiveCaseStudy(null);
      setActiveSkillCategory(null);
      return true;
    }

    if (baseCommand === 'hack' && args.length === 0) {
      setIsHackingSequence(true);
      setHackingLines([]);
      setCommandHistory([]);
      setActiveCaseStudy(null);
      setActiveSkillCategory(null);
      return true;
    }

    if (baseCommand === 'clear' && args.length === 0) {
      setCommandHistory([
        {
          command: '',
          output: [],
          isError: false,
          showMenu: true,
        },
      ]);
      setShowCommandMenu(true);
      setSelectedMenuIndex(0);
      setMenuFilter('');
      setActiveCaseStudy(null);
      setActiveSkillCategory(null);
      setTimeout(scrollToBottom, 50);
      return true;
    }

    if (baseCommand === 'case-study') {
      const slug = args.join(' ');

      if (slug === '') {
        const summaryLines = caseStudies.flatMap(study => [`  - ${study.slug} — ${study.summary}`]);

        setActiveSkillCategory(null);
        setCommandHistory(prev => [
          ...prev,
          {
            command: cmd,
            output: [
              'Available case studies:',
              ...summaryLines,
              '',
              'Usage: case-study <slug>',
              '',
            ],
            isError: false,
          },
        ]);

        setTimeout(() => {
          setShowMenuPrompt(true);
        }, 100);
        setTimeout(scrollToBottom, 100);
        return true;
      }

      const match = caseStudies.find(study => study.slug.toLowerCase() === slug.toLowerCase());

      if (!match) {
        setActiveSkillCategory(null);
        setCommandHistory(prev => [
          ...prev,
          {
            command: cmd,
            output: [
              `No case study found for "${slug}".`,
              'Available slugs:',
              ...caseStudies.map(study => `  - ${study.slug}`),
              '',
            ],
            isError: true,
          },
        ]);

        setTimeout(() => {
          setShowMenuPrompt(true);
        }, 100);
        setTimeout(scrollToBottom, 100);
        return true;
      }

      const headerLineParts = [match.title];
      if (match.timeframe) {
        headerLineParts.push(`(${match.timeframe})`);
      }
      headerLineParts.push(`— ${match.role}`);

      setActiveSkillCategory(null);
      const outputLines = [
        headerLineParts.join(' '),
        '',
        `Context: ${match.context}`,
        '',
        'Challenge:',
        ...match.challenge.map(item => `  • ${item}`),
        '',
        'Solution:',
        ...match.solution.map(item => `  • ${item}`),
        '',
        'Impact:',
        ...match.impact.map(item => `  • ${item}`),
        '',
        `Stack: ${match.stack.join(', ')}`,
      ];

      if (match.links && match.links.length > 0) {
        outputLines.push('');
        outputLines.push('Artifacts:');
        outputLines.push(...match.links.map(link => `  • ${link.label}: ${link.url}`));
      }

      outputLines.push('');

      setCommandHistory(prev => [
        ...prev,
        {
          command: cmd,
          output: outputLines,
          isError: false,
        },
      ]);

      setTimeout(() => {
        setShowMenuPrompt(true);
      }, 100);
      setTimeout(scrollToBottom, 100);

      return true;
    }

    if (baseCommand === 'projects') {
      if (args.length === 0) {
        setActiveCaseStudy(null);
        setActiveSkillCategory(null);
        setCommandHistory(prev => [
          ...prev,
          {
            command: cmd,
            output: ['Projects directory', ''],
            isError: false,
            projectList: projectSummaries,
          },
        ]);

        setTimeout(() => {
          setShowMenuPrompt(true);
        }, 100);
        setTimeout(scrollToBottom, 100);
        return true;
      }

      const slug = args.join(' ');
      const match = caseStudies.find(study => study.slug.toLowerCase() === slug.toLowerCase());

      if (!match) {
        setActiveSkillCategory(null);
        setCommandHistory(prev => [
          ...prev,
          {
            command: cmd,
            output: [
              `No project found for "${slug}".`,
              'Available slugs:',
              ...caseStudies.map(study => `  - ${study.slug}`),
              '',
            ],
            isError: true,
          },
        ]);

        setTimeout(() => {
          setShowMenuPrompt(true);
        }, 100);
        setTimeout(scrollToBottom, 100);
        return true;
      }

      setActiveCaseStudy(match);
      setActiveSkillCategory(null);
      setCommandHistory(prev => [
        ...prev,
        {
          command: cmd,
          output: [],
          isError: false,
        },
      ]);

      setTimeout(() => {
        setShowMenuPrompt(true);
      }, 100);
      setTimeout(scrollToBottom, 100);
      return true;
    }

    if (baseCommand === 'skills') {
      if (args.length === 0) {
        setActiveCaseStudy(null);
        setActiveSkillCategory(null);
        setCommandHistory(prev => [
          ...prev,
          {
            command: cmd,
            output: ['Skills manifest', ''],
            isError: false,
            skillList: skillSummaries,
          },
        ]);

        setTimeout(() => {
          setShowMenuPrompt(true);
        }, 100);
        setTimeout(scrollToBottom, 100);
        return true;
      }

      const slug = args.join(' ');
      const match = skillCategories.find(
        category => category.slug.toLowerCase() === slug.toLowerCase(),
      );

      if (!match) {
        setActiveSkillCategory(null);
        setActiveCaseStudy(null);
        setCommandHistory(prev => [
          ...prev,
          {
            command: cmd,
            output: [
              `No skill dossier found for "${slug}".`,
              'Available dossiers:',
              ...skillSummaries.map(category => `  - ${category.slug}`),
              '',
            ],
            isError: true,
          },
        ]);

        setTimeout(() => {
          setShowMenuPrompt(true);
        }, 100);
        setTimeout(scrollToBottom, 100);
        return true;
      }

      setActiveCaseStudy(null);
      setActiveSkillCategory(match);
      setCommandHistory(prev => [
        ...prev,
        {
          command: cmd,
          output: [],
          isError: false,
        },
      ]);

      setTimeout(() => {
        setShowMenuPrompt(true);
      }, 100);
      setTimeout(scrollToBottom, 100);
      return true;
    }

    return false;
  };

  /**
   * Handle system commands with special output values
   */
  const handleSystemCommand = (cmd: string, command: { output: string[] | string }): boolean => {
    if (command.output === 'RESTART_SEQUENCE') {
      setIsHackingSequence(true);
      setHackingLines([]);
      setCommandHistory([]);
      setMenuFilter('');
      setActiveCaseStudy(null);
      setActiveSkillCategory(null);
      return true;
    }

    if (command.output === 'CLEAR_TERMINAL') {
      setCommandHistory([
        {
          command: '',
          output: [],
          isError: false,
          showMenu: true,
        },
      ]);
      setShowCommandMenu(true);
      setSelectedMenuIndex(0);
      setMenuFilter('');
      setActiveCaseStudy(null);
      setActiveSkillCategory(null);
      setTimeout(scrollToBottom, 50);
      return true;
    }

    if (command.output === 'DOWNLOAD_PROGRESS') {
      setCommandHistory(prev => [
        ...prev,
        {
          command: cmd,
          output: 'Preparing resume download...',
          isError: false,
        },
      ]);
      setShowDownloadConfirmation(true);
      setActiveCaseStudy(null);
      setActiveSkillCategory(null);
      return true;
    }

    if (command.output === 'SHOW_MENU') {
      setShowCommandMenu(true);
      setSelectedMenuIndex(0);
      setMenuFilter('');
      setActiveCaseStudy(null);
      setActiveSkillCategory(null);
      setTimeout(scrollToBottom, 50);
      return true;
    }

    if (command.output === 'SHUTDOWN_SEQUENCE') {
      setCommandHistory(prev => [
        ...prev,
        {
          command: cmd,
          output: [],
          isError: false,
        },
      ]);
      setShowShutdownSequence(true);
      setActiveCaseStudy(null);
      setActiveSkillCategory(null);
      return true;
    }

    return false;
  };

  /**
   * Main command handler
   */
  const handleCommand = (cmd: string, clearMenuEntries: boolean = false) => {
    const normalizedCommand = cmd.trim();
    if (normalizedCommand === '') return;

    const lowerCaseCommand = normalizedCommand.toLowerCase();
    const [baseCommand, ...args] = lowerCaseCommand.split(/\s+/);

    // Reset UI state
    setShowCommandMenu(false);
    setShowMenuPrompt(false);
    setMenuFilter('');
    setActiveCaseStudy(null);
    setActiveSkillCategory(null);

    if (clearMenuEntries) {
      setCommandHistory(prev => prev.filter(cmd => !cmd.showMenu));
    }

    // Handle special commands first
    if (handleSpecialCommand(cmd, baseCommand, args)) {
      return;
    }

    const command = commands[lowerCaseCommand];

    if (command) {
      // Handle system commands with special output values
      if (handleSystemCommand(cmd, command)) {
        return;
      }

      // Handle regular commands with text output
      setCommandHistory(prev => [
        ...prev,
        {
          command: cmd,
          output: command.output,
          isError: false,
        },
      ]);

      setTimeout(() => {
        setShowMenuPrompt(true);
      }, 100);
    } else {
      // Handle command not found
      setCommandHistory(prev => [
        ...prev,
        {
          command: cmd,
          output: `Command not found: ${cmd}. Type "help" for available commands.`,
          isError: true,
        },
      ]);

      setTimeout(() => {
        setShowMenuPrompt(true);
      }, 100);
    }

    setTimeout(scrollToBottom, 100);
  };

  /**
   * Handle input changes
   */
  const handleInputChange = (value: string) => {
    setCurrentInput(value);
    if (showCommandMenu) {
      setShowCommandMenu(false);
    }
    const trimmedValue = value.trim();

    if (trimmedValue === '') {
      setMenuFilter('');
      setShowMenuPrompt(true);
    } else if (showMenuPrompt) {
      setShowMenuPrompt(false);
    }
  };

  /**
   * Handle tab key press for command autocompletion
   */
  const handleAutocomplete = () => {
    const normalizedInput = currentInput.trim().toLowerCase();

    if (normalizedInput === '') {
      setShowMenuPrompt(false);
      setMenuFilter('');
      setShowCommandMenu(true);
      setSelectedMenuIndex(0);
      setTimeout(scrollToBottom, 50);
      return;
    }

    const matches = availableCommands.filter(command => command.startsWith(normalizedInput));

    if (matches.length === 0) {
      setShowCommandMenu(false);
      setMenuFilter('');
      return;
    }

    let suggestion = normalizedInput;

    if (matches.length === 1) {
      suggestion = matches[0];
    } else {
      const commonPrefix = matches.reduce((prefix, command) => {
        let index = 0;
        while (
          index < prefix.length &&
          index < command.length &&
          prefix[index] === command[index]
        ) {
          index += 1;
        }
        return prefix.slice(0, index);
      }, matches[0]);

      if (commonPrefix.length > normalizedInput.length) {
        suggestion = commonPrefix;
      }
    }

    setCurrentInput(suggestion);
    setShowMenuPrompt(false);

    const hasMenuMatches = menuOptions.some(option =>
      option.command.toLowerCase().startsWith(suggestion),
    );

    if (hasMenuMatches) {
      setMenuFilter(suggestion);
      setShowCommandMenu(true);
      setSelectedMenuIndex(0);
      setTimeout(scrollToBottom, 50);
    } else {
      setMenuFilter('');
      setShowCommandMenu(false);
    }
  };

  /**
   * Handle enter key press
   */
  const handleEnterCommand = () => {
    if (showMenuPrompt && currentInput.trim() === '') {
      setShowMenuPrompt(false);
      setShowCommandMenu(true);
      setSelectedMenuIndex(0);
      setMenuFilter('');
      setCommandHistory(prev => prev.filter(cmd => !cmd.showMenu));
      setTimeout(scrollToBottom, 50);
      return;
    }

    if (currentInput.trim() !== '') {
      handleCommand(currentInput, false);
      setCurrentInput('');
      setHistoryIndex(-1);
    }
  };

  /**
   * Handle up/down arrow keys for command history navigation
   */
  const handleHistoryNavigation = (direction: 'up' | 'down') => {
    if (direction === 'up' && commandHistory.length > 0) {
      const newIndex = historyIndex + 1;
      if (newIndex < commandHistory.length) {
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex].command);
      }
    } else if (direction === 'down') {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex].command);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  return {
    handleCommand,
    handleInputChange,
    handleEnterCommand,
    handleHistoryNavigation,
    handleAutocomplete,
  };
}
