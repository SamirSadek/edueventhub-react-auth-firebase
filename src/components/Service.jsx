import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {id,image,name,price,description} = service
    console.log(service)

  return (
    <div>
      <div className="overflow-hidden min-h-max-h-screen mx-auto mt-2 border-b-2 border-r-2 border-l-2 border-t-[20px] border-blue-gray-900 rounded-lg has-shadow w-80">
        <img
          src={image}
          className="aspect-video rounded-b-none h-40"
          alt=""
        />
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="text-sm">
            <p>
              {description}
            </p>
          </div>
          <div className="text-center mt-7">
            <p><span className="text-5xl"><sup>$</sup>{price}</span>/Event</p>
          </div>
          <Link to={`/service/${id}`}>
          <button className="w-full btn bg-base-200 text-blue-gray-700 hover:text-black ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
