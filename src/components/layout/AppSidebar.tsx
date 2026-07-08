import {
  LayoutDashboard,
  Calendar,
  NotebookPen,
  ClipboardList,
  BarChart3,
  Wallet,
  Settings,
} from "lucide-react";
const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Timetable", icon: Calendar },
  { name: "Assignments", icon: NotebookPen },
  { name: "Notes", icon: ClipboardList },
  { name: "Attendence", icon: BarChart3 },
  { name: "Expenses", icon: Wallet },
  { name: "Settings", icon: Settings },
];
export default function AppSidebar() {
  return (
    <aside className="w-64 h-screen bg-zinc-900 text-white flex flex-col border-r border-zinc-800">
      <div className="p-4 text-lg font-bold border-b border-zinc-800">
        Student Dashboard
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className="w-flex items-center gap-3 p-2 rounded hover:bg-zinc-800 transition-colors"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
