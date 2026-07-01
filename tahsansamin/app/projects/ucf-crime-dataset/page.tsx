import ProjectDetailLayout from "@/app/components/ProjectDetailLayout";

export default function UcfCrimeDatasetPage() {
  return (
    <ProjectDetailLayout
      title="UCF Crime Dataset CV"
      eyebrow="Project Overview"
      description="A computer vision project for classifying criminal activity in CCTV footage and extracting the most relevant clips."
      overview="The work centers on training a video classification model that can identify distinct activity types from surveillance footage."
      highlights={[
        "Fine-tuned a SlowFast CNN architecture to recognize 11 crime-related activity classes.",
        "Built a workflow for targeted clip extraction to support downstream review and analysis.",
        "Explored how computer vision can support practical monitoring and investigation workflows."
      ]}
    />
  );
}
