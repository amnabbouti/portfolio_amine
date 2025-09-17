import { useEffect } from 'react';
import { useTerminalState } from './useTerminalState';
import { useTerminalUI } from './useTerminalUI';
import { useTerminalAnimations } from './useTerminalAnimations';
import { useTerminalCommands } from './useTerminalCommands';
import type {
  TerminalState,
  TerminalStateSetters,
  MenuState,
  MenuStateSetters,
  AnimationState,
  AnimationStateSetters,
  CommandHandlers,
  DownloadHandlers,
  AnimationHandlers,
  UIUtils,
} from '@/types/terminalTypes';

/**
 * Main terminal hook that composes all terminal functionality
 * This hook maintains the same API as the original monolithic hook
 * but delegates responsibilities to smaller, more focused hooks
 */
export function useTerminal(): TerminalState &
  TerminalStateSetters &
  MenuState &
  MenuStateSetters &
  AnimationState &
  AnimationStateSetters &
  CommandHandlers &
  DownloadHandlers &
  AnimationHandlers &
  UIUtils & {
    terminalContentRef: React.RefObject<HTMLDivElement | null>;
  } {
  // Terminal state management
  const {
    currentInput,
    commandHistory,
    historyIndex,
    showCursor,
    setCurrentInput,
    setCommandHistory,
    setHistoryIndex,
  } = useTerminalState();

  // UI management
  const {
    showCommandMenu,
    selectedMenuIndex,
    showMenuPrompt,
    menuFilter,
    activeCaseStudy,
    activeSkillCategory,
    terminalContentRef,
    setShowCommandMenu,
    setSelectedMenuIndex,
    setShowMenuPrompt,
    setMenuFilter,
    setActiveCaseStudy,
    setActiveSkillCategory,
    scrollToBottom,
    getLineColor,
  } = useTerminalUI();

  // Animation management
  const {
    isHackingSequence,
    hackingLines,
    isHackingProgress,
    isDownloading,
    showDownloadConfirmation,
    showShutdownSequence,
    setIsHackingSequence,
    setHackingLines,
    setShowDownloadConfirmation,
    setShowShutdownSequence,
    startHackingSequence,
    handleHackingProgressComplete,
    handleDownloadConfirm,
    handleDownloadCancel,
    handleDownloadComplete,
  } = useTerminalAnimations(
    setCommandHistory,
    setShowMenuPrompt,
    setShowCommandMenu,
    scrollToBottom,
  );

  // Command handling
  const {
    handleCommand,
    handleInputChange,
    handleEnterCommand,
    handleHistoryNavigation,
    handleAutocomplete,
  } = useTerminalCommands(
    currentInput,
    setCurrentInput,
    commandHistory,
    setCommandHistory,
    historyIndex,
    setHistoryIndex,
    showMenuPrompt,
    setShowMenuPrompt,
    showCommandMenu,
    setShowCommandMenu,
    setSelectedMenuIndex,
    setMenuFilter,
    setActiveCaseStudy,
    setActiveSkillCategory,
    setShowDownloadConfirmation,
    setIsHackingSequence,
    setHackingLines,
    setShowShutdownSequence,
    scrollToBottom,
  );

  // Initialize hacking sequence on mount
  useEffect(() => {
    if (isHackingSequence) {
      startHackingSequence();
    }
  }, [isHackingSequence]);

  // Return the same interface as the original hook
  return {
    isHackingSequence,
    hackingLines,
    currentInput,
    commandHistory,
    historyIndex,
    showCursor,
    showCommandMenu,
    selectedMenuIndex,
    showMenuPrompt,
    menuFilter,
    activeCaseStudy,
    activeSkillCategory,
    terminalContentRef,
    isDownloading,
    isHackingProgress,
    showDownloadConfirmation,
    showShutdownSequence,
    setIsHackingSequence,
    setHackingLines,
    setShowDownloadConfirmation,
    setShowShutdownSequence,
    setShowCommandMenu,
    setSelectedMenuIndex,
    setShowMenuPrompt,
    setMenuFilter,
    setActiveCaseStudy,
    setActiveSkillCategory,
    setCurrentInput,
    setCommandHistory,
    setHistoryIndex,
    handleCommand,
    handleInputChange,
    handleEnterCommand,
    handleHistoryNavigation,
    handleAutocomplete,
    handleDownloadConfirm,
    handleDownloadCancel,
    handleDownloadComplete,
    handleHackingProgressComplete,
    scrollToBottom,
    getLineColor,
  };
}
