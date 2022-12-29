import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home (){
    return(<>
              <Navbar/>
 <Hero 
 cName="hero"
 heroImg="https://webneel.com/wallpaper/sites/default/files/images/04-2013/14-beach-sea-photography.1366.jpg"
 title="Your Journey Your Story"
 text="Choose your Favourite Destination."
 buttonText="Travel Plan"
 url="/"
 btnClass="show"
 />
 <Destination></Destination>
 <Trip></Trip>
 <Footer></Footer>
    </>);
}
export default Home;