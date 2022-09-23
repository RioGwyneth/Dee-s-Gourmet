import CardCategory from "../components/CardCategory";
import P1 from "../assets/imgs/P1.jpg";
import Button from "../components/Button";
import Cover from "../components/Cover";
import CoverP1 from "../assets/imgs/CoverP1.jpg";

export default function HomePage() {
  return (
    <div>
      <Cover
        img={CoverP1}
        span="Delicious Filipino Cuisine"
        withButton={true}
       
      />
      <div className="flex flex-col px- items-center p-10">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-xl">Party Menu</h1>
          <p>The most commonly order food from Dee’s Gourmet</p>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
          <CardCategory text="Appetizers" img={P1} />
          <CardCategory text="Beef" img={P1} />
          <CardCategory text="Chicken" img={P1} />
          <CardCategory text="Vegetables" img={P1} />
          <CardCategory text="Noodles" img={P1} />
        </div>
        <div>
          <Button text="View more" bgcolor="bg-red-600" padding="px-20 py-2" />
        </div>
      </div>
    </div>
  );
}
