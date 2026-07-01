import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full border-b border-zinc-800/50 bg-[#111111]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-mono font-bold text-lg tracking-tight">
          <Link href="/">
            <span className="text-amber-500">tahsansamin</span>
           
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-mono">
          <Link href="#about" className="text-zinc-400 hover:text-white transition-colors">about</Link>
          <Link href="#education" className="text-zinc-400 hover:text-white transition-colors">education</Link>
          <Link href="#experience" className="text-zinc-400 hover:text-white transition-colors">experience</Link>
          <Link href="#projects" className="text-zinc-400 hover:text-white transition-colors">projects</Link>
          <Link href="#awards" className="text-zinc-400 hover:text-white transition-colors">awards</Link>
          <Link href="#contact" className="text-zinc-400 hover:text-white transition-colors">contact</Link>
          <a
            href="https://github.com/tahsansamin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/tahsan-samin-44b9801b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            linkedin
          </a>
          <a
            href="/tahsan%20samin%20resume%20tech.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-amber-400 transition-colors hover:bg-amber-500/20 hover:text-amber-300"
          >
            view my resume
          </a>
        </div>
      </div>
    </nav>
  );
}
