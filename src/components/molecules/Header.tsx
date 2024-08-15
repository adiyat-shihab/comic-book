"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 border-b bg-background px-4 py-3 sm:px-6">
      <h1 className="text-2xl font-bold">My Comic Book Library</h1>
      <div className="relative flex-1">
        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search comics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
    </header>
  );
};

export default Header;
