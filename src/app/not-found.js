import Link from "next/link";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-error/10 flex items-center justify-center">
            <FaExclamationTriangle className="text-5xl text-error" />
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-extrabold text-primary">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-base-content/70 mt-3 mb-8">
          Sorry, the page you're looking for doesn't exist, has been moved,
          or the URL is incorrect.
        </p>

        <Link
          href="/"
          className="btn btn-primary gap-2 rounded-full px-6"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </section>
  );
}