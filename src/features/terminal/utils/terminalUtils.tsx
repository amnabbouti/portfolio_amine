import React from 'react';

export const makeContactClickable = (line: string): React.ReactNode => {
  if (line.startsWith('X:')) {
    const X = line.split(':')[1].trim();
    return (
      <>
        X:{' '}
        <a
          href={`https://x.com/${X.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {X}
        </a>
      </>
    );
  }
  if (line.startsWith('Email:')) {
    const email = line.split(':')[1].trim();
    return (
      <>
        Email:{' '}
        <a href={`mailto:${email}`} className="text-blue-400 hover:underline">
          {email}
        </a>
      </>
    );
  }
  if (line.startsWith('LinkedIn:')) {
    const linkedin = line.split(':')[1].trim();
    return (
      <>
        LinkedIn:{' '}
        <a
          href={`https://${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {linkedin}
        </a>
      </>
    );
  }
  if (line.startsWith('GitHub:')) {
    const github = line.split(':')[1].trim();
    return (
      <>
        GitHub:{' '}
        <a
          href={`https://${github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {github}
        </a>
      </>
    );
  }
  return line;
};
