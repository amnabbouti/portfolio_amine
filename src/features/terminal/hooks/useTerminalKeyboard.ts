import {useRef, useEffect} from 'react';

interface KeyboardHandlerProps {
  currentInput: string;
  showCommandMenu: boolean;
  showMenuPrompt: boolean;
  onInputChange: (value: string) => void;
  onEnterCommand: () => void;
  onHistoryNavigation: (direction: 'up' | 'down') => void;
  onStartTyping: () => void;
  onMenuNavigate?: (direction: 'up' | 'down') => void;
  onMenuSelect?: () => void;
  onMenuEscape?: () => void;
  onShowMenu?: () => void;
}

/**
 * Custom hook for handling keyboard interactions in the terminal
 * Manages different keyboard behaviors based on the current state
 */
export function useTerminalKeyboard({
  currentInput,
  showCommandMenu,
  showMenuPrompt,
  onInputChange,
  onEnterCommand,
  onHistoryNavigation,
  onStartTyping,
  onMenuNavigate,
  onMenuSelect,
  onMenuEscape,
  onShowMenu,
}: KeyboardHandlerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input when the command menu state changes
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showCommandMenu]);

  /**
   * Handle keyboard events based on the current state
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (showCommandMenu) {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        onMenuNavigate?.('up');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        onMenuNavigate?.('down');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentInput.trim() === '') {
          onMenuSelect?.();
        } else {
          onEnterCommand();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onMenuEscape?.();
      } else if (e.key.length === 1) {
        onStartTyping();
        onInputChange(currentInput + e.key);
      }
    } else {
      if (e.key === 'Enter') {
        if (showMenuPrompt && currentInput.trim() === '') {
          onShowMenu?.();
        } else {
          onEnterCommand();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        onHistoryNavigation('up');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        onHistoryNavigation('down');
      }
    }
  };

  return {
    inputRef,
    handleKeyDown,
  };
}
