const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white bg-[#000300] px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>
            Want tips to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter your email here...'
            />
            <button
              className='bg-[#00df9a] w-[150px] sm:w-[230px] uppercase font-bold rounded-md ml-4 my-6 px-6 py-3 text-black shadow-lg 
                       shadow-gray-700 hover:scale-110 hover:shadow-2xl hover:shadow-gray-500 duration-300 active:scale-100'
            >
              Notify me!
            </button>
          </div>
          <p className='text-white'>
            We care about the protection of your data. Read our
            <span className='text-[#00df9a] cursor-pointer ml-1'>
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
