import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  console.log(theme);

  return (
    <>
      <Button variant="outline" size="icon">
        {theme === "dark" ? (
          <Sun
            onClick={() => setTheme("light")}
            className="h-[1.2rem] w-[1.2rem] dark:-rotate-180 dark:scale-0"
          />
        ) : (
          <Moon
            onClick={() => setTheme("dark")}
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        )}
        {/* <span className="sr-only">Toggle theme</span> */}
      </Button>
    </>
  );
}
