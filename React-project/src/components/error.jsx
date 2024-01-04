import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {status}, {statusText}
      </h3>
      <Link to={"/"}>Go back to home</Link>
    </div>
  );
};

export default Error;
