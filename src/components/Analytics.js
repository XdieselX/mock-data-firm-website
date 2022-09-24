import laptop from '../assets/laptop.jpg';

// testing!

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto' src={laptop} alt='' />
        <div className='flex flex-col justify-center'>
          <p className='uppercase text-[#00df9a] font-bold'>
            Data Analytics Dashboard
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            veritatis eum deleniti labore, cum assumenda molestiae eligendi nam
            consequatur nihil dolorem totam modi odit architecto dolore. Enim
            officia amet tempore.
          </p>
          <button
            className='bg-[#00df9a] w-[150px] uppercase font-bold rounded-md my-6 mx-auto sm:mx-0 py-3 
                    text-gray-900 shadow-lg shadow-gray-400 hover:scale-110 hover:shadow-2xl 
                    hover:shadow-black duration-300 active:scale-100'
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
