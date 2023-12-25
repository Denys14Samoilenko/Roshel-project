import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

export const NotFoundPage = () => {
  return (
    <section className="section not-found-page">
      <p>Page not found</p>
      <Link className="button button-primary" to="/">
        Back to Home page
      </Link>
    </section>
  );
};
