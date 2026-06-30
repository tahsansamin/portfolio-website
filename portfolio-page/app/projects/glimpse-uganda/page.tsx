import ProjectDetailLayout from "@/app/components/ProjectDetailLayout";

export default function GlimpseUgandaPage() {
  return (
    <ProjectDetailLayout
      title="GlimpseUganda"
      eyebrow="Project Overview"
      description="An interactive tourism assistant that helps travelers discover destinations through a conversational map experience."
      overview="GlimpseUganda combines a React frontend with a FastAPI backend to turn travel content into an accessible, location-aware experience that feels useful in the moment."
      highlights={[
        "Built a document ingestion pipeline that validates and prepares travel content before indexing it in Pinecone.",
        "Implemented retrieval-augmented generation so the assistant can answer questions with grounded, location-aware context.",
        "Designed the experience to make destination discovery feel more intuitive for first-time visitors."
      ]}
    />
  );
}
