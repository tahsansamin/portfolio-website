import ProjectDetailLayout from "@/app/components/ProjectDetailLayout";

export default function PygameProjectsPage() {
  return (
    <ProjectDetailLayout
      title="Pygame Projects"
      eyebrow="Project Overview"
      description="A collection of early Python and Pygame experiments from 2019-2020 that helped me build confidence in game development and core programming concepts."
      overview="These projects include playful recreations and original mini-games such as Flappy Bird, Space Dodgers, Tic-Tac-Toe, and a paint app. They reflect an early stage of my learning journey where I focused on building interactive experiences, understanding game loops, and strengthening Python fundamentals."
      highlights={[
        "Built several small games and interactive tools with Python and Pygame.",
        "Explored core game development concepts such as input handling, animation, collision logic, and simple UI.",
        "Used these projects as a foundation for learning how to structure playful, engaging software projects."
      ]}
    />
  );
}
