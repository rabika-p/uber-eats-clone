interface IFeed{
        img: any,
        alt: string,
        heading: string,
        link: string    
}

const FeedsItem:React.FC<IFeed> = ({img, alt, heading, link}) => {
  return (
    <div>
        <img src={img} alt={alt}/>
        <h2 className='text-xl font-bold p-1'>{heading}</h2>
        <h5 className='my-3'><a href="" className='underline'>{link}</a></h5>
    </div>
  )
}

export default FeedsItem
