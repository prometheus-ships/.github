import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="section-title">This page doesn't exist.</h1>
      <p className="text-muted">The page you're looking for was moved or never existed.</p>
      <Link className="btn btn--primary" to="/">
        Back to home
      </Link>
    </section>
  );
}
