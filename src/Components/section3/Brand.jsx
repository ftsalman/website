import React from 'react';
import { Wallet, documentIcon, cardIcon } from '../../assets/Icon';

const Brand = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto  bg-white mt-10 px-5 sm:px-10 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center mt-10 sm:mt-20 md:mt-28">
        <p className="text-[#7C5CFC] font-semibold">Our Brand</p>
        <h1 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl">Kootaan</h1>
        <p className="text-sm sm:text-base lg:text-lg text-[#596780] mt-2">
          Our platform helps your business in managing expenses. These are some of the
          <br className="hidden sm:block" /> reasons why you should use our platform in managing business finances.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 h-[760px] md:h-[350px] md:grid-cols-2 gap-5 md:gap-10 mt-10 w-full max-w-6xl">
        {/* Left Column */}
        <div className="p-5">
          <h1 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl">
            Building tech future <br /> with Innovation!
          </h1>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#596780] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc vel dolor gravida scelerisque
            a sed risus. In laoreet tincidunt felis, ac dapibus justo aliquam id. Sed mattis ex sed arcu dapibus,
            vitae blandit nisi dictum.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-3">
            <span className="text-[#7C5CFC] text-3xl sm:text-4xl">{Wallet}</span>
            <div>
              <h1 className="font-bold text-black text-base sm:text-lg lg:text-xl">Kootaan MyDocs</h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#596780] leading-relaxed">
                Automatic payments help you to arrange payments on a certain date without doing it manually again.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-3">
            <span className="text-[#7C5CFC] text-3xl sm:text-4xl">{documentIcon}</span>
            <div>
              <h1 className="font-bold text-black text-base sm:text-lg lg:text-xl">Kootaan CSM</h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#596780] leading-relaxed">
                Clear payment history helps you to track your business expenses on specific dates.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-3">
            <span className="text-[#7C5CFC] text-3xl sm:text-4xl">{cardIcon}</span>
            <div>
              <h1 className="font-bold text-black text-base sm:text-lg lg:text-xl">Kootaan</h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#596780] leading-relaxed">
                Have more than one debit or credit card? Don't worry, we support payments using more than one
                card.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
