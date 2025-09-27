import { useEffect } from 'react';
import { useTerminal } from '@/features/terminal/hooks';
import { menuOptions, skillCategories, caseStudies } from '@/data';
import { HackingSequence, TerminalOutput, TerminalInput, CommandMenu } from '.';
import { ProjectDetailWindow } from './project/ProjectDetailWindow';
import { SkillDetailWindow } from './skill/SkillDetailWindow';

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
    menuFilter,
    activeCaseStudy,
    activeSkillCategory,
    terminalContentRef,
    isDownloading,
    isHackingProgress,
    showDownloadConfirmation,
    showShutdownSequence,
    setShowCommandMenu,
    setSelectedMenuIndex,
    setShowMenuPrompt,
    setMenuFilter,
    setActiveCaseStudy,
    setActiveSkillCategory,
    handleCommand,
    handleInputChange,
    handleEnterCommand,
    handleHistoryNavigation,
    handleAutocomplete,
    handleDownloadComplete,
    handleDownloadConfirm,
    handleDownloadCancel,
    handleHackingProgressComplete,
    getLineColor,
  } = useTerminal();

  const normalizedFilter = menuFilter.trim().toLowerCase();
  const filteredMenuOptions = normalizedFilter
    ? menuOptions.filter(option => option.command.toLowerCase().startsWith(normalizedFilter))
    : menuOptions;
  const visibleMenuOptions = filteredMenuOptions.length > 0 ? filteredMenuOptions : menuOptions;

  const handleMenuNavigate = (direction: 'up' | 'down') => {
    const optionsLength = visibleMenuOptions.length;
    if (optionsLength === 0) {
      return;
    }

    if (direction === 'up') {
      setSelectedMenuIndex(prev => (prev === 0 ? optionsLength - 1 : prev - 1));
    } else {
      setSelectedMenuIndex(prev => (prev === optionsLength - 1 ? 0 : prev + 1));
    }
  };

  const handleMenuSelect = (command: string) => {
    handleCommand(command, true);
    handleInputChange('');
  };

  const handleProjectSelect = (slug: string) => {
    handleInputChange('');
    const study = caseStudies.find(item => item.slug === slug);

    if (study) {
      setActiveSkillCategory(null);
      setActiveCaseStudy(study);
      return;
    }

    handleCommand(`projects ${slug}`);
  };

  const handleSkillSelect = (slug: string) => {
    handleInputChange('');
    const category = skillCategories.find(item => item.slug === slug);

    if (category) {
      setActiveCaseStudy(null);
      setActiveSkillCategory(category);
      return;
    }

    handleCommand(`skills ${slug}`);
  };

  const handleMenuEscape = () => {
    setShowCommandMenu(false);
    setShowMenuPrompt(true);
    setMenuFilter('');
  };

  const handleShowMenu = () => {
    setShowMenuPrompt(false);
    setShowCommandMenu(true);
    setSelectedMenuIndex(0);
    setMenuFilter('');
    setTimeout(() => {
      if (terminalContentRef.current) {
        terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleStartTyping = () => {
    setShowCommandMenu(false);
    setShowMenuPrompt(false);
    setMenuFilter('');
  };

  useEffect(() => {
    if (!showCommandMenu) {
      return;
    }

    if (visibleMenuOptions.length === 0) {
      setSelectedMenuIndex(0);
      return;
    }

    if (selectedMenuIndex >= visibleMenuOptions.length) {
      setSelectedMenuIndex(visibleMenuOptions.length - 1);
    }
  }, [showCommandMenu, visibleMenuOptions.length, selectedMenuIndex, setSelectedMenuIndex]);

  const safeSelectedIndex =
    visibleMenuOptions.length === 0
      ? 0
      : Math.min(selectedMenuIndex, visibleMenuOptions.length - 1);

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
                onProjectSelect={handleProjectSelect}
                onSkillSelect={handleSkillSelect}
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
                  onAutocomplete={handleAutocomplete}
                  onMenuSelect={() => {
                    const selectedCommand =
                      visibleMenuOptions[safeSelectedIndex]?.command ?? menuOptions[0].command;
                    handleMenuSelect(selectedCommand);
                  }}
                  onMenuEscape={handleMenuEscape}
                />
              )}
            </div>
          )}

          {showCommandMenu || commandHistory.some(cmd => cmd.showMenu) ? (
            <CommandMenu
              selectedIndex={safeSelectedIndex}
              onSelect={handleMenuSelect}
              onEscape={handleMenuEscape}
              onNavigate={handleMenuNavigate}
              options={visibleMenuOptions}
            />
          ) : null}
          {activeCaseStudy ? (
            <ProjectDetailWindow study={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
          ) : null}
          {activeSkillCategory ? (
            <SkillDetailWindow
              category={activeSkillCategory}
              onClose={() => setActiveSkillCategory(null)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
