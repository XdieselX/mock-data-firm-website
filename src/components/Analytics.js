import laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto' src={laptop} alt='' />
        <div className='flex flex-col justify-center'>
          <p className='uppercase'>Data Analytics Dashboard</p>
          <h1>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            veritatis eum deleniti labore, cum assumenda molestiae eligendi nam
            consequatur nihil dolorem totam modi odit architecto dolore. Enim
            officia amet tempore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
