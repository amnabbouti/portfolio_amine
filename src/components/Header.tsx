import { useState, useEffect } from 'react';
import { Moon, Sun, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TerminalHeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: TerminalHeaderProps) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        darkMode
          ? 'bg-black/90 border-zinc-800/50'
          : 'bg-white/90 border-gray-200/50'
      }`}
    >
      <div className="max-w-7x2 mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`font-mono text-sm transition-colors duration-300 ${
                darkMode ? 'text-zinc-400' : 'text-gray-600'
              }`}
            >
              <Terminal className="inline w-4 h-4 mr-2" />
              /portfolio
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div
              className={`font-mono text-sm transition-colors duration-300 ${
                darkMode ? 'text-zinc-500' : 'text-gray-500'
              }`}
            >
              {time}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className={`h-8 w-8 transition-colors duration-300 ${
                darkMode
                  ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
