import React from "react";
import "./index.scss";
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404</title>
      </Helmet>
      Not Found
    </div>
  );
};

export default NotFound;
