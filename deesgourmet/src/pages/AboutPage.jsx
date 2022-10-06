import Cover from "../components/Cover";
import CoverP1 from "../assets/imgs/CoverP1.jpg";
import Footer from "../components/Footer";
import logo from "../assets/imgs/logo.png";



export default function AboutPage() {
  return (
    <div>
        
      <div>
        {" "}
        <Cover
          img={CoverP1}
          span="Delicious Filipino Cuisine"
          text="About Us"
        />
      </div>

      <div className="flex flex-col items-center my-5 p-10 ">
        <div className="flex flex-col items-center lg:w-4/6 gap-6">
          <div className="flex-shrink-0 flex  gap-3">
            <img className="h-8 w-8 " src={logo} alt="Workflow" />
            <h1 className="flex items-center text-red-600 font-sans text-xl font-black">
              Dee’s Gourmet
            </h1>
          </div>
          <p className="text-center leading-10">
            Dee's Gourmet is a catering service headed by Master Chef and owner
            Dee Gudelosao. </p> <p className="text-center leading-10">Our catering services require a minimum of
            20 to 50 people. We can cater at any time of day. For more
            information about booking, please contact us.
          </p>
        </div>
      </div>
      <Footer
      bgcolor="bg-red-600"/>
    </div>
  );
}
