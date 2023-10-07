import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {id,image,name,price} = service
    console.log(service)

  return (
    <div>
      <div className="overflow-hidden mx-auto mt-2 rounded-lg has-shadow w-80">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="aspect-video rounded-b-none"
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
          <div className="text-center">
            <p><span className="text-5xl">{price}</span>/Taka</p>
          </div>
          <Link to={`/service/${id}`}>
          <button className="w-full btn solid success">Service Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
