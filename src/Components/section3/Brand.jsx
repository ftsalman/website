import React from 'react';
import { Wallet, documentIcon, cardIcon } from '../../assets/Icon';

const Brand = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto  bg-white mt-10 px-5 sm:px-10 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center py-2 text-center mt-10 sm:mt-20 md:mt-28">
        <p className="text-[#01B379] font-semibold">Our Brand</p>
        <h1 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl">Kootaan</h1>
        <p className="text-sm sm:text-base lg:text-sm text-[#596780] mt-2">
        KOOTAAN is a cloud-based software tailored for SMEs, offering scalable solutions to streamline operations and drive growth. With intuitive design and advanced features,
          <br className="hidden sm:block" />  KOOTAAN empowers businesses to optimize processes, boost productivity, and adapt to dynamic market demands.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 h-[760px] md:h-[350px] md:grid-cols-2 gap-5 md:gap-10 mt-10 w-full max-w-6xl">
        {/* Left Column */}
        <div className="p-5">
          <h1 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl">
          Business Suit  for Next Gen !
          </h1>
          <p className="mt-3 text-sm sm:text-base lg:text-sm text-[#596780] leading-relaxed">
          We are dedicated to shaping the future of business through innovative technology. Our solutions are designed to empower next-generation enterprises, providing tools that enhance efficiency, scalability, and growth. With a focus on adaptability and user-centric design, we enable businesses to thrive in an ever-changing digital world. Together, we’re building a future where technology drives success and unlocks limitless potential.

          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-5">
            <span className="text-[#7C5CFC] text-3xl sm:text-4xl">{Wallet}</span>
            <div className=' flex flex-col gap-2'>
              <h1 className="font-bold text-black text-base sm:text-lg lg:text-xl">My Docs</h1>
              <p className="text-sm sm:text-base lg:text-sm text-[#596780] leading-relaxed">
              Manage all your documents with ease, stay updated with expiry reminders, secure your files for peace of mind, and share them quickly anytime, anywhere. Kootaan MyDocs ensures simplicity, security, and up-to-date document management.

              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-5">
            <span className="text-[#7C5CFC] text-3xl sm:text-4xl">{documentIcon}</span>
            <div className=' flex flex-col gap-2'>
              <h1 className="font-bold text-black text-base sm:text-lg lg:text-xl">Kootaan CSM</h1>
              <p className="text-sm sm:text-base lg:text-sm text-[#596780] leading-relaxed">
              Kootaan CSM simplifies business operations with tools for task management, employee monitoring, and insightful reporting. Designed for businesses, teams, and typing centers, it streamlines workflows, tracks progress, and optimizes performance—all from one centralized platform.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-5">
            <span className="text-[#7C5CFC] text-3xl sm:text-4xl">{cardIcon}</span>
            <div className=' flex flex-col gap-2'>
              <h1 className="font-bold text-black text-base sm:text-lg lg:text-xl">Kootaan</h1>
              <p className="text-sm sm:text-base lg:text-sm text-[#596780] leading-relaxed">
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
