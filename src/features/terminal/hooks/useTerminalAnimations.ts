import { useState, useRef } from 'react';
import type { Command } from '@/types';
import type {
  AnimationState,
  AnimationStateSetters,
  AnimationHandlers,
  DownloadHandlers,
} from '@/types/terminalTypes';

/**
 * Hook for managing terminal animations and sequences
 * Handles hacking sequences, download animations, and shutdown sequences
 */
export function useTerminalAnimations(
  setCommandHistory: React.Dispatch<React.SetStateAction<Command[]>>,
  setShowMenuPrompt: React.Dispatch<React.SetStateAction<boolean>>,
  setShowCommandMenu: React.Dispatch<React.SetStateAction<boolean>>,
  scrollToBottom: () => void,
): AnimationState &
  AnimationStateSetters &
  AnimationHandlers &
  DownloadHandlers & {
    startHackingSequence: () => void;
  } {
  // Animation states
  const [isHackingSequence, setIsHackingSequence] = useState(true);
  const [hackingLines, setHackingLines] = useState<string[]>([]);
  const [isHackingProgress, setIsHackingProgress] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showDownloadConfirmation, setShowDownloadConfirmation] = useState(false);
  const [showShutdownSequence, setShowShutdownSequence] = useState(false);

  // Refs
  const hackingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Starts the hacking sequence animation
   */
  const startHackingSequence = () => {
    if (hackingIntervalRef.current) {
      clearInterval(hackingIntervalRef.current);
      hackingIntervalRef.current = null;
    }

    setHackingLines([]);

    const sequence = ['Initializing connection...', 'Connection established.'];

    let index = 0;
    hackingIntervalRef.current = setInterval(() => {
      if (index < sequence.length) {
        setHackingLines(prev => [...prev, sequence[index]]);
        index++;
      } else {
        clearInterval(hackingIntervalRef.current!);
        hackingIntervalRef.current = null;
        setTimeout(() => {
          setIsHackingProgress(true);
        }, 500);
      }
    }, 800);
  };

  /**
   * Handles the completion of the hacking progress animation
   */
  const handleHackingProgressComplete = (finalProgressLine: string) => {
    setIsHackingProgress(false);

    const completionSequence = [finalProgressLine, 'Access granted.', "You're in, welcome!", ''];

    // First add all the initial hacking messages
    let index = 0;
    const addCompletionLines = () => {
      if (index < completionSequence.length) {
        setHackingLines(prev => [...prev, completionSequence[index]]);
        index++;
        setTimeout(addCompletionLines, 400);
      } else {
        // After showing all messages, clear all except the welcome message
        setTimeout(() => {
          setHackingLines(['blah. blah. blah.!']);

          // Display the introduction text directly
          const introText = ' My name is Amine_Abbouti and this is where i live. The Internet!';
          setHackingLines(prev => [prev[0] || 'blah. blah. blah.!', introText]);

          setTimeout(() => {
            setIsHackingSequence(false);
            setShowCommandMenu(true);
          }, 1000);
        }, 1500);
      }
    };

    setTimeout(addCompletionLines, 200);
  };

  /**
   * Handles the confirmation of a download
   */
  const handleDownloadConfirm = () => {
    setShowDownloadConfirmation(false);
    setIsDownloading(true);
  };

  /**
   * Handles the cancellation of a download
   */
  const handleDownloadCancel = () => {
    setShowDownloadConfirmation(false);
    setCommandHistory(prev => {
      const newHistory = [...prev];
      const lastIndex = newHistory.length - 1;
      if (lastIndex >= 0) {
        newHistory[lastIndex] = {
          command: 'resume',
          output: ['Download cancelled.', ''],
          isError: false,
        };
      }
      return newHistory;
    });

    setTimeout(() => {
      setShowMenuPrompt(true);
    }, 100);
  };

  /**
   * Handles the completion of a download
   */
  const handleDownloadComplete = () => {
    setIsDownloading(false);

    // Download the file
    import('@/lib').then(({ downloadFile }) => {
      downloadFile('AMINE-ABBOUTI.pdf');
    });

    setCommandHistory(prev => {
      const newHistory = [...prev];
      const lastIndex = newHistory.length - 1;
      if (lastIndex >= 0) {
        newHistory[lastIndex] = {
          command: 'resume',
          output: [
            'Downloading resume...',
            'Resume downloaded successfully!',
            '',
            'File saved: AMINE-ABBOUTI.pdf',
            '',
          ],
          isError: false,
        };
      }
      return newHistory;
    });

    setTimeout(() => {
      setShowMenuPrompt(true);
      scrollToBottom();
    }, 100);
  };

  return {
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
  };
}
