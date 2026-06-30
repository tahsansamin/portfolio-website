import ProjectDetailLayout from "@/app/components/ProjectDetailLayout";

export default function RubisDataEntryPage() {
  return (
    <ProjectDetailLayout
      title="Rubis Data Entry Agent"
      eyebrow="Project Overview"
      description="An agentic data entry experience that parses natural language instructions and populates spreadsheets with structured reasoning loops."
      overview="This project highlights the use of LangGraph and tool-calling patterns to create a more reliable and explainable automation workflow for repetitive business tasks."
      highlights={[
        "Designed an agent workflow that can interpret user intent and execute sequential data-entry steps.",
        "Used tool-calling and reasoning loops to improve reliability for spreadsheet population tasks.",
        "Focused on making the workflow transparent and easier to trust in real operations."
      ]}
    />
  );
}
