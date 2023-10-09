import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const NewsLetter = () => {
  return (
    <div>
      <Card className="w-full max-w-full mx-auto flex-row my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
            data-aos="zoom-in"
          data-aos-duration="1500"
          />
        </CardHeader>
        <CardBody className="mt-16">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            NewsLetter
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Weekly Digest of Knowledge and Updates
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Welcome to our weekly newsletter! Dive into a world of knowledge and
            stay up-to-date with the latest updates, insights, and stories
            curated just for you. Join us on this journey of learning and
            discovery as we bring you valuable content and updates every week.
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Sign Up For NewsLetter
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
  );
};

export default NewsLetter;
