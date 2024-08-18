import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import * as cheerio from "cheerio";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import parse from "node-html-parser";
import Link from "next/link";

export default async function Component() {
  const url = "https://readcomiconline.li/ComicList/MostPopular";
  // const rcoFetchB = await axios.get(
  //   "https://readcomiconline.li/ComicList/MostPopular",
  // );
  const urlR = "https://readcomicsonline.ru/comic-list?cat=34";
  // const rcoFetchB = await axios({
  //   url: "https://api.zenrows.com/v1/",
  //   method: "GET",
  //   params: {
  //     url: url,
  //     apikey: process.env.ZENROWKEY,
  //   },
  // });
  const fetchR = await axios.get(urlR);
  const rootR = parse(fetchR.data);
  const contentDiv = rootR.querySelector(".content");
  const mediaDivs = contentDiv.querySelectorAll(".media");
  const results = mediaDivs.map((mediaDiv) => {
    const imgElement = mediaDiv.querySelector("img");
    const headingElement = mediaDiv.querySelector(".media-heading a");
    const issueElement = mediaDiv.querySelector("div.media-body div a ");
    const readSaurce = headingElement.getAttribute("href");

    return {
      imageUrl: imgElement ? `https:${imgElement.getAttribute("src")}` : "",
      heading: headingElement ? headingElement.textContent.trim() : "",
      issue: issueElement ? issueElement.textContent.trim() : "",
      url: readSaurce.split("/comic")[1],
    };
  });

  console.log(results);
  // const $ = await cheerio.fromURL(
  //   "https://readcomiconline.li/ComicList/MostPopular",
  // );
  // const rcoFetch = $.html();
  //
  // const root = parse(rcoFetchB.data);
  // const comicData: Array<{ title: string; issue: string; imageUrl: string }> =
  //   [];
  // const comicListB = root.querySelector(".item-list");
  // const comicList = root.querySelectorAll(".item");
  // if (comicList) {
  //   // const comicsB = comicList.querySelectorAll(".section.group.list");
  //   comicList.forEach((comic) => {
  //     const titleElementB = comic.querySelector(".col.info p a");
  //
  //     const titleElement = comicList.querySelector(".title");
  //     const title = titleElement ? titleElement.text : "No title";
  //
  //     const issueElementB = comic.querySelector(".col.info p:nth-child(2)");
  //     const issueElement = comic.querySelector("img");
  //     const issue = issueElement ? issueElement.text.trim() : "No issue info";
  //
  //     // const imageElement = comic.querySelector(".col.cover img");
  //     let imageUrl = imageElement
  //       ? imageElement.getAttribute("src")!
  //       : "No image";
  //     if (imageUrl.includes("/Uploads/Etc")) {
  //       imageUrl = "https://readcomiconline.li" + imageUrl;
  //     }
  //     comicData.push({ title, issue, imageUrl });
  //   });
  // }
  // console.log(comicData);
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
            {results?.map((comic) => {
              // const parts = comic.readOnline.split("/comic/");
              //
              // // Take the second part (index 1) which is everything after "/comic/"
              // const result = parts[1];
              //
              // // Output: "ms-marvel-annual/1"
              return (
                <>
                  <div
                    key={comic.heading}
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
                          <Link href={comic.url} className={"w-full"}>
                            Read
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-1 px-4">
                      <h3 className="text-lg font-semibold">{comic.heading}</h3>
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
