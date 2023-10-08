
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import 'font-awesome/css/font-awesome.min.css';

const Team = () => {
  return (
    <div className="w-3/4 mx-auto">
        <div className="w-fit mx-auto pt-10  px-9 text-4xl font-bold from-[#383636] via-[#656466] to-[#ffffff] bg-gradient-to-r bg-clip-text text-transparent">
        <p >Founders</p>
      </div>
      <p className="w-2/3 mx-auto text-center my-4">These event services are designed to facilitate and enhance learning experiences, both in formal educational settings and through various educational events. </p>
      <div className="w-60 border-2 mx-auto mb-20 border-blue-gray-900"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-8">
      <Card className="w-96 md:w-72 lg:w-96">
        <CardHeader floated={false} className="h-60">
          <img
            className="h-full"
            src="https://i.ibb.co/hyQsXZ4/pexels-photo-2381069.webp"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fa fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fa fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fa fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
      <Card className="w-96 md:w-72 lg:w-96">
        <CardHeader floated={false} className="h-60">
          <img
            className="h-full"
            src="https://i.ibb.co/q1xfKc4/istockphoto-1450340623-170667a.webp"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fa fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fa fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fa fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
      <Card className="w-96 md:w-72 lg:w-96">
        <CardHeader floated={false} className="h-60">
          <img
            className="h-full"
            src="https://i.ibb.co/2scHVSc/istockphoto-1448167415-170667a.webp"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fa fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fa fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fa fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
    </div>
  );
};

export default Team;
