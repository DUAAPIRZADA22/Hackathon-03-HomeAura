import Image from "next/image";
import React from "react";
import Link from "next/link";

interface PropsType {
  direction: boolean;
  heading: string;
  image: string;
}
const Section = ({
  heading,
  image,
  direction,
}: PropsType) => {
  return (
    <div
      className={`w-full flex ${
        direction ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col-reverse"
      } bg-lightGray`}
    >
      <TextSection
        heading={heading}
      />
      <ImageSection image={image} />
    </div>
  );
};

export default Section;

const TextSection = ({
  heading,
}: {
  heading: string;
}) => {
  return (
    <section className="xs:h-[450px] max-xs:gap-5 md:w-1/2 w-full text-darkPrimary py-12 flex flex-col justify-between sm:px-20 px-5">
      <span className="flex flex-col gap-5">
        <h2 className="xs:text-2xl text-xl font-clash">
          {heading}
        </h2>
        <p className="xs:text-sm text-xs">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.
        </p>
        <p className="xs:text-sm text-xs">
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the
          London interior design community.
        </p>
      </span>
      <Link href="/about">
      <button className="bg-darkPrimary text-white w-full sm:w-[120px] h-[56px] flex items-center justify-center font-satoshi rounded-md sm:rounded-none">
            Get in touch
          </button>
      </Link>
    </section>
  );
};
const ImageSection = ({ image }: { image: string }) => {
  return (
    <section className="relative h-[450px] md:w-1/2 w-full overflow-hidden">
      <Image src={image} alt="" fill={true} className="object-cover hover:grayscale duration-500 cursor-pointer" />
    </section>
  );
};