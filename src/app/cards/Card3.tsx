import React from "react";

const Card3 = () => {
  return (
    <div id="h3" className=" font-serif font italic min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23717.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid)`,
        }}
      >
        <div className="flex flex-col items-start w-full m-0 p-0 pl-4 md:pl-8">
          {/* Title */}
          <p className="text-white text-1xl md:text-2xl font-semibold">
            "Luxury Furniture for Every Room, Every Dream."
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug">
            "Where Style Meets Comfort  <br />Furniture Designed for You."
          </h1>
          <button className="mt-4 px-6 py-3 bg-white text-black text-bold rounded hover:bg-pink-500">
            Contact Us
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-10 flex flex-wrap justify-center gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-white flex flex-col items-center  w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-100 object-cover rounded-md"
            src="https://img.freepik.com/free-photo/grey-comfortable-armchair-isolated-white-background_181624-25295.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">
            Dell Latitude 3340 2-in-1 - Raptor Lake
          </h2>
          <p className="text-sm text-gray-600">Rs. 139,900.00</p>
          <button className="mt-4 px-9 py-2 bg-green-400 text-white text-sm rounded">
            Add to Cart
          </button>
        </div>
        {/* Card 2 */}
        <div className="bg-white flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className=" w-full h-100 object-cover rounded-md "
            src="https://img.freepik.com/free-photo/picture-frame-with-abstract-art-by-pink-velvet-armchair_53876-128125.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">
            Dell Latitude 3340 2-in-1 - Raptor Lake
          </h2>
          <p className="text-sm text-gray-600">Rs. 139,900.00</p>
          <button className="mt-4 px-9 py-2 bg-green-400 text-white text-sm rounded">
            Add to Cart
          </button>
        </div>

        {/* Card 3*/}
        <div className="bg-white flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-100 object-cover rounded-md"
            src="https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178361.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">
            Dell Latitude 3340 2-in-1 - Raptor Lake
          </h2>
          <p className="text-sm text-gray-600">Rs. 139,900.00</p>
          <button className="mt-4 px-9 py-2 bg-green-400 text-white text-sm rounded">
            Add to Cart
          </button>
        </div>
        {/* Card 4*/}
        <div className="bg-white flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-100 object-cover rounded-md"
            src="https://img.freepik.com/premium-photo/stylish-concept-living-room-interior-with-small-walnut-table-design-chairs-tropical-leaf-beige-vase-retro-carpet-decoration-elegant-personal-accessories-modern-vintage-home-decor_431307-1119.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Galaxy Z Fold5</h2>
          <p className="text-sm text-gray-600">
            Save ₨. 30,000.00 (Was ₨. 604,999.00) <br /> Total Price:₨.
            574,999.00
          </p>
          <button className="mt-4 px-9 py-2 bg-green-500 text-white text-sm rounded ">
            Add to Cart
          </button>
        </div>

        {/* Card 5 */}
        <div className="bg-white flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-100 object-cover rounded-md"
            src="https://img.freepik.com/free-photo/red-armchair-near-green-plant_250224-85.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Galaxy Z Fold6</h2>
          <p className="text-sm text-gray-600">
            Save ₨. 30,000.00 (Was ₨. 604,999.00) <br /> Total Price:₨.
            574,999.00
          </p>
          <button className="mt-4 px-9 py-2 bg-green-500 text-white text-sm rounded ">
            Add to Cart
          </button>
        </div>

        {/* Card 1 */}
        <div className="bg-white flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-100 object-cover rounded-md"
            src="https://img.freepik.com/free-photo/pillows-chair_74190-10002.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Galaxy Z Fold6</h2>
          <p className="text-sm text-gray-600">
            Save ₨. 30,000.00 (Was ₨. 604,999.00) <br /> Total Price:₨.
            574,999.00
          </p>
          <button className="mt-4 px-9 py-2 bg-green-500 text-white text-sm rounded ">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card3;
