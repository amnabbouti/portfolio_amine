import {useState, useEffect} from 'react';
import type {Command} from '@/types';
import type {TerminalState, TerminalStateSetters} from '@/types/terminalTypes';

/**
 * Hook for managing basic terminal state
 * Handles input, command history, and cursor blinking
 */
export function useTerminalState(): TerminalState & TerminalStateSetters {
  // Terminal state
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return {
    currentInput,
    commandHistory,
    historyIndex,
    showCursor,
    setCurrentInput,
    setCommandHistory,
    setHistoryIndex,
  };
}