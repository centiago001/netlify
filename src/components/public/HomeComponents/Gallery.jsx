import Heading2 from "@components/Heading2";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  return (
    <section className="my-6">
      <div className="max-w-screen-xl mx-auto container p-3 flex flex-wrap">
        <div className=" w-full mb-20 flex-wrap">
          <Heading2 headingText={"Gallery"} />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            <FontAwesomeIcon
              className="text-gray-400 text-xl mx-1"
              icon={faQuoteLeft}
            />
            Explore the essence of our lab through captivating images, where
            every picture tells a story of knowledge, growth, and unforgettable
            memories.
            <FontAwesomeIcon
              className="text-gray-400 text-xl mx-1"
              icon={faQuoteRight}
            />
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap md:w-1/2">
            <div className={`md:p-2 p-1 w-1/2`}>
              <Image
                alt="gallery"
                className={` w-full object-cover h-full object-center block`}
                width={250}
                height={150}
                src={
                  "/GroupPhoto-6.jpg"
                }
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                width={250}
                height={150}
                src={
                  "/GroupPhoto-2.jpg"
                }
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-60 lg:h-80 object-cover object-center block"
                src={
                  "/GroupPhoto-7.jpg"
                }
                width={500}
                height={300}
              />
            </div>
          </div>
          {/* ========= */}
          <div className={` flex flex-wrap md:w-1/2`}>
            <div className=" md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-60 lg:h-80 object-cover object-center block"
                src={
                  "/GroupPhoto-3.jpg"
                }
                height={300}
                width={500}
              />
            </div>

            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={
                  "/GroupPhoto-1.jpg"
                }
                width={250}
                height={150}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={
                  "/GroupPhoto-5.jpg"
                }
                width={250}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
