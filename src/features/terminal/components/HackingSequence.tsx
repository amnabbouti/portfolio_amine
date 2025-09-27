import { ProgressBar } from '.';

interface HackingSequenceProps {
  hackingLines: string[];
  showCursor: boolean;
  isHackingProgress: boolean;
  onHackingProgressComplete: (finalProgressLine: string) => void;
}

export function HackingSequence({
  hackingLines,
  isHackingProgress,
  onHackingProgressComplete,
}: HackingSequenceProps) {
  const getLineColor = (line: string) => {
    if (line && line.startsWith('[') && line.includes('████')) {
      return 'text-cyan-400';
    }
    return 'text-white';
  };

  return (
    <div>
      {hackingLines.map((line, index) => (
        <div key={index} className="mb-1">
          <div className={getLineColor(line)}>{line || ''}</div>
        </div>
      ))}
      {isHackingProgress && (
        <div className="my-2">
          <ProgressBar onComplete={onHackingProgressComplete} />
        </div>
      )}
    </div>
  );
}
