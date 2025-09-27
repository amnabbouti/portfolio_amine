import { useState, useEffect } from 'react';
import type { CaseStudy } from '@/types';

interface ProjectPreviewProps {
  preview: CaseStudy['preview'];
}

export function ProjectPreview({ preview }: ProjectPreviewProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);

  if (!preview?.images) return null;

  // Helper function to detect if an image is a mobile screenshot
  const isMobileImage = (imageSrc: string): boolean => {
    return imageSrc.includes('mobile');
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const openFullscreen = (index: number) => {
    setFullscreenImage(index);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const goToNextImage = () => {
    if (fullscreenImage !== null && preview?.images) {
      const nextIndex = (fullscreenImage + 1) % preview.images.length;
      setFullscreenImage(nextIndex);
    }
  };

  const goToPrevImage = () => {
    if (fullscreenImage !== null && preview?.images) {
      const prevIndex = fullscreenImage === 0 ? preview.images.length - 1 : fullscreenImage - 1;
      setFullscreenImage(prevIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (fullscreenImage === null) return;

      if (e.key === 'ArrowRight') {
        goToNextImage();
      } else if (e.key === 'ArrowLeft') {
        goToPrevImage();
      } else if (e.key === 'Escape') {
        closeFullscreen();
      }
    };

    if (fullscreenImage !== null) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [fullscreenImage]);

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextImage();
    } else if (isRightSwipe) {
      goToPrevImage();
    }
  };

  return (
    <>
      <div className="space-y-4">
        {/* Interaction Help */}
        <div className="text-xs text-green-400/60 font-mono text-center">
          CLICK ANY IMAGE TO VIEW FULLSCREEN
        </div>

        {/* Multiple Images Container */}
        <div className="space-y-3">
          {preview.images.map((image, index) => (
            <div
              key={index}
              className="relative border border-green-500/20 bg-black/40 overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full transition-all duration-300 cursor-pointer hover:brightness-110
                  ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'}
                `}
                onLoad={() => handleImageLoad(index)}
                onClick={() => openFullscreen(index)}
                style={{
                  filter:
                    'brightness(0.95) contrast(1.1) saturate(1.05) drop-shadow(0 0 10px rgba(34, 197, 94, 0.3))',
                  display: 'block',
                  verticalAlign: 'top',
                  margin: 0,
                  padding: 0,
                }}
              />

              {/* Loading State */}
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <div className="flex items-center space-x-2 text-green-400 text-sm font-mono">
                    <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>LOADING...</span>
                  </div>
                </div>
              )}

              {/* Terminal Border Effects */}
              <div className="absolute inset-0 border border-green-500/30 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage !== null && (
        <div
          className="fixed inset-0 z-[20000] bg-black/95 backdrop-blur-sm flex flex-col p-4"
          onClick={closeFullscreen}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Top controls */}
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto mb-4">
            <div className="text-sm font-mono text-green-400">
              {fullscreenImage + 1} / {preview?.images?.length || 0}
            </div>
            <button
              onClick={e => {
                e.stopPropagation();
                closeFullscreen();
              }}
              className="bg-black/80 border border-green-500/50 px-3 py-1 text-sm font-mono text-green-400 hover:bg-green-500/10"
            >
              CLOSE
            </button>
          </div>

          {/* Main content area - centered vertically */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-6 max-w-full" onClick={e => e.stopPropagation()}>
              {/* Left navigation arrow */}
              {preview.images.length > 1 && (
                <button
                  onClick={e => {
                    e.stopPropagation();
                    goToPrevImage();
                  }}
                  className="bg-black/80 border border-green-500/50 p-3 text-green-400 hover:bg-green-500/10 text-2xl flex-shrink-0"
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}

              {/* Image container */}
              <div className="relative max-w-6xl max-h-[calc(100vh-200px)] flex items-center justify-center">
                {isMobileImage(preview.images[fullscreenImage].src) ? (
                  <div className="max-w-xs max-h-[60vh] flex items-center justify-center">
                    <img
                      src={preview.images[fullscreenImage].src}
                      alt={preview.images[fullscreenImage].alt}
                      className="max-w-full max-h-full object-contain"
                      style={{
                        filter: 'brightness(1) contrast(1.1) saturate(1.05)',
                      }}
                    />
                  </div>
                ) : (
                  <img
                    src={preview.images[fullscreenImage].src}
                    alt={preview.images[fullscreenImage].alt}
                    className="max-w-full max-h-full object-contain"
                    style={{
                      filter: 'brightness(1) contrast(1.1) saturate(1.05)',
                    }}
                  />
                )}

                {/* Caption in fullscreen */}
                {preview.images[fullscreenImage].caption && (
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 border border-green-500/30 p-3">
                    <div className="text-sm text-green-300 font-mono">
                      {preview.images[fullscreenImage].caption}
                    </div>
                  </div>
                )}
              </div>

              {/* Right navigation arrow */}
              {preview.images.length > 1 && (
                <button
                  onClick={e => {
                    e.stopPropagation();
                    goToNextImage();
                  }}
                  className="bg-black/80 border border-green-500/50 p-3 text-green-400 hover:bg-green-500/10 text-2xl flex-shrink-0"
                  aria-label="Next image"
                >
                  ›
                </button>
              )}
            </div>
          </div>

          {/* Bottom navigation help */}
          {preview.images.length > 1 && (
            <div className="text-xs text-green-400/60 font-mono text-center mt-4">
              ▹ SWIPE OR USE ARROW KEYS TO NAVIGATE ▹ ESC TO CLOSE ▹
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProjectPreview;
