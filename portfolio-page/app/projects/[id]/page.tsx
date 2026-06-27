import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <div className="flex flex-col min-h-screen bg-[#111111] font-sans text-zinc-300">
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto py-20 px-6 flex flex-col gap-8">
        <Link href="/#projects" className="flex items-center gap-2 text-amber-500 hover:text-amber-400 w-fit transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-mono text-sm">Back to Projects</span>
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white capitalize">
          {id.replace(/-/g, ' ')}
        </h1>
        
        <div className="text-zinc-400 text-lg space-y-6">
          <p>
            This is a detailed view for the <strong>{id}</strong> project. You can add more comprehensive information,
            architecture diagrams, challenges faced, and larger screenshots here.
          </p>
          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-zinc-800/50">
            <h2 className="text-xl font-bold text-white mb-4">Project Architecture</h2>
            <div className="h-64 bg-zinc-800/30 rounded-lg border border-dashed border-zinc-700/50 flex items-center justify-center">
              <span className="font-mono text-zinc-500">Architecture Diagram Placeholder</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
