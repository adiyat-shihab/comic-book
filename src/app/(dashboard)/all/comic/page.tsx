import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import * as cheerio from "cheerio";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import parse from "node-html-parser";

export default async function Component() {
  const url = "https://readcomiconline.li/ComicList/MostPopular";
  const rcoFetchB = await axios.get(
    "https://readcomiconline.li/ComicList/MostPopular",
  );
  const apikey = "ec712a2d01a203ac5539801d92ce113f492dd9f1";

  const $ = await cheerio.fromURL(
    "https://readcomiconline.li/ComicList/MostPopular",
  );
  const rcoFetch = $.html();
  console.log(rcoFetch);

  const root = parse(rcoFetch);
  const comicData: Array<{ title: string; issue: string; imageUrl: string }> =
    [];
  const comicList = root.querySelector(".item-list");
  if (comicList) {
    const comics = comicList.querySelectorAll(".section.group.list");

    comics.forEach((comic) => {
      const titleElement = comic.querySelector(".col.info p a");
      const title = titleElement ? titleElement.text : "No title";

      const issueElement = comic.querySelector(".col.info p:nth-child(2)");
      const issue = issueElement ? issueElement.text.trim() : "No issue info";

      const imageElement = comic.querySelector(".col.cover img");
      let imageUrl = imageElement
        ? imageElement.getAttribute("src")!
        : "No image";
      if (imageUrl.includes("/Uploads/Etc")) {
        imageUrl = "https://readcomiconline.li" + imageUrl;
      }
      comicData.push({ title, issue, imageUrl });
    });
  }
  console.log(comicData);
  // if (postListPosts) {
  //   // Find all article elements within post-list-posts
  //   const articles = postListPosts.querySelectorAll("article");
  //
  //   articles.forEach((article) => {
  //     // Extract heading
  //     const heading = article.querySelector(".post-title a").textContent;
  //
  //     // Extract image URL
  //     const imageUrl = article
  //       .querySelector(".post-header-image img")
  //       .getAttribute("src");
  //
  //     // Extract post excerpt
  //     const excerpt = article.querySelector(".post-excerpt").textContent;
  //
  //     // Extract post meta information
  //     const comments = article.querySelector(
  //       ".post-meta-comments a",
  //     ).textContent;
  //     const date = article.querySelector(".post-meta-date time").textContent;
  //
  //     console.log("Heading:", heading);
  //     console.log("Image URL:", imageUrl);
  //     console.log("Excerpt:", excerpt);
  //     console.log("Comments:", comments);
  //     console.log("Date:", date);
  //     console.log("---");
  //   });
  // } else {
  //   console.log('No element with class "post-list-posts" found.');
  // }
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-full">
        <main className="flex-1 p-4 sm:p-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {comicData?.map((comic) => {
              // const parts = comic.readOnline.split("/comic/");
              //
              // // Take the second part (index 1) which is everything after "/comic/"
              // const result = parts[1];
              //
              // // Output: "ms-marvel-annual/1"
              return (
                <>
                  <div
                    key={comic.title}
                    className={
                      "rounded-lg border bg-background group p-4 shadow-sm"
                    }
                  >
                    <div className="relative">
                      <Image
                        src={comic.imageUrl}
                        alt="Comic Book Cover"
                        width={300}
                        height={450}
                        className="mx-auto mb-4 h-[350px] w-[250px] rounded-md object-cover group-hover:opacity-50 transition-opacity"
                        style={{ aspectRatio: "300/450", objectFit: "cover" }}
                      />
                      <div className="absolute inset-0 flex items-center gap-2 justify-center">
                        <Button className="opacity-0 group-hover:opacity-100 transition-opacity">
                          {/*<Link href={`/${result}`} className={"w-full"}>*/}
                          {/*  Read*/}
                          {/*</Link>*/}
                        </Button>
                        <Menubar className="opacity-0  group-hover:opacity-100 transition-opacity">
                          <MenubarMenu>
                            <MenubarTrigger className={"cursor-pointer"}>
                              Download
                            </MenubarTrigger>
                            {/*<MenubarContent>*/}
                            {/*  <MenubarItem*/}
                            {/*    className={*/}
                            {/*      comic.mediafire ? "cursor-pointer" : "hidden"*/}
                            {/*    }*/}
                            {/*  >*/}
                            {/*    <Link*/}
                            {/*      href={comic.mediafire}*/}
                            {/*      target={"_blank"}*/}
                            {/*      className={"w-full"}*/}
                            {/*    >*/}
                            {/*      Mediafire*/}
                            {/*    </Link>*/}
                            {/*  </MenubarItem>*/}
                            {/*  <MenubarItem*/}
                            {/*    className={*/}
                            {/*      comic.mega ? "cursor-pointer" : "hidden"*/}
                            {/*    }*/}
                            {/*  >*/}
                            {/*    <Link*/}
                            {/*      href={comic.mega}*/}
                            {/*      target={"_blank"}*/}
                            {/*      className={"w-full"}*/}
                            {/*    >*/}
                            {/*      Mega*/}
                            {/*    </Link>*/}
                            {/*  </MenubarItem>*/}
                            {/*  <MenubarItem*/}
                            {/*    className={*/}
                            {/*      comic.ufile ? "cursor-pointer" : "hidden"*/}
                            {/*    }*/}
                            {/*  >*/}
                            {/*    <Link*/}
                            {/*      href={comic.ufile}*/}
                            {/*      target={"_blank"}*/}
                            {/*      className={"w-full"}*/}
                            {/*    >*/}
                            {/*      Terabox*/}
                            {/*    </Link>*/}
                            {/*  </MenubarItem>*/}
                            {/*</MenubarContent>*/}
                          </MenubarMenu>
                        </Menubar>
                      </div>
                    </div>
                    <div className="space-y-1 px-4">
                      <h3 className="text-lg font-semibold">{comic.title}</h3>
                      <p className="text-muted-foreground">{comic.issue}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
