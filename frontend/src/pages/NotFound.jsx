import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <article className="mx-auto max-w-prose px-6 py-24 text-center">
      <div className="label">404</div>
      <h1 className="mt-2 font-sans text-3xl font-bold tracking-tight">
        This page doesn't exist.
      </h1>
      <p className="mt-3 text-ink-soft">
        Like an unresolved wikilink — it points somewhere, but nothing is there
        yet.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/garden" className="btn-ghost">
          Garden
        </Link>
      </div>
    </article>
  );
}
