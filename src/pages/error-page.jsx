import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Error Page</h1>
      {error && <p>{error?.data}</p>}
      <Link to="/">
        <button className="px-4 py-2 bg-slate-600 text-white rounded-lg">
          Go Home
        </button>
      </Link>
    </div>
  );
};
