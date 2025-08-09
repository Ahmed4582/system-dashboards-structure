import React from "react";

const SystemStudy = () => {
  const systemData = [
    {
      id: 1,
      statsNumber: "+1000",
      statsDescription: "Students who have completed their studies on the platform",
      title: "Interactive Learning",
      heading: "Practical Learning and Live Interaction",
      description: "Participate in live interactive sessions to improve your Quran recitation and develop your Arabic language skills. This includes hands-on workshops with individual follow-up from instructors.",
      image: "/images/systemone.svg",
      layout: "stats-left" // Stats box on left, content on right
    },
    {
      id: 2,
      statsNumber: "+240",
      statsDescription: "Students who have completed their studies on the platform",
      title: "Interactive Learning",
      heading: "Practical Learning and Live Interaction",
      description: "Participate in live interactive sessions to improve your Quran recitation and develop your Arabic language skills. This includes hands-on workshops with individual follow-up from instructors.",
      image: "/images/systemtow.svg",
      layout: "stats-right" // Content on left, stats box on right
    }
  ];

  return (
    <div className="relative py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5 z-5"
        style={{
          backgroundImage: "url('images/Hero.png')",
        }}
      ></div>
      
      {systemData.map((item) => (
        <div 
          key={item.id}
          className={`flex flex-col ${item.layout === 'stats-right' ? 'lg:flex-row' : 'lg:flex-row'} items-stretch max-w-[95%] mx-auto mt-12 gap-4`}
        >
          {/* Conditional rendering based on layout */}
          {item.layout === 'stats-left' ? (
            <>
              {/* Stats Box */}
              <div className="bg-[#FFF1DD] dark:bg-gray-800 dark:border dark:border-gray-700 p-4 md:p-6 rounded-xl w-full lg:w-[30%] text-center flex flex-col justify-center transition-colors duration-300">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5077] dark:text-[#D7B483]">
                  {item.statsNumber}
                </p>
                <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                  {item.statsDescription}
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-12 p-4 md:p-6 shadow-md dark:shadow-gray-900/50 rounded-xl bg-white dark:bg-gray-800 dark:border dark:border-gray-700 w-full lg:w-[70%] justify-between transition-colors duration-300">
                {/* Title Row */}
                <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
                  <div className="text-[#2E5077] dark:text-[#D7B483] text-3xl text-center flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="w-8 h-8 md:w-10 md:h-10 dark:filter dark:brightness-0 dark:invert" />
                  </div>
                  <p className="text-[#2E5077] dark:text-[#D7B483] font-semibold text-lg md:text-xl whitespace-nowrap mt-4 text-center md:text-left">
                    {item.title}
                  </p>
                </div>

                {/* Description */}
                <div className="w-full">
                  <h3 className="text-lg md:text-xl font-bold text-[#2E5077] dark:text-[#D7B483] mb-2 text-center md:text-left">
                    {item.heading}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base text-center md:text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Content Section */}
              <div className="flex flex-col md:flex-row items-start gap-4 shadow-md dark:shadow-gray-900/50 md:gap-12 p-4 md:p-6 rounded-xl bg-white dark:bg-gray-800 dark:border dark:border-gray-700 w-full lg:w-[70%] justify-between transition-colors duration-300">
                {/* Title Row */}
                <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
                  <div className="text-[#2E5077] dark:text-[#D7B483] text-3xl text-center flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="w-8 h-8 md:w-10 md:h-10 dark:filter dark:brightness-0 dark:invert" />
                  </div>
                  <p className="text-[#2E5077] dark:text-[#D7B483] font-semibold text-lg md:text-xl whitespace-nowrap mt-4 text-center md:text-left">
                    {item.title}
                  </p>
                </div>

                {/* Description */}
                <div className="w-full">
                  <h3 className="text-lg md:text-xl font-bold text-[#2E5077] dark:text-[#D7B483] mb-2 text-center md:text-left">
                    {item.heading}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base text-center md:text-left">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Stats Box */}
              <div className="bg-[#FFF1DD] dark:bg-gray-800 dark:border dark:border-gray-700 p-4 md:p-6 rounded-xl w-full lg:w-[30%] text-center flex flex-col justify-center transition-colors duration-300">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E5077] dark:text-[#D7B483]">
                  {item.statsNumber}
                </p>
                <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                  {item.statsDescription}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SystemStudy;