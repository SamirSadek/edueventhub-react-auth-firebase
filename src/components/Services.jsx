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
      <div className="w-fit mx-auto p-9 text-5xl font-bold from-[#6366F1] via-[#D946EF] to-[#FB7185] bg-gradient-to-r bg-clip-text text-transparent">
        <p>Our Services</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-16">
        {
            services.map((service)=><Service key={service.id} service={service}></Service>)
        } 
      </div>
    </div>
  );
};

export default Services;
