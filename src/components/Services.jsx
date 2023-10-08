import { useState } from "react";
import { useEffect } from "react";
import Service from "./service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    // bg-[url('https://i.ibb.co/Q8z8VjR/mesh-167-1.png')] bg-cover bg-center bg-no-repeat
    <div className=" pb-10  ">
      <div className="w-fit mx-auto pt-10  px-9 text-4xl font-bold from-[#383636] via-[#656466] to-[#ffffff] bg-gradient-to-r bg-clip-text text-transparent">
        <p >Our Services</p>
      </div>
      <p className="w-2/3 mx-auto text-center my-4">These event services are designed to facilitate and enhance learning experiences, both in formal educational settings and through various educational events. </p>
      <div className="w-60 border-2 mx-auto mb-20 border-blue-gray-900"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {
            services.map((service)=><Service key={service.id} service={service}></Service>)
        } 
      </div>
    </div>
  );
};

export default Services;
