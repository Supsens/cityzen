import { useParams, useNavigate } from "react-router-dom";
import { getComplaintById, updateComplaintStatus } from "../data.js";
import { useState } from "react";

export default function ComplaintDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const initial = getComplaintById(id);
  const [status, setStatus] = useState(initial?.status || "");

  if (!initial) {
    return <p className="text-center text-red-600">Complaint not found.</p>;
  }

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    updateComplaintStatus(id, newStatus);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-4"
      >
        ← Back
      </button>
      <h2 className="text-2xl font-bold mb-2">{initial.title}</h2>
      <p className="mb-2 text-gray-700">{initial.description}</p>
      <p className="text-gray-600 mb-4">
        Department: {initial.department} | Reported at:{" "}
        {new Date(initial.createdAt).toLocaleString()}
      </p>
      <label className="block mb-2 font-semibold">Status:</label>
      <select
        value={status}
        onChange={handleStatusChange}
        className="p-2 border rounded w-full mb-4"
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Resolved</option>
      </select>
      <p className="text-sm text-gray-500">
        * Status changes are saved in localStorage.
      </p>
    </div>
  );
}
