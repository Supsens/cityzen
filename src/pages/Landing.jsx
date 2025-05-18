import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-center bg-cover bg-black"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow">
            Empower Your City, One Report at a Time
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
            Seamlessly report issues, track resolutions, and hold local authorities accountable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/report"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Report an Issue
            </Link>
            <Link
              to="/login"
              className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition"
            >
              Login / Admin
            </Link>
          </div>

        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Us?</h2>
        <div className="grid gap-6 px-4 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Quick Reporting</h3>
            <p className="text-gray-600">
              Submit complaints in under a minute with our user-friendly form.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Live Tracking</h3>
            <p className="text-gray-600">
              Follow your complaint from submission to resolution in real time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-gray-600">
              View updates from officials and see how your feedback impacts change.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Citizen Feedback System</p>
        <div className="mt-2 text-sm space-x-4">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
