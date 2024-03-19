import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src={"/footerlogo.png"}
            width={115}
            height={38}
            alt="quibbble"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Quibble is a web application for software engineers and developers
            to share their creative and best work
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
