import CardCategory from "../components/CardCategory";
import P1 from "../assets/imgs/P1.jpg";
import Cover from "../components/Cover";
import CoverP1 from "../assets/imgs/CoverP1.jpg";
import Footer from "../components/Footer";
import SelectionBar from "../components/SelectionBar";
import SeafoodList from "../components/food/SeafoodList";

export default function SeafoodsPage() {
  return (
    <div>
      <div>
        <Cover img={CoverP1} text="Seafoods" span="Delicious Filipino Cuisine

" />
      </div>
      <div className="flex justify-center items-center">
        <SelectionBar />
      </div>
    
    <SeafoodList title="Seafood" />
      
      <Footer
      bgcolor="bg-red-600"/>
    </div>
  );
}
