// src/components/ComplaintCard.jsx
import { Link } from "react-router-dom";

export default function ComplaintCard({ complaint, adminView }) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{complaint.title}</h3>
        <p className="text-sm text-gray-600">
          Dept: {complaint.department} | Status:{" "}
          <span className={
            complaint.status==="Resolved" ? "text-green-600"
            : complaint.status==="In Progress" ? "text-yellow-600"
            : "text-red-600"
          }>
            {complaint.status}
          </span>
        </p>
      </div>
      <Link
        to={adminView ? `/admin/complaints/${complaint.id}` : `/complaints/${complaint.id}`}
        className="mt-4 text-blue-600 hover:underline text-sm"
      >
        View Details →
      </Link>
    </div>
  );
}
