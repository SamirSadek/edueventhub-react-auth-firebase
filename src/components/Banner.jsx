import { Carousel, Typography } from "@material-tailwind/react";

const Banner = () => {
    return (
        <Carousel className="rounded-sm h-96 overflow-hidden">
        <div className="relative h-96 max-h-96 w-full ">
          <img
            src="https://i.ibb.co/WHtN6Wj/alexandre-pellaes-6v-Ajp0psc-X0-unsplash-1.jpg"
            alt="image 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 grid h-96 max-h-96 w-full  place-items-center bg-black/75">
            <div className="w-2/3 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4  text-3xl md:text-4xl lg:text-5xl"
              >
                Educational Summit Specialists
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Elevating your educational summits to new heights. Our team ensures your message resonates with attendees.
              </Typography>
              
            </div>
          </div>
        </div>
        <div className="relative h-full w-full ">
          <img
            src="https://i.ibb.co/L5ccb7y/headway-F2-KRf-Qf-Cqw-unsplash.jpg"
            alt="image 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 grid h-full w-full  place-items-center bg-black/75">
            <div className="w-2/3 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4  text-3xl md:text-4xl lg:text-5xl"
              >
                Academic Program Coordinators
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Streamlining education events with precision. We handle the logistics, so you can focus on delivering impactful content.
              </Typography>
              
            </div>
          </div>
        </div>
        <div className="relative h-full w-full ">
          <img
            src="https://i.ibb.co/PjZCqFJ/kenny-eliason-1-a-A2-Fadydc-unsplash.jpg"
            alt="image 3"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 grid h-full w-full  place-items-center bg-black/75">
            <div className="w-full text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Learning Symposium Planners
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Experts in curating dynamic learning experiences. We design and manage symposiums that foster knowledge exchange and growth.
              </Typography>
              
            </div>
          </div>
        </div>
      </Carousel>
    );
};

export default Banner;