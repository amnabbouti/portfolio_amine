import type { ReactNode } from 'react';
import type { SkillCategory } from '@/types';

interface SkillDetailWindowProps {
  category: SkillCategory;
  onClose: () => void;
}

export function SkillDetailWindow({ category, onClose }: SkillDetailWindowProps) {
  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 px-4 py-10 font-mono text-sm text-gray-100 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-full overflow-hidden border border-green-500/50 bg-gray-950 shadow-lg shadow-green-500/10"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-green-500/40 bg-gray-900 px-4 py-3">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-green-400/80">
              SKILL DOSSIER
            </div>
            <div className="text-xl font-semibold text-green-200">{category.label}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-green-500/50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-green-300 transition-colors duration-150 hover:bg-green-500/10"
          >
            CLOSE
          </button>
        </div>

        <div className="grid max-h-[75vh] gap-6 overflow-y-auto px-6 py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <Section title="Narrative">
              <p className="leading-relaxed text-gray-300">{category.narrative}</p>
            </Section>

            <Section title="Stack">
              <div className="space-y-4">
                {category.stack.map(item => (
                  <div
                    key={item.name}
                    className="rounded border border-gray-700/60 bg-gray-900/40 p-4"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="text-lg font-semibold text-green-200">{item.name}</div>
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        {item.level} · {item.focus}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-300">{item.summary}</div>
                    <div className="mt-2 text-xs text-gray-500">Last used ▸ {item.lastUsed}</div>
                    {item.highlights && item.highlights.length > 0 ? (
                      <ul className="mt-2 space-y-1 text-xs text-gray-400">
                        {item.highlights.map(highlight => (
                          <li key={highlight} className="flex gap-2 text-gray-300">
                            <span className="text-green-300">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </Section>
          </div>

          <div className="space-y-6">
            {category.tools && category.tools.length > 0 ? (
              <Section title="Terminal Kit">
                <div className="flex flex-wrap gap-2">
                  {category.tools.map(tool => (
                    <span
                      key={tool}
                      className="rounded border border-green-500/30 bg-green-500/5 px-2 py-1 text-xs uppercase tracking-[0.3em] text-green-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Section>
            ) : null}

            {category.proofPoints && category.proofPoints.length > 0 ? (
              <Section title="Proof">
                <ul className="space-y-2 text-xs text-gray-300">
                  {category.proofPoints.map(point => (
                    <li key={point} className="flex gap-2">
                      <span className="text-green-300">✔</span>
                      <span>{point}</span>
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
}

function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h3 className="text-xs uppercase tracking-[0.35em] text-green-400">{title}</h3>
      <div className="mt-2 space-y-2 border-l border-green-500/20 pl-4">{children}</div>
    </section>
  );
}

export default SkillDetailWindow;
