import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-[#00df9a] font-bold'>
          Growing with data analytics.
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center space-x-3'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold'
            strings={['BTB.', 'BTC.', 'SAAS.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400'>
          {`Monitor your data analytics to increase revenue for BTB, BTC, & SAAS platforms.`}
        </p>
        <button
          className='bg-[#00df9a] w-[150px] uppercase font-bold rounded-md my-6 mx-auto py-3 
                    text-gray-900 shadow-lg shadow-gray-800 hover:scale-110 hover:shadow-2xl 
                    hover:shadow-black duration-300 active:scale-100'
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
