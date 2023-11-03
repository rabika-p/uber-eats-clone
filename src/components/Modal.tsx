import {AiOutlineClose} from "react-icons/ai";

interface IModal{
    showModal: boolean;
    label: string;
    setShowModal:boolean;
}

const Modal:React.FC<IModal> = ({showModal, label, setShowModal}) => {
    if (!showModal){
        return null;
    }

    return (
        <div className='h-screen fixed w-full'>
          <div className=' bg-white flex flex-col fixed shadow-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-40 w-80 p-4 rounded-xl'>
            <div className='flex justify-end cursor-pointer'>
              <AiOutlineClose 
                onClick={() => 
                setShowModal(false)} 
              />
            </div>
            <div className='flex justify-center items-center  h-full'>
              {label} Clicked!
            </div>
          </div>
        </div>
      );
    };

export default Modal