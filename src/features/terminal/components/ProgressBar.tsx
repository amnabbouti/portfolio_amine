import { useEffect, useState, useRef } from 'react';

interface ProgressBarProps {
  onComplete: (finalProgressLine: string) => void;
}

export function ProgressBar({ onComplete }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 8 + 2;
        const newProgress = Math.min(prev + increment, 100);

        if (newProgress >= 100 && !completedRef.current) {
          completedRef.current = true;
          clearInterval(interval);
          const finalBar = `[${'█'.repeat(totalBlocks)}] 100%`;

          setTimeout(() => {
            onComplete(finalBar);
          }, 500);
          return 100;
        }

        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  const totalBlocks = 40;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;

  return (
    <div className="font-mono">
      <span className="text-white">[</span>
      <span className="text-green-400">{'█'.repeat(filledBlocks)}</span>
      <span className="text-gray-400">{'█'.repeat(emptyBlocks)}</span>
      <span className="text-white">] {Math.round(progress)}%</span>
    </div>
  );
}
