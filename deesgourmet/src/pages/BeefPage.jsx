import CardCategory from "../components/CardCategory";
import P1 from "../assets/imgs/P1.jpg";
import Cover from "../components/Cover";
import CoverP1 from "../assets/imgs/CoverP1.jpg";
import Footer from "../components/Footer";
import SelectionBar from "../components/SelectionBar";

export default function BeefPage() {
  return (
    <div>
      <div>
        <Cover img={CoverP1} text="Beef" span="Delicious Filipino Cuisine" />
      </div>
      <div className="flex justify-center items-center">
        <SelectionBar />
      </div>

      <div className="flex flex-col p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Beef</h1>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
          <CardCategory text="Lumpia Shanghai" img={P1} />
          <CardCategory text="Beef" img={P1} />
          <CardCategory text="Chicken" img={P1} />
          <CardCategory text="Vegetables" img={P1} />
          <CardCategory text="Noodles" img={P1} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
