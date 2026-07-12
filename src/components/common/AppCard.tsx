import type { ReactNode } from "react";
interface AppCardProps {
  title: string;
  children: ReactNode;
}
export default function AppCard({ title, children }: AppCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}
