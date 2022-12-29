import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";

function Trip(){
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData image={Trip1}
                
                heading="Trip in Indonesia"
                text="Indonisia,officially the Republic of Indonesia is a country in Southeast Asia and OCeania between the Indian and Pacific oceans.It consists of over 17,000 islands,including Sumatra,Java,Sulawesi,and parts of Borneo and New Guinea."
                />
                        <TripData image={Trip2}
                
                heading="Trip in Malaysia"
                text="Malaysia boasts one of south-east Asia's most vibrant economies, the fruit of decades of industrial growth and political stability. Consisting of two regions separated by some 640 miles of the South China Sea, Malaysia is a multi-ethnic, multi-religious federation of 13 states and three federal territories"
                />
                 <TripData image={Trip3}
                
                heading="Trip in France"
                text="France, in Western Europe, encompasses medieval cities,alphine villages and Meditarrean beaches.PAris, its captial is famed for its fashion houses , classical art musem including the Louvre and monuments like the Eiffel Tower."
                />
            </div>
        </div>
    );
}
export default Trip;