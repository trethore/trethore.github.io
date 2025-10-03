'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Switch } from '@/components/ui/switch';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2.5">
        <Sun className="h-[1.1rem] w-[1.1rem] text-muted-foreground/50" />
        <div className="h-5 w-9 rounded-full bg-muted-foreground/20 border-2 border-muted-foreground/30" />
        <Moon className="h-[1.1rem] w-[1.1rem] text-muted-foreground/50" />
      </div>
    );
  }

  const handleThemeChange = (checked: boolean) => {
    const newTheme = checked ? 'dark' : 'light';

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <div className="flex items-center gap-2.5">
      <Sun className="h-[1.1rem] w-[1.1rem] text-foreground/70 dark:text-muted-foreground" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={handleThemeChange}
        aria-label="Toggle theme"
      />
      <Moon className="h-[1.1rem] w-[1.1rem] text-muted-foreground dark:text-foreground/70" />
    </div>
  );
}
