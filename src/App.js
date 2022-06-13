import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div className='w-full h-screen relative overflow-hidden'>
        {/* Background image */}
        <div className="h-full bg-[url('assets/background.jpg')] bg-cover"></div>
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
