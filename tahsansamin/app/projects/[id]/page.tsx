import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const projectDetails = {
  "glimpse-uganda": {
    title: "GlimpseUganda",
    description:
      "A tourism-focused assistant that helps travelers explore destinations through an interactive map and conversational search experience.",
    overview:
      "The project combines a React frontend with a FastAPI backend to make travel information feel more accessible, contextual, and useful for real-world discovery.",
    highlights: [
      "Built a document ingestion pipeline that validates and prepares travel content before indexing it in Pinecone.",
      "Used retrieval-augmented generation so the chatbot can answer questions with grounded, location-aware context.",
    ],
  },
  "street-watch": {
    title: "StreetWatch",
    description:
      "A road-surveillance app that verifies uploaded images using an EfficientNet-based machine learning workflow.",
    overview:
      "The system focuses on practical deployment details such as client-side image compression, spatial deduplication, and reliable backend processing for evidence review.",
    highlights: [
      "Implemented image compression and upload handling to reduce bandwidth and improve efficiency.",
      "Integrated a PyTorch model pipeline for classification and verification of uploaded road images.",
    ],
  },
  "rubis-data-entry": {
    title: "Rubis Data Entry Agent",
    description:
      "An agentic data entry experience that parses natural language instructions and populates spreadsheets with structured reasoning loops.",
    overview:
      "This project highlights the use of LangGraph and tool-calling patterns to create a more reliable and explainable automation workflow for repetitive business tasks.",
    highlights: [
      "Designed an agent workflow that can interpret user intent and execute sequential data-entry steps.",
      "Used tool-calling and reasoning loops to improve reliability for spreadsheet population tasks.",
    ],
  },
  "ucf-crime-dataset": {
    title: "UCF Crime Dataset CV",
    description:
      "A computer vision project for classifying criminal activity in CCTV footage and extracting the most relevant clips.",
    overview:
      "The work centers on training a video classification model that can identify distinct activity types from surveillance footage.",
    highlights: [
      "Fine-tuned a SlowFast CNN architecture to recognize 11 crime-related activity classes.",
      "Built a workflow for targeted clip extraction to support downstream review and analysis.",
    ],
  },
  "pygame-projects": {
    title: "Pygame Projects",
    description:
      "A collection of early Python and Pygame experiments from 2019-2020 that helped me build confidence in game development and programming fundamentals.",
    overview:
      "These projects include mini-games and interactive tools such as Flappy Bird, Space Dodgers, Tic-Tac-Toe, and a paint app, reflecting an early stage of learning where I focused on building engaging experiences.",
    highlights: [
      "Built several small games and interactive applications with Python and Pygame.",
      "Explored game development concepts like input handling, animation, collisions, and simple UI.",
      "Used these projects as a foundation for learning how to structure playful software projects.",
    ],
  },
  "notes-app": {
    title: "Notes App",
    description:
      "One of my first full-stack applications, built with React and Django to create a simple notes experience with a modern frontend and backend persistence.",
    overview:
      "This project reflects my early work building a complete web application end to end, connecting a React frontend to a Django backend and learning how data flows through a full-stack system.",
    highlights: [
      "Built a full-stack notes application using React and Django.",
      "Learned how to connect frontend interfaces with backend persistence.",
      "Used the project as a stepping stone for more complex web applications later on.",
    ],
  },
  "cpsc-210-gym-tracker": {
    title: "CPSC 210 Gym Tracker App",
    description:
      "As part of my CPSC 210 coursework, I built a gym tracker app in Java that demonstrates object-oriented programming fundamentals and unit testing practices.",
    overview:
      "This project helped me practice core software engineering skills in Java, including clean class design, maintainable code structure, and test-driven development with JUnit.",
    highlights: [
      "Implemented a gym tracking application in Java with object-oriented design principles.",
      "Built unit tests to verify functionality and strengthen reliability.",
      "Used the project to deepen my understanding of software engineering fundamentals.",
    ],
  },
} as const;

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] font-sans text-zinc-300">
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto py-20 px-6 flex flex-col gap-8">
        <Link href="/#projects" className="flex items-center gap-2 text-amber-500 hover:text-amber-400 w-fit transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-mono text-sm">Back to Projects</span>
        </Link>

        <div className="space-y-4">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-amber-500">Project Overview</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-400">{project.description}</p>
        </div>

        <div className="text-zinc-400 text-lg space-y-6">
          <p>{project.overview}</p>

          <div className="p-6 bg-[#1a1a1a] rounded-xl border border-zinc-800/50">
            <h2 className="text-xl font-bold text-white mb-4">Highlights</h2>
            <ul className="space-y-3 text-zinc-400">
              {project.highlights.map((highlight) => (
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
