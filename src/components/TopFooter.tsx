import ImgPlayStore from '../assets/images/google play.png';
import ImgAppStore from '../assets/images/app store.png';
import { topFooterLinksData } from '../data/topFooterLinksData';

const TopFooter = () => {
  return (
    <div className='p-7 md:flex border-t border-gray-400 border-opacity-25'>
      <div className='md:flex md:justify-between md:content-center'> 
      <div className='md:flex md:flex-col md:justify-between'> 
      <h1 className='ml-4 text-3xl font-semibold'><span className='font-montserrat '> Uber </span> Eats</h1>
        <div className='flex items-center'>
            <img src={ImgPlayStore} className='h-auto w-44' alt="Get it on google play logo" /> 
            <img src={ImgAppStore} className='h-auto w-44' alt="Get it on app store logo" /> 
        </div>
      </div>
        <div className='grid grid-cols-2 gap-3 p-7 md:grid md:ml-44 md:gap-x-28'>
        {
            topFooterLinksData.map((item) => (
              <div>
                  <a href="">{item}</a>
              </div>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default TopFooter