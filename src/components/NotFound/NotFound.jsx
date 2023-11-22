import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__circle"></div>
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Page Not Found</p>
      <p className="not-found__subtext">
        The page you're looking for doesn't exist or has been moved.
      </p>
    </div>
  );
};

export default NotFound;
