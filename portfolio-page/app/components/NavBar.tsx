import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full border-b border-zinc-800/50 bg-[#111111]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-mono font-bold text-lg tracking-tight">
          <Link href="/">
            <span className="text-amber-500">tahsansamin</span>
            <span className="text-zinc-500">.dev</span>
          </Link>
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-mono">
          <li><Link href="#about" className="text-zinc-400 hover:text-white transition-colors">about</Link></li>
          <li><Link href="#education" className="text-zinc-400 hover:text-white transition-colors">education</Link></li>
          <li><Link href="#experience" className="text-zinc-400 hover:text-white transition-colors">experience</Link></li>
          <li><Link href="#projects" className="text-zinc-400 hover:text-white transition-colors">projects</Link></li>
          <li><Link href="#awards" className="text-zinc-400 hover:text-white transition-colors">awards</Link></li>
          <li><Link href="#contact" className="text-zinc-400 hover:text-white transition-colors">contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
