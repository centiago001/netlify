import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Heading2 from "@components/Heading2";

const PrincipleMsg = () => {
  return (
    <section className="bg-gray-100 py-8">
      <Heading2 headingText={"Group Leader Message"} />
      <div className="max-w-screen-md grid md:grid-cols-2 gap-16 mx-auto p-3">
        <div className="grid h-full w-full rounded-lg overflow-hidden">
          <div className="h-full w-full overflow-hidden">
            <Image
              className="w-full hover:scale-110 duration-500 cursor-pointer"
              src="/dr.jpg"
              height={300}
              width={300}
              alt="Group Leader AEMS"
            />
          </div>

          <p className=" cursor-pointer bg-primary-regular text-center p-2 w-full text-white font-semibold">
          Group Leader AEMS.
          </p>
        </div>

        <div className="animation-on-scroll flex justify-center flex-col">
          <FontAwesomeIcon
            className="text-5xl text-slate-400"
            icon={faQuoteLeft}
          />
          <p className="text-center">
            Dear students, welcome to the Department of Materials Science and Engineering. Here, we foster curiosity, innovation, and excellence to help you grow and achieve your dreams. Explore, question, and embrace opportunities as we embark on a journey of knowledge and discovery together. Wishing you a rewarding and enriching academic experience!
          </p>
          <div className="text-right my-4">
            <p className="font-semibold">Dr. Ankur Goswami<br/>
Assistant Professor, IIT Delhi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipleMsg;
