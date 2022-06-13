import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='max-w-[1240px] px-4 flex justify-between items-center h-24 mx-auto bg-transparent text-white'>
      {/* Navbar title - desktop */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a] uppercase'>
        Surge Analytics.
      </h1>
      <ul className='hidden flex space-x-8'>
        {/* Navbar list - desktop */}
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        {/* Hamburger menu */}
        <AiOutlineMenu size={20} />
      </div>
      <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 px-4 bg-[#000300]'>
        {/* Navbar title - mobile */}
        <h1 className='w-full m-4 text-3xl font-bold text-[#00df9a] uppercase'>
          Surge Analytics.
        </h1>
        <ul className='flex flex-col p-4 uppercase'>
          {/* Navbar list - mobile */}
          <li className='border-b p-4 border-gray-600'>Home</li>
          <li className='border-b p-4 border-gray-600'>Company</li>
          <li className='border-b p-4 border-gray-600'>Resources</li>
          <li className='border-b p-4 border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
