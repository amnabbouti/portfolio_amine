import {useTerminalKeyboard} from '@/features/terminal/hooks/useTerminalKeyboard';

/**
 * Props for the TerminalInput component
 */
interface TerminalInputProps {
    currentInput: string;
    showCursor: boolean;
    showCommandMenu: boolean;
    showMenuPrompt: boolean;
    showDownloadConfirmation?: boolean;
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
 * Terminal Input Component
 *
 * Renders the command input field for the terminal with cursor and handles keyboard interactions.
 * This component manages:
 * - Command input and cursor display
 * - Keyboard navigation (arrow keys, enter, escape)
 * - Command history navigation
 * - Menu interaction
 *
 * @param props - The component props (see TerminalInputProps interface)
 * @returns A terminal input field with command prompt styling
 */
export function TerminalInput({
                                  currentInput,
                                  showCursor,
                                  showCommandMenu,
                                  showMenuPrompt,
                                  showDownloadConfirmation = false,
                                  onInputChange,
                                  onEnterCommand,
                                  onHistoryNavigation,
                                  onStartTyping,
                                  onMenuNavigate,
                                  onMenuSelect,
                                  onMenuEscape,
                                  onShowMenu,
                              }: TerminalInputProps) {
    // Using the custom hook for keyboard handling
    const {inputRef, handleKeyDown} = useTerminalKeyboard({
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
    });

    return (
        <div>
            <div className="flex items-center">
                <span className="text-green-400">AMINE_ABBOUTI</span>
                <span className="text-white">@</span>
                <span className="text-blue-400">portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-300">~</span>
                <span className="text-white">$ </span>
                <div className="flex-1 relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={currentInput}
                        onChange={(e) => onInputChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none text-cyan-400 w-full font-mono"
                        autoComplete="off"
                        spellCheck="false"
                        disabled={showDownloadConfirmation}
                        aria-label="Terminal command input"
                        aria-autocomplete="list"
                        aria-haspopup={showCommandMenu}
                        role="combobox"
                    />
                    <span
                        className={`absolute top-0 text-white pointer-events-none ${
                            showCursor ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{left: `${currentInput.length * 0.6}em`}}
                    >
            █
          </span>
                </div>
            </div>
            {showMenuPrompt && (
                <div
                    className="mt-2 text-gray-400 text-sm cursor-pointer hover:text-cyan-400 transition-colors duration-150"
                    onClick={() => {
                        if (onShowMenu) {
                            onShowMenu();
                        }
                    }}
                >
                    Click here or press Enter to show options, or type a command
                </div>
            )}
        </div>
    );
}
