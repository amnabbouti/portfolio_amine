import { useEffect, useRef, useState } from 'react';

interface MatrixRainProps {
  isActive: boolean;
  onComplete: () => void;
}

export function MatrixRain({ isActive, onComplete }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    const columns = Math.floor(width / 20) + 1;
    const yPositions: number[] = Array.from({ length: columns }, () => Math.random() * height);

    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    const matrixEffect = () => {
      context.fillStyle = '#0001';
      context.fillRect(0, 0, width, height);

      context.fillStyle = '#0f0';
      context.font = '15pt monospace';

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;
        context.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 20;
        }
      });
    };

    let animationFrameId: number;

    const animate = () => {
      matrixEffect();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setTimeout(() => onComplete(), 0); // Use setTimeout to avoid updating during render
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(countdownInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div
      style={{
        background: '#000000',
        overflow: 'hidden',
        position: 'fixed',
        height: '100%',
        width: '100%',
        zIndex: 9999,
        left: '0',
        top: '0',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-green-400 font-mono text-6xl mb-4 animate-pulse">
            ENTERING THE MATRIX
          </div>
          <div className="text-green-300 font-mono text-2xl mb-8">
            Reality is an illusion... {countdown > 0 ? `${countdown}...` : ''}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 text-green-400 font-mono text-sm">
        "There is no spoon" - Neo
      </div>
    </div>
  );
}
