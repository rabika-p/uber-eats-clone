import { useState } from 'react'

import {AiOutlineMenu} from 'react-icons/ai'

import Button from './Button'
import Modal from './Modal'

const Navbar = () => {
  const [label, setLabel] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [changeBg, setChangeBg] = useState("");
  const [changeShadow, setShadow] = useState("");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setChangeBg('bg-white');
      setShadow('shadow-md');
    } else {
      setChangeBg('bg-[#f7cb00]');
      setShadow('shadow-none');
    }
  });

  return (
    <nav className={`fixed flex justify-between p-6 w-full ${changeBg} ${changeShadow}`}>
        <div className='flex items-center'>
            <AiOutlineMenu/>
            <h1 className='ml-4 text-3xl font-semibold'><span className='font-montserrat'> 
            Uber </span> Eats</h1>
        </div>
        <div className='flex gap-4'>

          <Button variant='primary' label='Log In' value='Login'
          onClick={(e) => {
            setLabel(e.target.value)
            setShowModal(true)
          }
          } 
          
          customStyling='p-3 rounded-full w-20 h-12 md:w-28 text-base cursor-pointer bg-white shadow-md'/>
          
          <Button variant='secondary' label='Sign Up' value='Signup' 
           onClick={(e) => {
            setLabel(e.target.value)
            setShowModal(true)
          }
          } 
          customStyling='p-3 rounded-full w-20 h-12 md:w-28 text-base cursor-pointer bg-black text-white shadow-md'/>
            
        </div>
        <Modal showModal = {showModal} label ={label} setShowModal={setShowModal}/>
    </nav>
  )
}

export default Navbar