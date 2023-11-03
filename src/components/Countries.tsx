import { countriesData } from "../data/countriesData"
const Countries = () => {
  return (
    <section className=''>
      <div className='flex justify-between items-center p-7'>
        <h1 className='text-2xl font-bold'>Countries with Uber Eats</h1>
         <h5><a href="" className='underline'> View all Countries </a></h5> 
      </div>
      <div className='p-7 grid grid-cols-2 gap-2 md:grid-cols-4 md:text-left md:gap-4'>
        {
            countriesData.map((item) => (
              <div>
               <div><a href = "" className='text-base col-span-1'> {item}</a></div>
              </div>
            ))
        }
      </div>
    </section>
  )
}

export default Countries