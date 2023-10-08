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
    const {image,price,description,name}=  service
    console.log(service)
  return (
    <div>
      <NavbarSection></NavbarSection>
      <div className="card w-2/3 mx-auto my-10 bg-base-100 shadow-xl border-b-[20px] border-black">
        <figure className="w-full">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-96 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{name}</h2>
          <p>{description}</p>
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;
