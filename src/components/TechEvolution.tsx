import React from 'react';

const TechEvolution = () => {
  return (
<div className="flex z-20  ">

    <div className="z-20 w-full ">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-white text-4xl sm:text-6xl capitalize py-4 px-4 text-center font-tektur">
            Techvolution Over the years
          </h1>
          <h1 className="relative text-3xl sm:text-4xl font-bold text-center text-white sm:left-12 font-tektur">
            2010 - 2024
          </h1>
        </div>

        {/* First Section */}
        <div className="flex flex-row w-full mb-20 sm:mb-46">
          <div className="ml-12 mb-16 sm:mb-36 h-[250px] sticky top-[110px] width-auto mr-0 p-0">
            <div className="mt-44 sm:mt-20 text-[200px] font-md text-center text-transparent bg-clip-text bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-black to-white">
              <p className="text-[50px] md:text-[110px] lg:text-[155px] xl:text-[200px]">20</p>
            </div>
            <div className="w-auto bg-white h-[1.5px]" />
          </div>

          <div className="flex flex-col w-full ml-0 p-0 mt-28 sm:mt-0">
            <div className="space-y-0">
              {/* 2010's Section */}
              <div className="flex md:flex-row sm:flex-row justify-start items-center pr-3 pt-3 pb-3 lg:h-[400px] md:h-[410px] sm:h-[440px] h-[200px] transition-transform duration-500 ease-in-out">
                <div className="md:mb-[120px] sm:mb-[80px]">
                  <div className="md:mt-48 sm:mt-32 text-[2rem] md:text-[200px] font-md text-transparent bg-clip-text bg-gradient-to-b from-pink-400 via-red-600 to-yellow-100 sm:ml-4 md:ml-8 lg:ml-0">
                    <p className="text-[50px] md:text-[110px] lg:text-[155px] xl:text-[200px]">10</p>
                  </div>
                  <div className="w-auto bg-white h-[1.5px]" />
                </div>
                <div className="flex justify-between items-end w-full left-0">
                  <div className="flex flex-col md:text-xl pl-10 sm:text-lg my-20 space-y-1 text-gray-200">
                    <h1 className="list-disc list-inside flex justify-center md:items-end xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-tektur">
                      • The 10s: The Decade of the Smartphone
                    </h1>
                    <ul className="space-y-4 text-white p-5">
                      <li className="text-gray-200 dark:text-gray-200 text-base md:text-md lg:text-xl xl:text-xl font-tektur">
                        iPhone 4 ignites mobile innovation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://via.placeholder.com/450x450?text=iPhone+10s"
                      alt="iphone"
                      className="w-full md:w-[300px] collapse sm:visible sm:w-[450px] object-contain rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* 2012's Section */}
              <div className="flex md:flex-row sm:flex-row justify-start items-center pr-3 pt-3 pb-3 lg:h-[400px] md:h-[410px] sm:h-[440px] h-[200px] transition-transform duration-500 ease-in-out">
                <div className="md:mb-[120px] sm:mb-[80px]">
                  <div className="md:mt-48 sm:mt-32 text-[2rem] md:text-[200px] font-md text-transparent bg-clip-text bg-gradient-to-b from-pink-400 via-red-600 to-yellow-100 sm:ml-4 md:ml-8 lg:ml-0">
                    <p className="text-[50px] md:text-[110px] lg:text-[155px] xl:text-[200px]">12</p>
                  </div>
                  <div className="w-auto bg-white h-[1.5px]" />
                </div>
                <div className="flex justify-between items-end w-full left-0">
                  <div className="flex flex-col md:text-xl pl-10 sm:text-lg my-20 space-y-1 text-gray-200">
                    <h1 className="list-disc list-inside flex justify-center md:items-end xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-tektur">
                      • Virtual Visions & Square Deals
                    </h1>
                    <ul className="space-y-4 text-white p-5">
                      <li className="text-gray-200 dark:text-gray-200 text-base md:text-md lg:text-xl xl:text-xl font-tektur">
                        Samsung Galaxy S3 revolutionizes smartphones
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://via.placeholder.com/450x450?text=Samsung+S3"
                      alt="samsung"
                      className="w-full md:w-[300px] collapse sm:visible sm:w-[450px] object-contain rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* 2015's Section */}
              <div className="flex md:flex-row sm:flex-row justify-start items-center pr-3 pt-3 pb-3 lg:h-[400px] md:h-[410px] sm:h-[440px] h-[200px] transition-transform duration-500 ease-in-out">
                <div className="md:mb-[120px] sm:mb-[80px]">
                  <div className="md:mt-48 sm:mt-32 text-[2rem] md:text-[200px] font-md text-transparent bg-clip-text bg-gradient-to-b from-pink-400 via-red-600 to-yellow-100 sm:ml-4 md:ml-8 lg:ml-0">
                    <p className="text-[50px] md:text-[110px] lg:text-[155px] xl:text-[200px]">15</p>
                  </div>
                  <div className="w-auto bg-white h-[1.5px]" />
                </div>
                <div className="flex justify-between items-end w-full left-0">
                  <div className="flex flex-col md:text-xl pl-10 sm:text-lg my-20 space-y-1 text-gray-200">
                    <h1 className="list-disc list-inside flex justify-center md:items-end xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-tektur">
                      • The Rise of Smart Assistants
                    </h1>
                    <ul className="space-y-4 text-white p-5">
                      <li className="text-gray-200 dark:text-gray-200 text-base md:text-md lg:text-xl xl:text-xl font-tektur">
                        Google Assistant and Alexa become common household names
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://via.placeholder.com/450x450?text=Smart+Assistant"
                      alt="assistant"
                      className="w-full md:w-[300px] collapse sm:visible sm:w-[450px] object-contain rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* 2020's Section */}
              <div className="flex md:flex-row sm:flex-row justify-start items-center pr-3 pt-3 pb-3 lg:h-[400px] md:h-[410px] sm:h-[440px] h-[200px] transition-transform duration-500 ease-in-out">
                <div className="md:mb-[120px] sm:mb-[80px]">
                  <div className="md:mt-48 sm:mt-32 text-[2rem] md:text-[200px] font-md text-transparent bg-clip-text bg-gradient-to-b from-pink-400 via-red-600 to-yellow-100 sm:ml-4 md:ml-8 lg:ml-0">
                    <p className="text-[50px] md:text-[110px] lg:text-[155px] xl:text-[200px]">20</p>
                  </div>
                  <div className="w-auto bg-white h-[1.5px]" />
                </div>
                <div className="flex justify-between items-end w-full left-0">
                  <div className="flex flex-col md:text-xl pl-10 sm:text-lg my-20 space-y-1 text-gray-200">
                    <h1 className="list-disc list-inside flex justify-center md:items-end xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-tektur">
                      • The Future of AI & Quantum Computing
                    </h1>
                    <ul className="space-y-4 text-white p-5">
                      <li className="text-gray-200 dark:text-gray-200 text-base md:text-md lg:text-xl xl:text-xl font-tektur">
                        Rise of Quantum AI technologies in consumer devices
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://via.placeholder.com/450x450?text=Quantum+AI"
                      alt="quantum"
                      className="w-full md:w-[300px] collapse sm:visible sm:w-[450px] object-contain rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  );
};

export default TechEvolution;
