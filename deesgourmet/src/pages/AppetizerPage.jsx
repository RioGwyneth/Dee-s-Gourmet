import CardCategory from "../components/CardCategory";
import P1 from "../assets/imgs/P1.jpg";
import Cover from "../components/Cover";
import CoverP1 from "../assets/imgs/CoverP1.jpg";
import Footer from "../components/Footer";
import SelectionBar from "../components/SelectionBar";
import AppetizersList from "../components/food/AppetizersList";

export default function AppetizerPage() {
  return (
    <div>
      <div>
        <Cover img={CoverP1} text="Appetizers" span="Delicious Filipino Cuisine" />
      </div>
      <div className="flex justify-center items-center">
        <SelectionBar />
      </div>

    <AppetizersList
    title="Appetizers"/>

      <Footer
      bgcolor="bg-red-600"/>
    </div>
  );
}
