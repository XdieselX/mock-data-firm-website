import first from '../assets/single.png';
// import second from '../assets/double.png';
// import third from '../assets/triple.png';

const PaymentPlanCards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-white'
            src={first}
            alt=''
          />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>€149</p>
          <div className='text-center font-medium'>
            <p className='border-b mx-8 py-2 mt-8'>500 GB Storage</p>
            <p className='border-b mx-8 py-2'>1 User Allowed</p>
            <p className='border-b mx-8 py-2'>Send up to 2 GB</p>
          </div>
          <button
            className='bg-[#00df9a] w-[150px] uppercase font-bold rounded-md my-6 px-6 mx-auto py-3 text-black shadow-lg 
                       shadow-gray-400 hover:scale-110 hover:shadow-2xl hover:shadow-gray-500 duration-300 active:scale-100'
          >
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCards;
