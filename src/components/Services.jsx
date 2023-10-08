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
    <div>
      <div className="w-fit mx-auto mt-10 px-9 text-5xl font-bold from-[#383636] via-[#656466] to-[#ffffff] bg-gradient-to-r bg-clip-text text-transparent">
        <p >Our Services</p>
      </div>
      <p className="w-2/3 mx-auto text-center my-4">These event services are designed to facilitate and enhance learning experiences, both in formal educational settings and through various educational events. </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {
            services.map((service)=><Service key={service.id} service={service}></Service>)
        } 
      </div>
    </div>
  );
};

export default Services;
