// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-blue-800 text-gray-200 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p>© {new Date().getFullYear()} Citizen Feedback System</p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  }
  