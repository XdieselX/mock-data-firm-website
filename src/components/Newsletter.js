const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white bg-[#000300]'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h1 className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>
            Want tips to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
