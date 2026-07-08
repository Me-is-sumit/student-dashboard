import type { ReactNode } from "react";
import AppSidebar from "./AppSidebar";
interface Props {
  children: ReactNode;
}
export default function AppLayout({ children }: Props) {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
