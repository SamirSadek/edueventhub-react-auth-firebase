import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {id,image,name,price} = service
    console.log(service)

  return (
    <div>
      <div className="overflow-hidden mx-auto mt-2 border-b-2 border-t-8 border-black rounded-lg has-shadow w-80">
        <img
          src={image}
          className="aspect-video rounded-b-none h-40"
          alt=""
        />
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="text-sm">
            <p>
              🕹 Customizable and 😍 accessible design system which provides
              TailwindCSS component className name library to build modern UI.
              💥
            </p>
          </div>
          <div className="text-center mt-7">
            <p><span className="text-5xl"><sup>$</sup>{price}</span>/Event</p>
          </div>
          <Link to={`/service/${id}`}>
          <button className="w-full btn bg-black text-white hover:text-black ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
