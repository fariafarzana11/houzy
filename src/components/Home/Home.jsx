import Hero from "../Hero/Hero";
import Review from "../Review/Review";
//import Location from '../Location/Location'
import Houses from "../House/Houses";
import ApartmentCard from "../Apartment/ApartmentCard";
import Contact from "../Contact/Contact";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Houses></Houses>
            <ApartmentCard></ApartmentCard>
            <Review></Review>
            <Contact></Contact>
           {/* <Location></Location>  */}
        </div>
    )
}
export default Home;