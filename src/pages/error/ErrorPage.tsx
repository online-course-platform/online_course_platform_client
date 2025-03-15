import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Link to='/'>
          <button className="cursor-pointer border-2 p-2 mt-4">Back To Home</button>
          </Link>
    </div>
  );
};

export default ErrorPage;
