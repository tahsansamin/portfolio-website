import ProjectDetailLayout from "@/app/components/ProjectDetailLayout";

export default function StreetWatchPage() {
  return (
    <ProjectDetailLayout
      title="StreetWatch"
      eyebrow="Project Overview"
      description="A road-surveillance app that verifies uploaded images using an EfficientNet-based machine learning workflow."
      overview="StreetWatch focuses on practical deployment details such as client-side image compression, spatial deduplication, and reliable backend processing for evidence review."
      highlights={[
        "Implemented image compression and upload handling to reduce bandwidth and improve efficiency.",
        "Integrated a PyTorch model pipeline for classification and verification of uploaded road images.",
        "Built the experience around reliable, review-friendly evidence handling."
      ]}
    />
  );
}
