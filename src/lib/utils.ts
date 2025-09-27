import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values into a single className string
 * Uses clsx for conditional classes and tailwind-merge to handle Tailwind conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Downloads a file from the assets directory
 * @param filename The name of the file to download
 */
export function downloadFile(filename: string) {
  const link = document.createElement('a');
  link.href = `/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Attempts to close the current browser tab
 * Falls back to alternative methods if window.close() fails
 */
export function closeTab() {
  // Try the standard method first
  try {
    window.close();
  } catch {
    console.log('window.close() failed, trying alternatives');
  }

  // If the tab is still open after a short delay, try alternatives
  setTimeout(() => {
    if (!window.closed) {
      try {
        // Try redirecting to about:blank
        window.location.href = 'about:blank';
      } catch {
        // As a last resort, replace the page content with a shutdown message
        document.body.innerHTML = `
          <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: #000;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            font-size: 18px;
            text-align: center;
            flex-direction: column;
          ">
            <div>
              <div style="font-size: 24px; margin-bottom: 20px;">⚡ SYSTEM SHUTDOWN COMPLETE ⚡</div>
              <div>Portfolio session terminated.</div>
              <div style="margin-top: 20px; color: #666; font-size: 14px;">
                You can now close this tab manually.
              </div>
              <div style="margin-top: 10px; color: #444; font-size: 12px;">
                Press Ctrl+W (Windows/Linux) or Cmd+W (Mac) to close this tab.
              </div>
            </div>
          </div>
        `;
      }
    }
  }, 100);
}
