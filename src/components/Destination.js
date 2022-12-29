import Mountain1 from '../assets/1.jpg';
import Mountain2 from '../assets/2.jpg';
import Mountain3 from '../assets/4.jpg';
import Mountain4 from '../assets/5.jpg';
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = ()=>{
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours gives you  the opportunity to see a lot,within a time frame</p>

   <DestinationData className="first-des" heading="Taal Volcano,Batangas" text="One of the most iconic views in Luzon,Mt.Taal boasts a volcano iside a lake inside an island.If You fancy a closer look, the hike up to the crater is a mere 45minutes, and is easy enough for beginners.Guides will assist you most of the way,and you'll see the peculiar environment found on an active volcano,including volcanic rocks and steam vents.The hike can be dusty and hot so plan for an early morning trip,and then unwind with some bulalo before heading back home!"   img1={Mountain1} img2={Mountain2} ></DestinationData>
   <DestinationData className="first-des-reverse"heading="Mt.Danguldul,Batangas" text="If you're looking for a hike that's little more challenging but still good for a beginner mountaineer,check out Mt.Danguldul in San Juan,Batangas.You'll start your hike from the beach and pass through tropical forest,different rock formations,and small streams.There's a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best biew, the breeze is fantastic.Once ou've made it back down, head straight to the beach for a refreshing, well-deserved swim"   img1={Mountain3} img2={Mountain4} ></DestinationData>

        </div>
    )
}
export default Destination;