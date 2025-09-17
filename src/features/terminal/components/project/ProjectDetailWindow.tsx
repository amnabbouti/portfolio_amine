import type { ReactNode } from 'react';
import type { CaseStudy } from '@/types';

interface ProjectDetailWindowProps {
  study: CaseStudy;
  onClose: () => void;
}

const accentClass = (accent: boolean) => (accent ? 'text-green-400' : 'text-green-300/80');

export function ProjectDetailWindow({ study, onClose }: ProjectDetailWindowProps) {
  return (
    <div className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-sm flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-4xl max-h-full overflow-hidden border border-green-500/50 bg-gray-950 text-gray-100 shadow-lg shadow-green-500/10">
        <div className="flex items-center justify-between border-b border-green-500/40 bg-gray-900 px-4 py-3">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-green-400/80">
              PROJECT DOSSIER
            </div>
            <div className="text-lg font-semibold text-green-200">{study.title}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-green-500/50 px-3 py-1 text-sm font-medium text-green-300 hover:bg-green-500/10"
          >
            CLOSE
          </button>
        </div>

        <div className="grid max-h-[75vh] gap-6 overflow-y-auto px-6 py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <Section title="Summary">
              <p className="text-sm text-gray-300">{study.summary}</p>
            </Section>

            <Section title="Context">
              <p className="text-sm text-gray-300">{study.context}</p>
            </Section>

            <Section title="Challenge" accent>
              <BulletList items={study.challenge} />
            </Section>

            <Section title="Solution" accent>
              <BulletList items={study.solution} />
            </Section>

            <Section title="Impact" accent>
              <BulletList items={study.impact} emphasis />
            </Section>
          </div>

          <div className="space-y-6">
            <Section title="Role & Scope">
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <span className="text-green-300">Role:</span> {study.role}
                </div>
                {study.timeframe ? (
                  <div>
                    <span className="text-green-300">Timeframe:</span> {study.timeframe}
                  </div>
                ) : null}
              </div>
            </Section>

            <Section title="Stack">
              <div className="flex flex-wrap gap-2">
                {study.stack.map(tech => (
                  <span
                    key={tech}
                    className="rounded border border-green-500/30 bg-green-500/5 px-2 py-1 text-xs uppercase tracking-wide text-green-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Section>

            {study.links && study.links.length > 0 ? (
              <Section title="Artifacts">
                <ul className="space-y-2 text-sm text-cyan-300">
                  {study.links.map(link => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green-300 hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Section>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
  accent?: boolean;
}

function Section({ title, children, accent = false }: SectionProps) {
  return (
    <section>
      <h3 className={'text-xs font-semibold uppercase tracking-[0.3em] ' + accentClass(accent)}>
        {title}
      </h3>
      <div className="mt-2 space-y-2 border-l border-green-500/20 pl-4">{children}</div>
    </section>
  );
}

interface BulletListProps {
  items: string[];
  emphasis?: boolean;
}

function BulletList({ items, emphasis = false }: BulletListProps) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((item, index) => (
        <li key={item + '-' + index} className="flex gap-2">
          <span className="text-green-400">▹</span>
          <span className={emphasis ? 'text-green-200' : 'text-gray-300'}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default ProjectDetailWindow;
