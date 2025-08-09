import React from "react";

const Podcast = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          {/* Content Section */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Main Card */}
            <div className="bg-gradient-to-b from-[#142027] to-[#324D5D] dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 px-4 sm:px-6 lg:px-8 rounded-2xl py-6 sm:py-8">
              <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-4 text-white">
                Learn Arabic
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 text-white/90">
                Discover "Arabic Podcast" – an audio space that combines benefit and
                enjoyment. Diverse episodes covering Arabic language, pronunciation
                skills, grammar and morphology, and the sciences of the Holy Qur'an.
                Listen wherever you are — on the go, during your workout, or in your
                free time — and continue developing your language.
              </p>
              <button className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base backdrop-blur-sm">
                Start listening now and make the most of your time
              </button>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-b from-[#142027] to-[#324D5D] dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 px-4 sm:px-6 lg:px-8 rounded-2xl py-6 sm:py-8">
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 text-white">
                  Learn anytime, anywhere.
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-white/90">
                  Whether you're on your way to work or enjoying a moment of
                  relaxation, the Arabic Podcast offers you an easy way to learn the
                  Arabic language and the sciences of the Qur'an.
                </p>
              </div>
              
              <div className="bg-gradient-to-b from-[#142027] to-[#324D5D] dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 px-4 sm:px-6 lg:px-8 rounded-2xl py-6 sm:py-8">
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 text-white">
                  Specialized and purposeful content
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-white/90">
                  The podcast offers rich episodes covering topics in the Arabic
                  language and Qur'anic sciences, supervised by linguistic experts
                  and presented in a simplified style suitable for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-2 md:flex hidden items-center justify-center order-first lg:order-last">
            <div className="w-full ">
              <img 
                src="/images/audio.png" 
                className="w-full  h-[800px]  ml-30 mb-10" 
                alt="Audio Equipment for Arabic Podcast" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;