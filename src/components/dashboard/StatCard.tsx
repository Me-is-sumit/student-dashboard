import type { LucideIcon } from "lucide-react";
interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}
export default function StatCard({ title, value, icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transiton hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500">{title}</p>
          <h2 className="mt-2 text-2xl font-bold">{value}</h2>
        </div>
        <div className="rounded-xl bg-zinc-100 p-3">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}
