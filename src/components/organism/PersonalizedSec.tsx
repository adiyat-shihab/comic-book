import Books from "@/components/molecules/Books";
import { COMICS } from "@consumet/extensions";

const PersonalizedSec = async ({ title }) => {
  // const bookData = await fetch(
  //   `https://www.googleapis.com/books/v1/volumes?q=new 52 justice league&maxResults=30&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
  // )
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err));
  const comics = new COMICS.GetComics();
  const comicData = await comics.search("New 52");
  return (
    <div>
      <h1 className={"text-sky-950 text-[21.10px] font-bold  leading-[30px]"}>
        {title}
      </h1>
      <Books books={comicData} />
    </div>
  );
};

export default PersonalizedSec;
