import Navbar from './components/Navbar';

import background from './assets/background.jpg';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div className='w-full h-screen relative overflow-hidden'>
        {/* Background image */}
        <div className='h-screen object-cover'>
          <img src={background} alt='' />
        </div>
        <div className='absolute top-0 w-full'>
          {/* First section */}
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default App;
