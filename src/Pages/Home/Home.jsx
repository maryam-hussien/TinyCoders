import React from 'react';

const Home = () => {
  return (
    <div className="relative w-full h-[600px]  overflow-hidden ">
      <img
        src="../../../public/images\1920x730_slide2.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4 sourGummyFont">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to TinyCoders</h1>
        <p className="mb-6 text-lg md:text-xl">Let’s become more creative with TinyCoders</p>
        <div className="flex gap-4">
         <button style={{ backgroundColor: 'var(--forest)' }} className=" text-white px-5 py-2 rounded-full shadow-md transition">
  Get Started
</button>

          <button  className="bg-white text-blue-600 hover:bg-gray-200 px-5 py-2 rounded-full shadow-md transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
