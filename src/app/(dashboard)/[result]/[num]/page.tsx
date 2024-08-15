import { usePathname } from "next/navigation";
import axios from "axios";
import parse from "node-html-parser";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const Page = async () => {
  return (
    <div>
      <Drawer direction={"left"}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className={"w-1/3 rounded-r h-full rounded-l-[0rem]"}>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant={"outline"}>Submit</Button>
            <DrawerClose>
              <Button>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Page;
