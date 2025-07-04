import { useEffect, useState, useRef } from 'react';

interface DownloadConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
  filename: string;
}

export function DownloadConfirmation({
  onConfirm,
  onCancel,
  filename,
}: DownloadConfirmationProps) {
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no'>('yes');
  const confirmationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (confirmationRef.current) {
      confirmationRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();

    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setSelectedOption((prev) => (prev === 'yes' ? 'no' : 'yes'));
    } else if (e.key === 'Enter') {
      selectedOption === 'yes' ? onConfirm() : onCancel();
    } else if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <div
      className="mt-2 text-sm"
      ref={confirmationRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="text-cyan-400 mb-1">
        Download {filename}? (Use arrow keys or mouse to select)
      </div>
      <div className="flex space-x-4">
        <div
          className={`cursor-pointer px-2 py-0.5 ${
            selectedOption === 'yes'
              ? 'bg-cyan-800 text-white'
              : 'text-gray-300'
          } hover:bg-cyan-900 hover:text-white transition-colors duration-150`}
          onClick={onConfirm}
          onMouseEnter={() => setSelectedOption('yes')}
        >
          <span className="text-cyan-400 mr-1">
            {selectedOption === 'yes' ? '❯' : ' '}
          </span>
          Yes
        </div>
        <div
          className={`cursor-pointer px-2 py-0.5 ${
            selectedOption === 'no' ? 'bg-cyan-800 text-white' : 'text-gray-300'
          } hover:bg-cyan-900 hover:text-white transition-colors duration-150`}
          onClick={onCancel}
          onMouseEnter={() => setSelectedOption('no')}
        >
          <span className="text-cyan-400 mr-1">
            {selectedOption === 'no' ? '❯' : ' '}
          </span>
          No
        </div>
      </div>
      <div className="text-gray-500 text-xs mt-1">
        Press Enter to confirm or Escape to cancel, or click your choice
      </div>
    </div>
  );
}
