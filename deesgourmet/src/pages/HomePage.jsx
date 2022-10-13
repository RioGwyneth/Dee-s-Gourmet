import CardCategory from "../components/CardCategory";
import P1 from "../assets/imgs/P1.jpg";
import Button from "../components/Button";
import Cover from "../components/Cover";
import CoverP1 from "../assets/imgs/CoverP1.jpg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";



export default function HomePage({ 
 }) {

  const navigate = useNavigate ();

  return (
    <div >
   
      <div> 
        <Cover
        img={CoverP1}
        span="Delicious Filipino Cuisine"
        withButton={true}
       
      /></div>
     
      <div className="flex flex-col items-center p-10">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-xl">Best Seller</h1>
          <p className="text-center">The most commonly order food from Dee’s Gourmet</p>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
          <CardCategory text="Lumpia Shanghai" img={P1} />
          <CardCategory text="Beef" img={P1} />
          <CardCategory text="Chicken" img={P1} />
          <CardCategory text="Vegetables" img={P1} />
          <CardCategory text="Noodles" img={P1} />
        </div>
        <div>
        <Button
          width="w-full"
          text="View More"
          textcolor="text-red-600"
          padding="px-20 py-2"
          custom={"border-2 border-red-600 border-solid hover:bg-red-600 hover:text-white hover:border-red-600 "}
          onClick={() => navigate("/menu")}
        />
        </div>
       
      </div>
      <Footer/>
    </div>
  );
}
