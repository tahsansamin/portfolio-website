interface CertificationItemProps {
  title: string;
  date: string;
}

export default function CertificationItem({ title, date }: CertificationItemProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-zinc-800/50 last:border-0 group">
      <h3 className="text-lg font-medium text-white group-hover:text-amber-500 transition-colors">{title}</h3>
      <span className="font-mono text-zinc-500 text-sm mt-1 sm:mt-0">{date}</span>
    </div>
  );
}
