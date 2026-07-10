import StatCard from "@/components/dashboard/StatCard";
import { BarChart3, ClipboardList, Calendar, Wallet } from "lucide-react";
export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p className="mt-2 text-zinc-500">
          Here's what's happening with your dashboard today.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Attendance" value="85%" icon={BarChart3} />
        <StatCard title="Assignments" value="5" icon={ClipboardList} />
        <StatCard title="Today's Classes" value="3" icon={Calendar} />
        <StatCard title="Monthly Budget" value="Rs.2500" icon={Wallet} />
      </div>
    </div>
  );
}
