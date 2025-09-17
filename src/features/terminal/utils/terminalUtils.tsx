import React from 'react';

export const makeContactClickable = (line: string): React.ReactNode => {
  if (line.startsWith('Email:')) {
    const email = line.split(':')[1].trim();
    return (
      <>
        Email: <a href={`mailto:${email}`} className="text-blue-400 hover:underline">{email}</a>
      </>
    );
  }
  if (line.startsWith('LinkedIn:')) {
    const linkedin = line.split(':')[1].trim();
    return (
      <>
        LinkedIn: <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{linkedin}</a>
      </>
    );
  }
  if (line.startsWith('GitHub:')) {
    const github = line.split(':')[1].trim();
    return (
      <>
        GitHub: <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{github}</a>
      </>
    );
  }
  if (line.startsWith('Twitter:')) {
    const twitter = line.split(':')[1].trim();
    return (
      <>
        Twitter: <a href={`https://twitter.com/${twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{twitter}</a>
      </>
    );
  }
  return line;
};

