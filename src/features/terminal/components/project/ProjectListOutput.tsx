import type { ProjectListItem } from '@/types';

interface ProjectListOutputProps {
  items: ProjectListItem[];
  onSelect: (slug: string) => void;
}

export function ProjectListOutput({ items, onSelect }: ProjectListOutputProps) {
  if (items.length === 0) {
    return <div className="text-gray-500 text-sm mt-2">No projects found. Check back later.</div>;
  }

  return (
    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map(item => (
        <button
          key={item.slug}
          type="button"
          onClick={() => onSelect(item.slug)}
          className="w-full text-left group border border-gray-700/60 bg-gray-900/40 hover:bg-gray-900/70 transition-colors duration-150 rounded px-4 py-3"
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-wider text-gray-500">
            <span>{item.slug}</span>
            <span className="text-cyan-400 group-hover:text-green-400">OPEN ⏎</span>
          </div>
          <div className="text-lg font-semibold text-green-300 group-hover:text-green-200">
            {item.title}
          </div>
          <div className="text-sm text-gray-300">{item.summary}</div>
        </button>
      ))}
    </div>
  );
}

export default ProjectListOutput;
