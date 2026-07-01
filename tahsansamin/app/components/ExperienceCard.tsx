export default function ExperienceCard({
  title,
  company,
  startDate,
  endDate,
  description,
}: {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}) {
  return (
    <div className="bg-[#1a1a1a] border border-zinc-800/50 rounded-xl p-8 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-amber-500 font-medium mt-1">{company}</p>
        </div>
        <span className="font-mono text-zinc-500 text-sm whitespace-nowrap">
          {startDate} — {endDate}
        </span>
      </div>
      
      <ul className="list-disc list-outside ml-4 text-zinc-400 space-y-2 mt-2">
        {description.map((item, index) => (
          <li key={index} className="pl-1 leading-relaxed text-sm md:text-base">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
