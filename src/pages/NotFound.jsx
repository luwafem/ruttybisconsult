import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald-600">404</h1>
        <p className="text-xl mt-4">Page not found</p>
        <Link to="/" className="inline-block mt-6 text-emerald-600 underline">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;