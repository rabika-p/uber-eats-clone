const BottomFooter = () => {
  return (
    <div className='mt-3 p-7 border-t border-gray-400 border-opacity-25'>
       <div className='md:flex md:justify-between'>
        <div className='flex gap-5'>
          <i className='fa-brands fa-square-facebook'></i>
          <i className='fa-brands fa-twitter'></i>
          <i className='fa-brands fa-instagram'></i>
        </div>

        <div className='mt-4 md:flex md:justify-evenly md:gap-x-4 md:mt-0'>
          <div><a href=""> Privacy Policy </a></div>
          <div><a href=""> Terms </a></div>
          <div><a href=""> Pricing </a></div>
          <div>
            <a href="">
              Do not sell or share my personal information</a>
          </div>
        </div>
      </div>

      <div className='md:flex md:justify-end gap-4 mt-8'>
        <div>
          This site is protected by reCAPTCHA and the Google
          <a href=""> Privacy Policy </a> and
          <a href=""> Terms of Service </a> apply.
        </div>
        <div className='mt-4 md:mt-0'>&copy; 2023 Uber Technologies Inc</div>
      </div>
    </div>
  
  )
}

export default BottomFooter