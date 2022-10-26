import CardCategory from "../components/CardCategory";
import P1 from "../assets/imgs/P1.jpg";
import Button from "../components/Button";
import Cover from "../components/Cover";
import CoverP1 from "../assets/imgs/CoverP1.jpg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import BestSellerList from "../components/food/BestSellerList";



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
      <BestSellerList/>
       
      </div>
      <Footer
      bgcolor="bg-red-600"/>
    </div>
  );
}
