import { useState } from 'react';
import { Header, InfoBar } from '@/components';
import { Terminal, MatrixRain } from '@/features/terminal/components';

function MainPage() {
  const [showEntryAnimation, setShowEntryAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleMatrixComplete = () => {
    setShowEntryAnimation(false);
    setShowContent(true);
  };

  return (
    <>
      {showContent && (
        <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">
          <Header />
          <main className="relative flex-1 min-h-0">
            <Terminal />
            <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 p-3 rounded border border-gray-600">
              <InfoBar />
            </div>
          </main>
        </div>
      )}

      <MatrixRain isActive={showEntryAnimation} onComplete={handleMatrixComplete} />
    </>
  );
}

export default MainPage;
