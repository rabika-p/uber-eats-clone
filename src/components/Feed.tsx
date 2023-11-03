import { feedItemData } from '../data/feedItemData';
import FeedsItem from "./FeedsItem"

const Feed = () => {
  return (
    <section>
    <div className='p-7 mt-10 md:grid md:grid-cols-3 md:gap-4'>
     {
        feedItemData.map((item) => (
            <FeedsItem {...item} />
        ))
    }
    </div>
  </section>
  )
}

export default Feed