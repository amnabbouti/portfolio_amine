import type {Command} from '@/types';
import type {CommandHandlers} from '@/types/terminalTypes';
import {commands} from '@/data';

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
  setShowDownloadConfirmation: React.Dispatch<React.SetStateAction<boolean>>,
  setIsHackingSequence: React.Dispatch<React.SetStateAction<boolean>>,
  setHackingLines: React.Dispatch<React.SetStateAction<string[]>>,
  setShowShutdownSequence: React.Dispatch<React.SetStateAction<boolean>>,
  scrollToBottom: () => void
): CommandHandlers {
  /**
   * Handle special commands like resume, hack, clear
   */
  const handleSpecialCommand = (cmd: string, trimmedCmd: string): boolean => {
    if (trimmedCmd === 'resume') {
      setCommandHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: 'Preparing resume download...',
          isError: false,
        },
      ]);
      setShowDownloadConfirmation(true);
      return true;
    }

    if (trimmedCmd === 'hack') {
      setIsHackingSequence(true);
      setHackingLines([]);
      setCommandHistory([]);
      return true;
    }

    if (trimmedCmd === 'clear') {
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
      setTimeout(scrollToBottom, 50);
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
      setTimeout(scrollToBottom, 50);
      return true;
    }

    if (command.output === 'DOWNLOAD_PROGRESS') {
      setCommandHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: 'Preparing resume download...',
          isError: false,
        },
      ]);
      setShowDownloadConfirmation(true);
      return true;
    }

    if (command.output === 'SHOW_MENU') {
      setShowCommandMenu(true);
      setSelectedMenuIndex(0);
      setTimeout(scrollToBottom, 50);
      return true;
    }

    if (command.output === 'SHUTDOWN_SEQUENCE') {
      setCommandHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: [],
          isError: false,
        },
      ]);
      setShowShutdownSequence(true);
      return true;
    }

    return false;
  };

  /**
   * Main command handler
   */
  const handleCommand = (cmd: string, clearMenuEntries: boolean = false) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === '') return;

    // Reset UI state
    setShowCommandMenu(false);
    setShowMenuPrompt(false);

    if (clearMenuEntries) {
      setCommandHistory((prev) => prev.filter((cmd) => !cmd.showMenu));
    }

    // Handle special commands first
    if (handleSpecialCommand(cmd, trimmedCmd)) {
      return;
    }

    const command = commands[trimmedCmd];

    if (command) {
      // Handle system commands with special output values
      if (handleSystemCommand(cmd, command)) {
        return;
      }

      // Handle regular commands with text output
      setCommandHistory((prev) => [
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
      setCommandHistory((prev) => [
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
    if (showMenuPrompt) {
      setShowMenuPrompt(false);
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
      setCommandHistory((prev) => prev.filter((cmd) => !cmd.showMenu));
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
        setCurrentInput(
          commandHistory[commandHistory.length - 1 - newIndex].command,
        );
      }
    } else if (direction === 'down') {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(
          commandHistory[commandHistory.length - 1 - newIndex].command,
        );
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
  };
}