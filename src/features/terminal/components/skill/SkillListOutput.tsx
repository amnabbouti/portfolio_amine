import type { SkillCategorySummary } from '@/types';

interface SkillListOutputProps {
  items: SkillCategorySummary[];
  onSelect: (slug: string) => void;
}

export function SkillListOutput({ items, onSelect }: SkillListOutputProps) {
  if (items.length === 0) {
    return (
      <div className="mt-2 rounded border border-gray-700/60 bg-gray-900/40 px-4 py-3 text-sm text-gray-400">
        No skill dossiers registered. Engage curiosity protocols and check back later.
      </div>
    );
  }

  return (
    <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
      {items.map(item => (
        <button
          key={item.slug}
          type="button"
          onClick={() => onSelect(item.slug)}
          className="h-full w-full text-left group rounded border border-gray-700/60 bg-gray-900/40 px-4 py-3 font-mono text-sm text-gray-200 transition-colors duration-150 hover:bg-gray-900/70"
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-500">
            <span>{item.label}</span>
            <span className="text-cyan-400 group-hover:text-green-400">OPEN &gt;</span>
          </div>
          <div className="mt-3 text-lg font-semibold text-green-300 group-hover:text-green-200">{item.teaser}</div>
          <div className="mt-3 text-xs text-gray-400">stack &gt;</div>
          <ul className="mt-1 space-y-1 text-xs text-gray-300">
            {item.primaryTools.map(tool => (
              <li key={tool} className="flex items-center gap-2">
                <span className="text-green-400">&gt;</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </button>
      ))}
    </div>
  );
}

export default SkillListOutput;
