"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  Command,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { Button } from "@anishshobithps/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  //CommandShortcut, // Removed as per update
} from "@anishshobithps/ui/command";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="hidden items-center space-x-1 px-3 md:flex"
      >
        <div className="justify-content flex items-center gap-2">
          <Command className="h-4 w-4" />
          <span>K</span>
        </div>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </CommandItem>
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Source Code">
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <a
                href="https://github.com/yourusername/project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Repository
              </a>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
