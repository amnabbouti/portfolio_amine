import React from 'react';

/**
 * Helper function to make contact information clickable
 * @param line The line of text to process
 * @returns JSX element with clickable links or the original text
 */
export const makeContactClickable = (line: string): React.ReactNode => {
    // Email pattern
    if (line.startsWith('Email:')) {
        const email = line.split(':')[1].trim();
        return (
            <>
                Email: <a href={`mailto:${email}`} className="text-blue-400 hover:underline">{email}</a>
            </>
        );
    }

    // LinkedIn pattern
    if (line.startsWith('LinkedIn:')) {
        const linkedin = line.split(':')[1].trim();
        return (
            <>
                LinkedIn: <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{linkedin}</a>
            </>
        );
    }

    // GitHub pattern
    if (line.startsWith('GitHub:')) {
        const github = line.split(':')[1].trim();
        return (
            <>
                GitHub: <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{github}</a>
            </>
        );
    }

    // Twitter pattern
    if (line.startsWith('Twitter:')) {
        const twitter = line.split(':')[1].trim();
        return (
            <>
                Twitter: <a href={`https://twitter.com/${twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{twitter}</a>
            </>
        );
    }

    // Return the original line if no patterns match
    return line;
};