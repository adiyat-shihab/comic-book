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
  const request = await axios.get(
    `https://readcomicsonline.ru/comic/batman-2016`,
  );
  const body = await request.data;

  // Parse the HTML
  const root = parse(body);

  // Get the title
  const titleElement = root.querySelector(".container h2");
  console.log(titleElement);
  const title = titleElement ? titleElement.text.trim() : "";

  // Get the image URL
  const imageElement = root.querySelector(".img-responsive");
  const image = imageElement
    ? `https:${imageElement.getAttribute("src").trim()}`
    : "";

  // Get the type
  const typeElement = root.querySelector(".dl-horizontal > dd:nth-child(2)");
  const type = typeElement ? typeElement.text.trim() : "";

  // Get authors (commented out but included for reference)
  const authors = [];
  const authorElements = root.querySelectorAll(
    ".dl-horizontal > dd:nth-child(8) a",
  );
  authorElements.forEach((element) => {
    authors.push({ name: element.text.trim() });
  });

  // Get categories
  const categories = [];
  const categoryElements = root.querySelectorAll(
    ".dl-horizontal > dd:nth-child(12) a",
  );
  categoryElements.forEach((element) => {
    categories.push({ categoryName: element.text.trim() });
  });

  // Get chapters
  const chapters = [];
  const chapterElements = root.querySelectorAll(".chapters li");
  chapterElements.forEach((item) => {
    const titleElement = item.querySelector("h5:nth-child(1) > a:nth-child(1)");
    const urlRaw = titleElement ? titleElement.getAttribute("href") : "";
    const dateElement = item.querySelector(
      "div:nth-child(2) > div:nth-child(1)",
    );
    const date = dateElement ? dateElement.text.trim() : "";

    const chapter = {
      title: titleElement ? titleElement.text.trim() : "",
      urlRaw,
      url: `http://localhost:3000/comic/batman-2016/${urlRaw.substr(urlRaw.lastIndexOf("/") + 1)}`,
      date,
    };
    chapters.push(chapter);
  });

  // Construct the results object
  const results = {
    title,
    image,
    type,
    // status,
    // otherName,
    // authors,
    // dateRelease,
    categories,
    // views,
    // description,
    chapters,
  };

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
