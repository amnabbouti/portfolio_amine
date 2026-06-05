export function InfoBar() {
  return (
    <div className="text-white font-mono text-sm space-y-1">
      <div>
        <span className="text-cyan-400">STATUS&nbsp;&nbsp;:</span>{' '}
        <span className="text-green-400">AVAILABLE FOR WORK</span>
      </div>
      <div>
        <span className="text-cyan-400">LOCATION:</span> <span className="text-white">ANTWERP</span>
      </div>
      <div>
        <span className="text-cyan-400">TIMEZONE:</span> <span className="text-white">UTC+1</span>
      </div>
      <div>
        <span className="text-cyan-400">GITHUB&nbsp;&nbsp;:</span>{' '}
        <a
          href="https://github.com/amnabbouti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          github.com/amnabbouti
        </a>
      </div>
      <div>
        <span className="text-cyan-400">LINKEDIN:</span>{' '}
        <a
          href="https://linkedin.com/in/amine-abbouti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          linkedin.com/in/amine-abbouti
        </a>
      </div>
      <div>
        <span className="text-cyan-400">X&nbsp;:</span>{' '}
        <a
          href="https://x.com/Amine__abbouti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          @amine__abbouti
        </a>
      </div>
    </div>
  );
}
