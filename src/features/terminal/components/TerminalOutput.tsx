import type {Command} from '@/types';
import {
    ProgressBar,
    DownloadConfirmation,
    ShutdownSequence
} from '.';
import {makeContactClickable} from '@/features/terminal/utils/terminalUtils';
import {ProjectListOutput} from './project/ProjectListOutput';

interface TerminalOutputProps {
    commandHistory: Command[];
    getLineColor: (line: string) => string;
    isDownloading: boolean;
    showDownloadConfirmation: boolean;
    showShutdownSequence?: boolean;
    onDownloadComplete: () => void;
    onDownloadConfirm: () => void;
    onDownloadCancel: () => void;
    onProjectSelect: (slug: string) => void;
}

export function TerminalOutput({
                                   commandHistory,
                                   getLineColor,
                                   isDownloading,
                                   showDownloadConfirmation,
                                   showShutdownSequence = false,
                                   onDownloadComplete,
                                   onDownloadConfirm,
                                   onDownloadCancel,
                                   onProjectSelect,
                               }: TerminalOutputProps) {
    return (
        <div>
            {commandHistory.map((cmd, index) => (
                <div key={index} className="mb-2">
                    {cmd.command && (
                        <div>
                            <span className="text-green-400">AMINE_ABBOUTI</span>
                            <span className="text-white">@</span>
                            <span className="text-blue-400">portfolio</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-300">~</span>
                            <span className="text-white">$ </span>
                            <span className="text-cyan-400">{cmd.command}</span>
                        </div>
                    )}
                    {Array.isArray(cmd.output) ? (
                        cmd.output.map((line, lineIndex) => (
                            <div
                                key={lineIndex}
                                className={cmd.isError ? 'text-red-400' : getLineColor(line)}
                            >
                                {makeContactClickable(line)}
                            </div>
                        ))
                    ) : (
                        <div
                            className={
                                cmd.isError
                                    ? 'text-red-400'
                                    : getLineColor(cmd.output as string)
                            }
                        >
                            {cmd.output}
                        </div>
                    )}
                    {cmd.projectList ? (
                        <ProjectListOutput
                            items={cmd.projectList}
                            onSelect={onProjectSelect}
                        />
                    ) : null}
                    {index === commandHistory.length - 1 && showDownloadConfirmation && (
                        <DownloadConfirmation
                            onConfirm={onDownloadConfirm}
                            onCancel={onDownloadCancel}
                            filename="CV-AMINE-ABBOUTI.pdf"
                        />
                    )}
                    {index === commandHistory.length - 1 &&
                        isDownloading &&
                        !showDownloadConfirmation && (
                            <ProgressBar onComplete={onDownloadComplete}/>
                        )}
                    {index === commandHistory.length - 1 && showShutdownSequence && (
                        <ShutdownSequence/>
                    )}
                </div>
            ))}
        </div>
    );
}
