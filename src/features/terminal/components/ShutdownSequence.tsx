import { useState, useEffect } from 'react';
import { closeTab } from '@/lib';

interface ShutdownSequenceProps {
  onComplete?: () => void;
}

export function ShutdownSequence({ onComplete }: ShutdownSequenceProps) {
  const [shutdownLines, setShutdownLines] = useState<string[]>([]);
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const shutdownSequence = [
    'Initiating system shutdown...',
    'Closing active connections...',
    'Terminating background processes...',
    'Clearing memory buffers...',
    'Disconnecting from network...',
    'Saving session data...',
    'Preparing for shutdown...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLineIndex < shutdownSequence.length) {
        setShutdownLines(prev => [...prev, shutdownSequence[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowProgress(true);
        }, 500);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [currentLineIndex]);

  useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const increment = Math.random() * 8 + 2;
          const newProgress = Math.min(prev + increment, 100);

          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              handleShutdownComplete();
            }, 500);
            return 100;
          }

          return newProgress;
        });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [showProgress]);

  const handleShutdownComplete = () => {
    setShutdownLines(prev => [...prev, 'System shutdown complete.', 'Goodbye.']);

    setTimeout(() => {
      closeTab();
    }, 1000);

    if (onComplete) {
      onComplete();
    }
  };

  const renderProgressBar = () => {
    const filledBars = Math.floor((progress / 100) * 40);
    const emptyBars = 40 - filledBars;
    const progressBar = '█'.repeat(filledBars) + '░'.repeat(emptyBars);

    return `[${progressBar}] ${Math.floor(progress)}%`;
  };

  return (
    <div className="mt-4">
      <div className="text-red-400 font-bold mb-2">🔴 SYSTEM SHUTDOWN INITIATED</div>

      {shutdownLines.map((line, index) => (
        <div key={index} className="text-red-300 mb-1">
          <span className="text-red-500">[SHUTDOWN]</span> {line}
        </div>
      ))}

      {showProgress && (
        <div className="mt-3">
          <div className="text-red-400 mb-2">Shutting down system...</div>
          <div className="font-mono text-red-300">{renderProgressBar()}</div>
        </div>
      )}
    </div>
  );
}
