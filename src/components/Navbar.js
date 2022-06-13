const Navbar = () => {
  return (
    <div className='max-w-[1240px] px-4 flex justify-between items-center h-24 mx-auto bg-transparent text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] uppercase'>
        Surge Analytics.
      </h1>
      <ul className='flex space-x-8'>
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
