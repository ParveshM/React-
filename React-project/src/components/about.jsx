import { useNavigate, Link, Outlet } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About us page</h1>
      <p>This is React router dom about 🚀</p>
      <Outlet />
      <h3>
        <Link to={"/about/profile"}>Profile</Link>{" "}
      </h3>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
};

export default About;
