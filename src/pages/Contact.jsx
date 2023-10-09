import Footer from "../components/Footer";
import { FaPhone, FaWpforms, FaRocketchat } from "react-icons/fa";
import NavbarSection from "../components/NavbarSection";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <div>
      <NavbarSection></NavbarSection>
      <h2 className="text-center mt-10 text-4xl font-bold">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5">
        <Card className="mt-6 w-96 shadow-none">
          <CardBody>
            <div>
              <FaPhone className="w-40 h-20 mb-4" />
            </div>

            <Typography variant="h5" color="blue-gray" className="mb-2">
              By Phone
            </Typography>
            <Typography className="">
              North America Toll-Free: <br />
              1-4545-4545-4545 <br /> <br />
              International: <br />
              1-1223-23-2323-32
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96 shadow-none">
          <CardBody>
            <FaWpforms className="w-40 h-20 mb-4" />

            <Typography variant="h5" color="blue-gray" className="mb-2 ">
              Start A New Case
            </Typography>
            <Typography className="">
              Just send us your questions <br />
              Or Concern by starting a <br />
              new case and we will give <br />
              you the help you need.
            </Typography>
            <Button className="mt-2">Start here</Button>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96 shadow-none">
          <CardBody>
            <FaRocketchat className="w-40 h-20 mb-4" />

            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 "
            >
              Live Chat
            </Typography>
            <Typography className="">
              Chat With a member of <br />
              our in-house team.
            </Typography>
            <Button className="mt-2">Start Chat</Button>
          </CardBody>
        </Card>
      </div>
      <NewsLetter></NewsLetter>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
