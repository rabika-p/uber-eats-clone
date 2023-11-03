import FoodImg from '../assets/images/food.jpg';
import CookingImg from '../assets/images/cooking.jpg';
import DeliveryImg from '../assets/images/delivery.jpg';

interface IFeed{
    img: any,
    alt: string,
    heading: string,
    link: string    
}
//put it in a type folder, file

export const feedItemData:IFeed[] = [
    {
        img: FoodImg,
        alt: "Image of a food plate",
        heading: "Feed your employees",
        link: "Create a business account"
    },
    {
        img: CookingImg,
        alt: "Woman frying food in a pan",
        heading: "Your restaurant, delivered",
        link: "Add your restaurant"
    },
    {
        img: DeliveryImg,
        alt: "Man on a scooter going to deliver food",
        heading: "Deliver with Uber Eats",
        link: "Sign up to deliver"

    }
]