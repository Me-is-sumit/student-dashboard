import type { LucideIcon } from "lucide-react";
interface AssignmentItemProps {
  subject: string;
  title: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
  icon: LucideIcon;
}
export default function AssignmentItem({
  subject,
  title,
  dueDate,
  priority,
  icon: Icon,
}: AssignmentItemProps) {
  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{subject}</h3>
          <p className="text-sm text-zinc-500">{title}</p>
          <p className="text-sm text-zinc-500">{dueDate}</p>
          <p className="text-sm text-zinc-500">{priority}</p>
        </div>
        <div className="rounded-xl bg-zinc-100 p-3">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}
