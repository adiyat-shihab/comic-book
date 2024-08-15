"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    // <div className={"shadow shadow-[#4f72cd33] h-screen  w-56 px-6 py-10"}>
    //   <h1>Book Library</h1>
    //   <div className={" space-y-5 mt-20 flex flex-col"}>
    //     <Link
    //       href={"/all"}
    //       className={
    //         "flex items-center gap-4  text-[#5c5589] font-medium tracking-wide"
    //       }
    //     >
    //       {" "}
    //       <Image src={"home.svg"} alt={"home"} width={20} height={20} /> For You
    //     </Link>
    //     <Link
    //       className={
    //         "flex items-center gap-4  text-[#5c5589] font-medium tracking-wide"
    //       }
    //       href={"/collection"}
    //     >
    //       <Image src={"collection.svg"} alt={"home"} width={20} height={20} />
    //       Collection
    //     </Link>
    //     <Link
    //       className={
    //         "flex items-center gap-4  text-[#5c5589] font-medium tracking-wide"
    //       }
    //       href={"/profile"}
    //     >
    //       <Image src={"settings.svg"} alt={"home"} width={20} height={20} />
    //       Settings
    //     </Link>
    //   </div>
    // </div>

    <aside className="hidden w-64 flex-col border-r bg-background p-4 sm:flex">
      <h2 className="mb-4 text-lg font-semibold">Categories</h2>

      <Button
        variant={selectedCategory === "all" ? "secondary" : "ghost"}
        onClick={() => setSelectedCategory("all")}
        className="justify-start"
      >
        <Link href={"/all"} className={"w-full text-left"}>
          All{" "}
        </Link>
      </Button>

      <Button
        variant={selectedCategory === "marvel" ? "secondary" : "ghost"}
        onClick={() => setSelectedCategory("marvel")}
        className="justify-start"
      >
        {" "}
        <Link href={"/marvel"} className={"w-full text-left"}>
          Marvel{" "}
        </Link>
      </Button>

      <Button
        variant={selectedCategory === "dc" ? "secondary" : "ghost"}
        onClick={() => setSelectedCategory("dc")}
        className="justify-start"
      >
        {" "}
        <Link href={"/dc"} className={"w-full text-left"}>
          DC{" "}
        </Link>
      </Button>

      <Button
        variant={selectedCategory === "indie" ? "secondary" : "ghost"}
        onClick={() => setSelectedCategory("indie")}
        className="justify-start"
      >
        {" "}
        <Link href={"/indie"} className={"w-full text-left"}>
          Indie{" "}
        </Link>
      </Button>
    </aside>
  );
};

export default Sidebar;
