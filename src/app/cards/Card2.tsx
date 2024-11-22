import React from "react";

const Card2 = () => {
  return (
    <div id="h2" className=" font-serif font italic min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/mother-daughter-with-shopping-bag_1157-21277.jpg?t=st=1732306669~exp=1732310269~hmac=0d1dffff3b7faf9c79a7537ef55704159dccab9cd088b87dd349558d44bee9da&w=900)`,
        }}
      >
        <div className="flex flex-col items-start w-full m-0 p-0 pl-4 md:pl-8">
          {/* Title */}
          <p className="text-black text-1xl md:text-2xl ">
            Brands shirts with best stuff
          </p>
          <h1 className="text-black text-3xl md:text-5xl font-bold leading-snug">
            Timeless fashion <br /> for the modern world
          </h1>
          <button className="sm-mt-4 px-6 py-3 bg-yellow-400 text-black text-bold rounded hover:bg-black">
            Contact Us
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-10 flex flex-wrap justify-center gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-white flex flex-col items-center  w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className=" w-full h-100 object-cover rounded-md "
            src="https://wearochre.com/cdn/shop/files/resize_0049_OGK-298_2.jpg?v=1690181383&width=500"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Printed shirt</h2>
          <p className="text-sm text-gray-600">Price 10$.</p>
          <button className="mt-4 px-4 py-2 bg-slate-600 text-white text-sm rounded hover:bg-slate-950">
            Add to Cart
          </button>
        </div>
        {/* Card 2 */}
        <div className="bg-white flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className=" w-full h-100 object-cover rounded-md "
            src="https://wearochre.com/cdn/shop/files/OGK253_4.jpg?v=1728647386&width=500"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg text-center font-semibold mt-2 items-center">
            Jersey shirt
          </h2>
          <p className="text-sm text-gray-600">Price 10$.</p>
          <button className="  mt-4 px-4 py-2 bg-slate-600  text-white text-sm rounded hover:bg-black">
            Add to Cart
          </button>
        </div>

        {/* Card 3*/}
        <div className="bg-white flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-100 object-cover rounded-md"
            src="https://wearochre.com/cdn/shop/files/May_0084_OGK-297_1.jpg?v=1684400606&width=500"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Jersey shirt</h2>
          <p className="text-sm text-gray-600">Price 10$</p>
          <button className="mt-4 px-4 py-2 bg-slate-600 text-white text-sm rounded-lg hover:bg-black">
            Add to Cart
          </button>
        </div>
        {/* Card 4*/}
        <div className="bg-white flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-100 object-cover rounded-md"
            src="https://wearochre.com/cdn/shop/products/OGk-64-3.jpg?v=1673418907&width=500"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Printed shirt</h2>
          <p className="text-sm text-gray-600">Price 10$.</p>
          <button className="mt-4 px-4 py-2 bg-slate-600 text-white text-sm rounded hover:bg-black">
            Add to Cart
          </button>
        </div>

        {/* Card 5 */}
        <div className="bg-white flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-100 object-cover rounded-md"
            src="https://wearochre.com/cdn/shop/products/0002_OGK209_3.jpg?v=1657187904&width=500"
            alt="Rose Bouquet"
          />
          <h2 className="text-lg font-semibold mt-2">Printed shirt</h2>
          <p className="text-sm text-gray-600">Price 3$.</p>
          <button className="mt-4 px-4 py-2 bg-slate-600 text-white text-sm rounded hover:bg-black">
            Add to Cart
          </button>
        </div>

        {/* Card 1 */}
        <div className="bg-white flex flex-col items-center w-full sm:w-[48%] lg:w-[30%] p-4 shadow-md rounded-lg">
          <img
            className="w-full h-90 object-cover rounded-md"
            src="https://wearochre.com/cdn/shop/products/26aug_0052_OGK211_3.jpg?v=1661517777&width=500"
            alt="shirt"
          />
          <h2 className="text-lg font-semibold mt-2">Jersey shirt</h2>
          <p className="text-sm text-gray-600">Price 20$.</p>
          <button className="mt-4 px-4 py-2 bg-slate-600 text-white text-sm rounded hover:bg-black">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card2;
