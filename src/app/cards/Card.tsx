import React from 'react'

const Card = () => {
  return (
    <div id="h1" className=" font-serif font italic min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/shopping-trolley-with-flowers-pink-punchy-pastel-background-banner-with-copy-space-top-view-flat-lay-creative-layout-festive-shopping-sale-gifts-her_769609-6629.jpg?w=1060')`,
        }}
      >
        <div className="flex flex-col items-start w-full m-0 p-0 pl-4 md:pl-8">
          {/* Title */}
          <p className="text-white text-2xl md:text-3xl font-semibold">
            Fresh Flowers
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug">
            Making Beautiful Flowers <br /> A Part of Your Life
          </h1>
          <button className="mt-4 px-6 py-3 bg-pink-400 text-white text-bold rounded hover:bg-pink-500">
            Contact Us
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-10 flex flex-wrap justify-center gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-pink-200 flex flex-col items-center  w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-80 object-cover rounded-md"
            src="https://img.freepik.com/premium-photo/wedding-bouquet-from-roses-green-grass_104263-651.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Rose Bouquet</h2>
          <p className="text-sm text-gray-600">Perfect for any occasion.</p>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white text-sm rounded hover:bg-pink-500">
            Add to Cart
          </button>
        </div>
        {/* Card 2 */}
        <div className="bg-pink-200 flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className=" w-full h-80 object-cover rounded-md "
            src="https://img.freepik.com/free-photo/pink-roses-table_140725-812.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg text-center font-semibold mt-2 items-center">
            Rose Bouquet
          </h2>
          <p className="text-sm text-gray-600">Perfect for any occasion.</p>
          <button className="  mt-4 px-4 py-2 bg-pink-400 text-white text-sm rounded hover:bg-pink-500">
            Add to Cart
          </button>
        </div>

        {/* Card 3*/}
        <div className="bg-pink-200 flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-80 object-cover rounded-md"
            src="https://img.freepik.com/free-photo/rose-flower-vase_1203-2627.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Rose Bouquet</h2>
          <p className="text-sm text-gray-600">Perfect for any occasion.</p>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white text-sm rounded hover:bg-pink-500">
            Add to Cart
          </button>
        </div>
        {/* Card 4*/}
        <div className="bg-pink-200 flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-80 object-cover rounded-md"
            src="https://img.freepik.com/premium-photo/beautiful-bouquet-tulips-closeup-white-isolated-background_397940-641.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Rose Bouquet</h2>
          <p className="text-sm text-gray-600">Perfect for any occasion.</p>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white text-sm rounded hover:bg-pink-500">
            Add to Cart
          </button>
        </div>

        {/* Card 5 */}
        <div className="bg-pink-200 flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-80 object-cover rounded-md"
            src="https://img.freepik.com/premium-photo/bouquet-fresh-delicate-flowers-white-background-gift-celebration-valentine-wedding_308547-1340.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Rose Bouquet</h2>
          <p className="text-sm text-gray-600">Perfect for any occasion.</p>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white text-sm rounded hover:bg-pink-500">
            Add to Cart
          </button>
        </div>

        {/* Card 1 */}
        <div className="bg-pink-200 flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-80 object-cover rounded-md"
            src="https://img.freepik.com/premium-photo/florist-s-work-process-creating-bouquet_79087-1888.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Rose Bouquet</h2>
          <p className="text-sm text-gray-600">Perfect for any occasion.</p>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white text-sm rounded hover:bg-pink-500">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
};



export default Card;