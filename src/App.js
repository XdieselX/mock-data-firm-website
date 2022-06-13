import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import PaymentPlanCards from './components/PaymentPlanCards';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      {/* First section */}
      <div className='w-full h-screen relative overflow-hidden'>
        {/* Background image */}
        <div className="h-full bg-[url('assets/background.jpg')] bg-cover"></div>
        <div className='absolute top-0 w-full'>
          <Navbar />
          <Hero />
        </div>
      </div>
      {/* Second section */}
      <Analytics />
      <Newsletter />
      {/* Third section section */}
      <PaymentPlanCards />
      {/* Final section */}
      <Footer />
    </>
  );
};

export default App;
