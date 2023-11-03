import { citiesData } from '../data/citiesData';

const Cities = () => {
  return (
    <section className=''>
      <div className='flex justify-between items-center p-7'>
        <h1 className='text-2xl font-bold'>Cities near me</h1>
         <h5><a href="" className='underline'> View all 500+ cities </a></h5> 
      </div>
      <div className='w-full px-7'>
      <iframe
        className="w-full h-96"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Dublin,%20Ireland+
        (My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      </div>
      
      <div className='p-7 mt-10 grid grid-cols-2 gap-2 md:grid-cols-4 md:text-left md:gap-4'>
        {
            citiesData.map((item) => (
              <div>
               <div><a href = "" className='text-base col-span-1'> {item}</a></div>
              </div>
            ))
        }
        
      </div>
    </section>
  )
}

export default Cities