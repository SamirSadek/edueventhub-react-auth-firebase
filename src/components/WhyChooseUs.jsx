import { Card, CardBody, Typography } from "@material-tailwind/react";

const WhyChooseUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5">
      <Card className="mt-6 w-96 shadow-none">
        <CardBody>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 mx-auto w-12  text-gray-900"
          >
            <path d="M4 1h16a2 2 0 012 2v18a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm1 2a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H5zm0 10a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1v-1a1 1 0 00-1-1H5zm0 6a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1v-1a1 1 0 00-1-1H5zm6-10a1 1 0 001 1h2a1 1 0 001-1v3h-4V4z" />
          </svg>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-center"
          >
            Planning and Preparation
          </Typography>
          <Typography className="ml-10">
          Identify Goals and Objectives <br />Audience Analysis <br />Select Relevant Topics and Speakers <br />Venue and Logistics
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96 shadow-none">
        <CardBody>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 w-12 mx-auto text-gray-900"
          >
            <path d="M4 2a1 1 0 011 1v18a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h2zm1 2h6v14H5V4zm14 0h2a1 1 0 011 1v16a1 1 0 01-1 1h-2a1 1 0 01-1-1V5a1 1 0 011-1zm-5 4a1 1 0 011 1v10a1 1 0 01-1 1H8a1 1 0 01-1-1V7a1 1 0 011-1h6zm0 2H8v8h6V9z" />
          </svg>

          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-center"
          >
             Development and Delivery
          </Typography>
          <Typography className="ml-10">
          Curriculum Development <br />Engaging Content <br />Materials and Resources <br />Feedback Mechanism

          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96 shadow-none">
        <CardBody>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 w-12 mx-auto text-gray-900"
          >
            <path
              fillRule="evenodd"
              d="M20 8.47c.804.723 1.168 1.867.975 3-.29 2.5-2.317 4.402-4.82 4.462a5.499 5.499 0 00-.123-.017l-3.498-3.5-1.412 1.418 3.498 3.5a5.507 5.507 0 001.372.69c-.38.554-.82 1.073-1.285 1.554l-2.693-2.693-1.412 1.418 2.692 2.692c-1.513 1.008-3.436 1.539-5.41 1.504C6.464 20.942 2 16.477 2 11s4.464-9.942 9.99-10c4.414.043 8.062 3.71 8.06 8.125-.002 2.072-.635 3.993-1.707 5.572zM12.007 2C7.58 2 4 5.578 4 10s3.58 8 8.007 8c4.426 0 8.007-3.578 8.007-8s-3.58-8-8.007-8z"
              clipRule="evenodd"
            />
          </svg>

          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-center"
          >
            Promotion and Execution
          </Typography>
          <Typography className="ml-10">
          Marketing and Promotion <br />Registration and Ticketing <br />Event Day Management <br />Post-Event Evaluation
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default WhyChooseUs;
