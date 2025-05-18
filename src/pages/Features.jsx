// src/components/Features.jsx
import { AiOutlineForm, AiOutlineEye, AiOutlineBell } from "react-icons/ai";

const features = [
  {
    icon: <AiOutlineForm size={32} />,
    title: "Easy Reporting",
    desc: "Quickly submit complaints with our intuitive form.",
  },
  {
    icon: <AiOutlineBell size={32} />,
    title: "Instant Notifications",
    desc: "Get real-time updates when your issue is viewed or acted upon.",
  },
  {
    icon: <AiOutlineEye size={32} />,
    title: "Transparent Tracking",
    desc: "Monitor progress from ‘Pending’ to ‘Resolved’ at a glance.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
