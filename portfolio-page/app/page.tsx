import NavBar from "@/app/components/NavBar";
import ProjectCard from "@/app/components/ProjectCard";
import ExperienceCard from "@/app/components/ExperienceCard";
import AwardItem from "@/app/components/AwardItem";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111111] font-sans text-zinc-300">
      <NavBar />
      <main className="flex-1 w-full max-w-6xl mx-auto py-20 px-6 flex flex-col gap-24">
        {/* Hero Section */}
        <section className="flex flex-col gap-6">
          <p className="font-mono text-amber-500 text-sm">// hello, world</p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
            Tahsan<br />
            <span className="text-amber-500">Samin .</span>
          </h1>
          <div className="max-w-2xl text-lg md:text-xl text-zinc-400 mt-4 space-y-6">
            <p>
              CS + Stats student at the University of British Columbia. I specialize in building RAG pipelines, agentic AI, and multi-step agent architectures.
            </p>
            <p>
              Experienced in Python, JavaScript, Java, React, and FastAPI. Passionate about machine learning and backend infrastructure.
            </p>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <a href="mailto:tahsansamin@gmail.com" className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors font-mono text-sm">
              <Mail className="w-4 h-4" />
              tahsansamin@gmail.com
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-amber-500 text-sm uppercase tracking-wider">// Education</h2>
            <div className="h-px bg-zinc-800/60 flex-1"></div>
          </div>

          <div className="bg-[#1a1a1a] border border-zinc-800/50 rounded-xl p-8 flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <h3 className="text-xl font-bold text-white">University of British Columbia</h3>
              <span className="font-mono text-amber-500 text-sm">Expected 2029</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 text-zinc-400">
              <p>CS + Stats (GPA: 93.4%)</p>
              <p className="font-mono text-sm">Vancouver, BC</p>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-amber-500 text-sm uppercase tracking-wider">// Awards</h2>
            <div className="h-px bg-zinc-800/60 flex-1"></div>
          </div>
          <div className="flex flex-col gap-6">
            <AwardItem
              title="Karen McKellin International Leader of Tomorrow Scholar"
              issuer="University of British Columbia"
              date="Current"
              description="Awarded a full ride scholarship, selected as 1 of 30 worldwide for outstanding academic achievement and leadership skills."
            />
            <AwardItem
              title="Dean's Scholar"
              issuer="University of British Columbia"
              date="Current"
              description="Recognized for exceptional academic excellence and maintaining top-tier grades in the Faculty of Science."
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-amber-500 text-sm uppercase tracking-wider">// Projects</h2>
            <div className="h-px bg-zinc-800/60 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              id="glimpse-uganda"
              title="GlimpseUganda"
              description="Interactive map-based chatbot for tourism accessibility. Engineered an ingestion pipeline validating documents with LLMs, syncing to Pinecone vector DB."
              techStack={["React", "FastAPI", "LangChain", "RAG", "Pinecone"]}
              codeLink="#"
              liveLink="#"
            />
            <ProjectCard 
              id="street-watch"
              title="StreetWatch"
              description="Road surveillance app verifying user-uploaded photos with an EfficientNet ML model. Implemented client-side image compression and spatial deduplication."
              techStack={["React", "FastAPI", "PyTorch", "Supabase"]}
              codeLink="#"
              liveLink="#"
            />
            <ProjectCard 
              id="rubis-data-entry"
              title="Rubis Data Entry Agent"
              description="Agentic data entry system using LangGraph that parses natural language and populates excel spreadsheets with reasoning loops and tool calling."
              techStack={["LangGraph", "Agentic AI", "React", "FastAPI"]}
              codeLink="#"
            />
            <ProjectCard 
              id="ucf-crime-dataset"
              title="UCF Crime Dataset CV"
              description="Fine-tuned Facebook's SlowFast CNN to classify 11 types of criminal activity from CCTV footage for targeted clip extraction."
              techStack={["PyTorch", "Scikit-learn", "NumPy", "Pandas"]}
              codeLink="#"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-amber-500 text-sm uppercase tracking-wider">// Experience</h2>
            <div className="h-px bg-zinc-800/60 flex-1"></div>
          </div>
          <div className="flex flex-col gap-6">
            <ExperienceCard
              title="Reinforcement Learning Researcher"
              company="UBC Undergraduate Research Organization"
              startDate="Sept 2025"
              endDate="Feb 2026"
              description={[
                "Selected as part of a mentorship program to conduct research on sampling experiences in experience replay.",
                "Designed a custom replay buffer that prioritizes experiences by learning gain as an alternative to temporal difference prioritization."
              ]}
            />
            <ExperienceCard
              title="ICT Operations Intern"
              company="United Nations High Commission for Refugees Uganda"
              startDate="Jul 2024"
              endDate="Aug 2024"
              description={[
                "Resolved hardware and software faults across 40-50+ devices a day including system setup and configuration.",
                "Managed refugee call center operations, web-conference set up and LAN cabling infrastructure."
              ]}
            />
            <ExperienceCard
              title="Hardware Intern"
              company="Millenium Infosys Uganda"
              startDate="May 2022"
              endDate="Jun 2022"
              description={[
                "Repaired and configured 80+ laptops and desktops daily including hardware upgrades and troubleshooting.",
                "Managed client-side technical complaints and provided rapid resolutions."
              ]}
            />
          </div>
        </section>

      </main>
    </div>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.3 0 0-1.2-.4-3.8 1.4a12.8 12.8 0 0 0-7 0C6.2 1.6 5 2 5 2a10 10 0 0 0-.1 3.3C3.9 6.2 3.4 7.3 3.4 8.7c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
