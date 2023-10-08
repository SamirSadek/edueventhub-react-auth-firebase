import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarSection from "../components/NavbarSection";

const ServiceDetails = () => {

    const services = useLoaderData();
    console.log(services)
    const {id} = useParams();
    const integerId = parseInt(id);
    const service = services.find( service => service.id === integerId)
    // eslint-disable-next-line no-unused-vars
    const {image,price,description,name,advantage}=  service
    console.log(service)
  return (
    <div>
      <NavbarSection></NavbarSection>
      <h2 className=" text-3xl text-center mt-8 font-bold underline">{name}</h2>
      <div className="card w-2/3 mx-auto my-10 bg-base-100 shadow-xl border-b-[20px] border-r-2 border-l-2 border-t-2 border-black">
        <figure className="w-full">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-64 max-w-7xl"
          />
        </figure>
        <div className="card-body  ">
          
          <p>{description}</p>
          <p>{advantage}</p>
          <div className="bg-blue-gray-800 mt-4 p-4 rounded-b-3xl text-center">
            <p className="text-white"><span className="text-5xl "><sup>$</sup>{price}</span> /event</p>
          </div>
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;
