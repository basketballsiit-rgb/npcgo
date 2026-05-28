import { Bell, Search, UserCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b bg-white px-6 shadow-sm">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search requests..."
            className="w-full appearance-none bg-background pl-8 shadow-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 hover:bg-muted transition-colors">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="h-8 w-px bg-border"></div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium">Admin User</span>
            <span className="text-xs text-muted-foreground">Vehicle Scheduler</span>
          </div>
          <UserCircle className="h-8 w-8 text-primary" />
        </div>
      </div>
    </header>
  );
}
