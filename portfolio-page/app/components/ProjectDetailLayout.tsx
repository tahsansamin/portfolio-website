import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NavBar from "@/app/components/NavBar";

interface ProjectDetailLayoutProps {
  title: string;
  eyebrow: string;
  description: string;
  overview: string;
  highlights: string[];
}

export default function ProjectDetailLayout({
  title,
  eyebrow,
  description,
  overview,
  highlights,
}: ProjectDetailLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#111111] font-sans text-zinc-300">
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto py-20 px-6 flex flex-col gap-8">
        <Link
          href="/" 
          className="flex items-center gap-2 text-amber-500 hover:text-amber-400 w-fit transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-mono text-sm">Back to Portfolio</span>
        </Link>

        <div className="space-y-4">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-amber-500">{eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{title}</h1>
          <p className="text-lg text-zinc-400">{description}</p>
        </div>

        <div className="text-zinc-400 text-lg space-y-6">
          <p>{overview}</p>

          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-zinc-800/50">
            <h2 className="text-xl font-bold text-white mb-4">Highlights</h2>
            <ul className="space-y-3 text-zinc-400">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
