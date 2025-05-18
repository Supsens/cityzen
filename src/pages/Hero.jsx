// src/components/Hero.jsx
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      
      
   

    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Make Your Voice Heard
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Report issues in your community and track their resolution in real time.
        </p>
        <div className="space-x-4">
          <Link
            to="/report"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
          >
            Report an Issue
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 rounded-lg font-semibold"
          >
            Login
          </Link>
        </div>
        <div className="mt-12 flex items-center space-x-2 text-green-400">
          <AiOutlineCheckCircle size={24} />
          <span className="font-medium text-lg">
            Trusted by thousands of citizens
          </span>
        </div>
      </div>
    </section>
  );
}
