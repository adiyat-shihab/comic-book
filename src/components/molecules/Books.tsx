import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Books = ({ books }) => {
  console.log(books);
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <div className={""}>
      <Carousel
        opts={{
          align: "start",
          dragFree: "true",
        }}
        className="w-full "
      >
        <CarouselContent>
          {books.containers.map((book, index) => (
            <CarouselItem key={index} className=" basis-1/6 -mr-8">
              <Image
                src={book.image}
                alt={"book cover"}
                width={220}
                height={220}
                className={"w-[220px] h-[340px]"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Books;
