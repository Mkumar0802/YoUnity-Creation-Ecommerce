import React from "react";
import Image from "next/image";

function PhotoFrameCard({ title, imagesource, title1 }) {
  return (
    
      <div>
        <a
          href="#"
          className="block mb-2 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-96 lg:mb-3"
        >
          <Image
            src={imagesource}
            loading="lazy"
            width={500}
            height={500}
            alt="Photo by Austin Wade"
            className="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
          />
        </a>

        <div className="flex flex-col">
          <span className="text-gray-500">{title}</span>
          <a
            href="#"
            className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
          >
            {title1}
          </a>
        </div>
      </div>
   
  );
}

export default PhotoFrameCard;
