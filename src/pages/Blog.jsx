import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import NavbarSection from "../components/NavbarSection";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
const Blog = () => {
  return (
    <div>
        <NavbarSection></NavbarSection>
        <div className="w-fit mx-auto pt-10  px-9 text-4xl font-bold from-[#383636] via-[#656466] to-[#ffffff] bg-gradient-to-r bg-clip-text text-transparent">
        <p >Important Blogs</p>
      </div>
      <p className="w-2/3 mx-auto text-center my-4">Welcome to our Blog Section, where knowledge meets inspiration. Dive into a world of thought-provoking articles, insightful stories, and expert opinions. Our blog is your gateway to staying informed, entertained, and enlightened. </p>
      <div className="w-60 border-2 mx-auto mb-20 border-blue-gray-900"></div>
      <div className="w-2/3 mx-auto">
      <Card className="w-full max-w-full mx-auto flex-col sm:flex-row my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full sm:w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://i.ibb.co/L5ccb7y/headway-F2-KRf-Qf-Cqw-unsplash.jpg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="mt-5">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Educational 
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
          Educational Summit Specialists
        </Typography>
          <Typography color="gray" className="mb-8 font-normal">
          Elevating your educational summits to new heights. Our team ensures your message resonates with attendees.
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Read Full Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
      <Card className="w-full max-w-full mx-auto flex-col sm:flex-row my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full sm:w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://i.ibb.co/WHtN6Wj/alexandre-pellaes-6v-Ajp0psc-X0-unsplash-1.jpg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="mt-5">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Academic  
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
          Academic Program Coordinators
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
          Streamlining education events with precision. We handle the logistics, so you can focus on delivering impactful content.
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Read Full Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
      <Card className="w-full max-w-full mx-auto flex-col sm:flex-row my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full sm:w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://i.ibb.co/PjZCqFJ/kenny-eliason-1-a-A2-Fadydc-unsplash.jpg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="mt-5">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Planning
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
          Learning Symposium Planners
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
          Experts in curating dynamic learning experiences. We design and manage symposiums that foster knowledge exchange and growth.

          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Read Full Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
      </div>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
