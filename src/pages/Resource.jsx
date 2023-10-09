import { useState } from "react";
import { useEffect } from "react";
import FreeAccess from "../components/FreeAccess";
import NavbarSection from "../components/NavbarSection";
import Footer from "../components/Footer";

  

const Resource = () => {

  
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("/resources.json")
      .then((res) => res.json())
      .then((data) => setResources(data));
  }, []);

  return (
    <div>
      <NavbarSection></NavbarSection>
      <div className=" pb-10  ">
      <div className="w-fit mx-auto pt-10  px-9 text-4xl font-bold from-[#383636] via-[#656466] to-[#ffffff] bg-gradient-to-r bg-clip-text text-transparent">
        <p >Premium Resources</p>
      </div>
      <p className="w-2/3 mx-auto text-center my-4">These Resources are designed to facilitate and enhance learning experiences, both in formal educational settings and through various educational events. </p>
      <div className="w-60 border-2 mx-auto mb-20 border-blue-gray-900"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {
            resources.map((resource)=><FreeAccess key={resources.id} resource={resource}></FreeAccess>)
        } 
      </div>
    </div>
    
         
      <Footer></Footer>
    </div>
  );
};

export default Resource;
