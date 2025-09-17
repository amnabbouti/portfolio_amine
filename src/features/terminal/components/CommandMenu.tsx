import { useRef, useEffect } from 'react';
import type { MenuOption } from '@/types';

/**
 * Props for the CommandMenu component
 */
interface CommandMenuProps {
  selectedIndex: number;
  onSelect: (command: string) => void;
  onEscape: () => void;
  onNavigate: (direction: 'up' | 'down') => void;
  options: MenuOption[];
}

/**
 * Command Menu Component
 *
 * Displays a list of available commands that the user can select.
 * Supports keyboard navigation (arrow keys) and mouse interaction.
 *
 * @param props - The component props (see CommandMenuProps interface)
 * @returns A menu of available commands with selection highlighting
 */
export function CommandMenu({ selectedIndex, onSelect, onNavigate, options }: CommandMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollMenuIntoView = () => {
    if (!menuRef.current || options.length === 0) {
      return;
    }

    const optionElements = menuRef.current.querySelectorAll<HTMLElement>('[data-option]');
    const target = optionElements[selectedIndex];

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  useEffect(() => {
    scrollMenuIntoView();
  }, [selectedIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (menuRef.current) {
        menuRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });

        const terminalContent = menuRef.current.closest('.terminal-content');
        if (terminalContent) {
          terminalContent.scrollTop = terminalContent.scrollHeight;
        }
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (index !== selectedIndex) {
      const steps = index - selectedIndex;
      const direction = steps > 0 ? 'down' : 'up';

      for (let i = 0; i < Math.abs(steps); i++) {
        onNavigate(direction);
      }
    }
  };

  return (
    <div className="mt-2" ref={menuRef}>
      <div className="text-cyan-400 text-sm mb-1">
        ? What would you like to do? (Use arrow keys or mouse)
      </div>
      {options.length === 0 ? (
        <div className="text-sm py-0.5 text-gray-500">
          No matching commands. Keep typing to explore more.
        </div>
      ) : null}
      {options.map((option, index) => (
        <div
          key={option.command}
          className={`text-sm py-0.5 ${
            index === selectedIndex ? 'text-white bg-gray-900' : 'text-gray-300'
          } cursor-pointer hover:bg-gray-900`}
          data-option
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={() => onSelect(option.command)}
        >
          <span className="text-cyan-400">{index === selectedIndex ? '❯ ' : '  '}</span>
          <span className="text-yellow-400">{option.command}</span>
          <span className="text-gray-400"> - {option.description}</span>
        </div>
      ))}
      <div className="text-gray-500 text-xs mt-1">
        Press Enter to execute, Escape to cancel, or start typing to enter manual mode
      </div>
    </div>
  );
}
