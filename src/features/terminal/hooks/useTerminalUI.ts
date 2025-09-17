import {useState, useRef} from 'react';
import type {MenuState, MenuStateSetters, UIUtils} from '@/types/terminalTypes';
import type {CaseStudy} from '@/types';

/**
 * Hook for managing terminal UI state and utilities
 * Handles menu state, scrolling, and line styling
 */
export function useTerminalUI(): MenuState & MenuStateSetters & UIUtils & {
  terminalContentRef: React.RefObject<HTMLDivElement | null>;
} {
  // Menu state
  const [showCommandMenu, setShowCommandMenu] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const [showMenuPrompt, setShowMenuPrompt] = useState(false);
  const [menuFilter, setMenuFilter] = useState('');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  // Refs
  const terminalContentRef = useRef<HTMLDivElement>(null);

  /**
   * Scrolls the terminal content to the bottom
   */
  const scrollToBottom = () => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop =
        terminalContentRef.current.scrollHeight;
    }
  };

  /**
   * Returns the appropriate CSS class for a line based on its content
   */
  const getLineColor = (line: string) => {
    if (
      line.includes('Technical Skills:') ||
      line.includes('Work Experience:') ||
      line.includes('Recent Projects:') ||
      line.includes('Contact Information:') ||
      line.includes('Why hire me?')
    ) {
      return 'text-yellow-400';
    }
    if (
      line.startsWith('├──') ||
      line.startsWith('└──') ||
      line.startsWith('│')
    ) {
      return 'text-blue-400';
    }
    if (
      line.includes('Email:') ||
      line.includes('LinkedIn:') ||
      line.includes('GitHub:') ||
      line.includes('Location:') ||
      line.includes('Status:')
    ) {
      return 'text-cyan-400';
    }
    return 'text-white';
  };

  return {
    showCommandMenu,
    selectedMenuIndex,
    showMenuPrompt,
    menuFilter,
    activeCaseStudy,
    terminalContentRef,
    setShowCommandMenu,
    setSelectedMenuIndex,
    setShowMenuPrompt,
    setMenuFilter,
    setActiveCaseStudy,
    scrollToBottom,
    getLineColor,
  };
}
