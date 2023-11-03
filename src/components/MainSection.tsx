import {IoLocationSharp} from 'react-icons/io5'; 
import {HiClock} from 'react-icons/hi'; 
import Button from './Button';

const MainSection= () => {
  return (
    <>
    <section className='bg-[#f7cb00] h-screen flex flex-col justify-center p-6'>
        <h1 className='mt-5 mb-5 font-sans text-4xl font-bold'>Order food to your door</h1>
        <form className='flex flex-col md:flex-row md:items-center mt-4'>
            <div className='flex items-center p-4 mb-4 md:mb-0 md:mr-4 bg-white'>
                <IoLocationSharp />
                <input type='text' name='address' placeholder='Enter delivery address'required 
                className='w-full md:w-[40vw] pl-1'/>
            </div>
            <div className='flex items-center p-4 mb-4 md:mb-0 md:mr-4 bg-white'>
                <HiClock />
                <select name='delivery-status' id='delivery-select' className='w-full'>
                    <option value='deliver'>Delivery</option>
                    <option value='schedule'>Schedule For Later</option>
                </select>
            </div>
            <Button variant='secondary' label='Find Food' customStyling='p-3 rounded-xl shadow-md w-24 h-16 text-base cursor-pointer bg-black text-white'/>
        </form>
        <h5 className='mt-5 text-lg'>
            <a href='' className='underline'>Sign in</a> for your recent addresses
        </h5>
    </section>
    </>
  );
};

export default MainSection;
