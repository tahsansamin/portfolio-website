import Link from "next/link";
import { ExternalLink, Code2, Play } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  codeLink?: string;
  demoLink?: string;
  liveLink?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  techStack,
  codeLink,
  demoLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-[#1a1a1a] border border-zinc-800/50 rounded-xl p-6 hover:border-amber-500/50 transition-colors flex flex-col gap-4 h-full">
      <Link href={`/projects/${id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View Project Details</span>
      </Link>
      
      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-zinc-400 text-sm flex-1 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-zinc-800/50 text-amber-500/80 text-xs font-mono rounded-md border border-zinc-700/50">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-zinc-800/50 relative z-20">
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-mono">
            <Code2 className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-mono">
            <Play className="w-4 h-4" />
            <span>Demo</span>
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-mono">
            <ExternalLink className="w-4 h-4" />
            <span>Live App</span>
          </a>
        )}
      </div>
    </div>
  );
}
