import CardCategory from "../components/CardCategory";
import Cover from "../components/Cover";
import CoverP1 from "../assets/imgs/CoverP1.jpg";
import Footer from "../components/Footer";
import SelectionBar from "../components/SelectionBar";
import BestSellerList from "../components/food/BestSellerList";


export default function PopularPage() {

  return (
    <div>
      <div>
        <Cover img={CoverP1} text="Menu" span="Delicious Filipino Cuisine

" />
      </div>
      <div className="flex justify-center items-center">
        <SelectionBar />
      </div>

      <BestSellerList
      title="Best Seller"
      />
      
      <Footer
      bgcolor="bg-red-600"/>
    </div>
  );
}
