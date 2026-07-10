import { Search, Bell, User } from "lucide-react";
export default function AppHeader() {
  return (
    <header className="w-full h-16 bg-zinc-800 flex items-center justify-between px-4 border-b border-zinc-700">
      <div>
        <h1 className="text-lg font-bold text-white">Student Dashboard</h1>
        <p className="text-sm text-zinc-400">Welcome back, Student!</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-white-700 transition-colors">
          <Search size={20} />
        </button>
        <button className="p-2 rounded-lg hover:bg-white-700 transition-colors">
          <Bell size={20} />
        </button>
        <button className="p-2 rounded-lg hover:bg-white-700 transition-colors">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}
