import Navbar from './components/Navbar';

import background from './assets/background.jpg';

const App = () => {
  return (
    <>
      <div className='w-full h-screen relative overflow-hidden'>
        {/* Background image */}
        <div className='w-full object-cover'>
          <img src={background} alt='' />
        </div>
        <div className='absolute top-0 w-full'>
          {/* Navbar */}
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default App;
