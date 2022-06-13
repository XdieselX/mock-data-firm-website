import first from '../assets/single.png';
import second from '../assets/double.png';
import third from '../assets/triple.png';

const PaymentPlanCards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full '>
          <img className='w-20 mx-auto mt-[-3rem]' src={first} alt='' />
          <h2>Single User</h2>
          <p>€149</p>
          <div>
            <p>500 GB Storage</p>
            <p>1 Granted User</p>
            <p>Send up to 2 GB</p>
          </div>
          <button>Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCards;
