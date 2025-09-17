import {useTerminal} from '@/features/terminal/hooks';
import {menuOptions} from '@/data';
import { HackingSequence, TerminalOutput, TerminalInput, CommandMenu } from '.';

/**
 * Terminal Component
 *
 * The main terminal interface that displays the interactive command-line experience.
 * It handles the terminal output, input, command menu, and various animation sequences.
 *
 * @returns A fully functional terminal UI with command processing capabilities
 */
export function Terminal() {
    const {
        isHackingSequence,
        hackingLines,
        currentInput,
        commandHistory,
        showCursor,
        showCommandMenu,
        selectedMenuIndex,
        showMenuPrompt,
        terminalContentRef,
        isDownloading,
        isHackingProgress,
        showDownloadConfirmation,
        showShutdownSequence,
        setShowCommandMenu,
        setSelectedMenuIndex,
        setShowMenuPrompt,
        handleCommand,
        handleInputChange,
        handleEnterCommand,
        handleHistoryNavigation,
        handleDownloadComplete,
        handleDownloadConfirm,
        handleDownloadCancel,
        handleHackingProgressComplete,
        getLineColor,
    } = useTerminal();

    const handleMenuNavigate = (direction: 'up' | 'down') => {
        if (direction === 'up') {
            setSelectedMenuIndex((prev) =>
                prev === 0 ? menuOptions.length - 1 : prev - 1,
            );
        } else {
            setSelectedMenuIndex((prev) =>
                prev === menuOptions.length - 1 ? 0 : prev + 1,
            );
        }
    };

    const handleMenuSelect = (command: string) => {
        handleCommand(command, true);
        handleInputChange('');
    };

    const handleMenuEscape = () => {
        setShowCommandMenu(false);
        setShowMenuPrompt(true);
    };

    const handleShowMenu = () => {
        setShowMenuPrompt(false);
        setShowCommandMenu(true);
        setSelectedMenuIndex(0);
        setTimeout(() => {
            if (terminalContentRef.current) {
                terminalContentRef.current.scrollTop =
                    terminalContentRef.current.scrollHeight;
            }
        }, 50);
    };

    const handleStartTyping = () => {
        setShowCommandMenu(false);
        setShowMenuPrompt(false);
    };

    return (
        <div className="h-full bg-black text-white font-mono p-4 sm:p-6 md:p-8 text-sm sm:text-base overflow-hidden">
            <div className="h-full flex flex-col">
                <div
                    className="terminal-content flex-1 overflow-y-auto pb-40 custom-scrollbar"
                    ref={terminalContentRef}
                >
                    <HackingSequence
                        hackingLines={hackingLines}
                        showCursor={isHackingSequence ? showCursor : false}
                        isHackingProgress={isHackingProgress}
                        onHackingProgressComplete={handleHackingProgressComplete}
                    />

                    {!isHackingSequence && (
                        <div>
                            <TerminalOutput
                                commandHistory={commandHistory}
                                getLineColor={getLineColor}
                                isDownloading={isDownloading}
                                showDownloadConfirmation={showDownloadConfirmation}
                                showShutdownSequence={showShutdownSequence}
                                onDownloadComplete={handleDownloadComplete}
                                onDownloadConfirm={handleDownloadConfirm}
                                onDownloadCancel={handleDownloadCancel}
                            />
                            {!showDownloadConfirmation && !showShutdownSequence && (
                                <TerminalInput
                                    currentInput={currentInput}
                                    showCursor={showCursor}
                                    showCommandMenu={showCommandMenu}
                                    showMenuPrompt={showMenuPrompt}
                                    showDownloadConfirmation={showDownloadConfirmation}
                                    onInputChange={handleInputChange}
                                    onEnterCommand={handleEnterCommand}
                                    onHistoryNavigation={handleHistoryNavigation}
                                    onStartTyping={handleStartTyping}
                                    onMenuNavigate={handleMenuNavigate}
                                    onShowMenu={handleShowMenu}
                                    onMenuSelect={() => {
                                        const selectedCommand =
                                            menuOptions[selectedMenuIndex].command;
                                        handleMenuSelect(selectedCommand);
                                    }}
                                    onMenuEscape={handleMenuEscape}
                                />
                            )}
                        </div>
                    )}

                    {showCommandMenu || commandHistory.some((cmd) => cmd.showMenu) ? (
                        <CommandMenu
                            selectedIndex={selectedMenuIndex}
                            onSelect={handleMenuSelect}
                            onEscape={handleMenuEscape}
                            onNavigate={handleMenuNavigate}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
