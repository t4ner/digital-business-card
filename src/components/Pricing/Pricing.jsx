function Pricing() {
  return (
    <main className="max-w-6xl mx-auto px-2 md:px-8 mt-10 md:mt-20 mb-10 md:mb-20">
      <div className="max-w-md mx-auto mb-7 md:mb-14 text-center">
        <h1 className="text-lg md:text-4xl font-semibold mb-1 md:mb-6">
          <span className="text-green-400">ecoQr</span> Ödeme Planları
        </h1>
        <p className="text-sm md:text-xl text-gray-500 font-medium">
          Siz veya ekibiniz için en uygun planı seçin
        </p>
      </div>

      <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
        <div className="w-full flex-1 mt-4 md:mt-8 p-5 md:p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
              alt=""
              className="rounded-3xl w-16 h-16 md:w-20 md:h-20"
            />
            <div className="ml-5">
              <span className="block text-lg md:text-2xl font-semibold">
                Basic
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-2xl md:text-3xl font-semibold md:font-bold">10 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex md:text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Get started with <span className="text-black">messaging</span>
              </span>
            </li>
            <li className="flex md:text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Flexible <span className="text-black">team meetings</span>
              </span>
            </li>
            <li className="flex md:text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">5 TB</span> cloud storage
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-indigo-600 rounded-xl md:py-5 md:px-4 py-2 text-center text-white text-xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </a>
        </div>

        <div className="w-full flex-1 p-5 md:p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
              alt=""
              className="rounded-3xl w-16 h-16 md:w-20 md:h-20"
            />
            <div className="ml-5">
              <span className="block text-lg md:text-2xlfont-semibold text-white">
                Startup
              </span>
              <span>
                <span className="font-medium text-xl align-top">$&thinsp;</span>
                <span className="text-2xl md:text-3xl font-semibold md:font-bold">24 </span>
              </span>
              <span className="font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-10 font-medium md:text-xl">
            <li className="flex mb-4">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                All features in <span className="text-white">Basic</span>
              </span>
            </li>
            <li className="flex mb-4">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                Flexible <span className="text-white">call scheduling</span>
              </span>
            </li>
            <li className="flex">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                <span className="text-white">15 TB</span> cloud storage
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-indigo-600 rounded-xl md:py-5 md:px-4 py-2 text-center text-white text-xl md:text-2xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </a>
        </div>

        <div className="w-full flex-1 mt-4 md:mt-8 p-5 md:p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
              alt=""
              className="rounded-3xl w-16 h-16 md:w-20 md:h-20"
            />
            <div className="ml-5">
              <span className="block text-lg md:text-2xl font-semibold">
                Enterprise
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  $&thinsp;
                </span>
                <span className="text-2xl md:text-3xl font-semibold md:font-bold">35 </span>
              </span>
              <span className="text-gray-500 font-medium">/ user</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex md:text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                All features in <span className="text-black">Startup</span>
              </span>
            </li>
            <li className="flex md:text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Growth <span className="text-black">oriented</span>
              </span>
            </li>
            <li className="flex md:text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">Unlimited</span> cloud storage
              </span>
            </li>
          </ul>
          <a
            href="#/"
            className="flex justify-center items-center bg-indigo-600 rounded-xl md:py-5 md:px-4 py-2 text-center text-white text-xl"
          >
            Choose Plan
            <img
              src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
              className="ml-2"
            />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Pricing;
