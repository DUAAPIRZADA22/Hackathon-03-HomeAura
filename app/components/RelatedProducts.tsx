import { urlFor } from "../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Products {
  name: string;
  price: number;
  salesPrize?: number;
  tags?: string[];
  description: string;
  size?: string[];
  height?: number;
  width?: number;
  _id: string;
  quantity?: number;
  slug: {
    current: string;
  };
  index?: number;
  image: string;
}

const RelatedProducts = ({ product }: { product: Products }) => {
  return (
    <div className="relative flex flex-col cursor-pointer group md:max-w-[250px] md:min-w-[250px] mt-5"> 
      <div className="cursor-pointer z-0 relative group bg-gray-200 rounded overflow-hidden">
        <Link href={`/product/${product.slug.current}`}>
          <Image
            className="object-cover min-h-56 md:max-h-56 hover:scale-110 duration-200 overflow-hidden"
            src={urlFor(product.image).url()}
            height={250}
            width={250}
            alt={product.name}
          />
        </Link>
      </div>
      <div className="flex mt-3 justify-between items-center">
        <Link href={`/product/${product.slug.current}`}>
          <h2 className="">{product.name}</h2>
        </Link>
        <p className="text-sm font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default RelatedProducts;


