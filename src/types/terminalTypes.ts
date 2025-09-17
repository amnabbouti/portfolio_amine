import type {Command} from './terminal';

// Terminal state types
export interface TerminalState {
  currentInput: string;
  commandHistory: Command[];
  historyIndex: number;
  showCursor: boolean;
}

// Terminal state setters
export interface TerminalStateSetters {
  setCurrentInput: (value: string) => void;
  setCommandHistory: React.Dispatch<React.SetStateAction<Command[]>>;
  setHistoryIndex: React.Dispatch<React.SetStateAction<number>>;
}

// Menu state types
export interface MenuState {
  showCommandMenu: boolean;
  selectedMenuIndex: number;
  showMenuPrompt: boolean;
}

// Menu state setters
export interface MenuStateSetters {
  setShowCommandMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedMenuIndex: React.Dispatch<React.SetStateAction<number>>;
  setShowMenuPrompt: React.Dispatch<React.SetStateAction<boolean>>;
}

// Animation state types
export interface AnimationState {
  isHackingSequence: boolean;
  hackingLines: string[];
  isHackingProgress: boolean;
  isDownloading: boolean;
  showDownloadConfirmation: boolean;
  showShutdownSequence: boolean;
}

// Animation state setters
export interface AnimationStateSetters {
  setIsHackingSequence: React.Dispatch<React.SetStateAction<boolean>>;
  setHackingLines: React.Dispatch<React.SetStateAction<string[]>>;
  setShowDownloadConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  setShowShutdownSequence: React.Dispatch<React.SetStateAction<boolean>>;
}

// Terminal command handlers
export interface CommandHandlers {
  handleCommand: (cmd: string, clearMenuEntries?: boolean) => void;
  handleInputChange: (value: string) => void;
  handleEnterCommand: () => void;
  handleHistoryNavigation: (direction: 'up' | 'down') => void;
  handleAutocomplete: () => void;
}

// Download handlers
export interface DownloadHandlers {
  handleDownloadConfirm: () => void;
  handleDownloadCancel: () => void;
  handleDownloadComplete: () => void;
}

// Animation handlers
export interface AnimationHandlers {
  handleHackingProgressComplete: (finalProgressLine: string) => void;
}

// UI utilities
export interface UIUtils {
  scrollToBottom: () => void;
  getLineColor: (line: string) => string;
}
