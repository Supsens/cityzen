import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminComplaintDetails() {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("complaints")) || [];
    console.log("Loaded complaints:", stored);
    console.log("Looking for ID:", id);
  
    // Ensure both sides are compared as strings
    const found = stored.find((c) => String(c.id) === String(id));
    console.log("Found complaint:", found);
  
    setComplaint(found);
  }, [id]);
  
  const handleStatusChange = (newStatus) => {
    if (!complaint) return;
  
    const updatedComplaint = { ...complaint, status: newStatus };
    const all = JSON.parse(localStorage.getItem("complaints")) || [];
  
    const updatedAll = all.map((c) =>
      String(c.id) === String(id) ? updatedComplaint : c
    );
  
    localStorage.setItem("complaints", JSON.stringify(updatedAll));
  
    // Force a re-render with updated object (clone to avoid silent failure)
    setComplaint({ ...updatedComplaint });
  };
  

  if (!complaint) {
    return <div className="text-center py-10">Loading complaint...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Complaint Details
      </h2>
      <p className="mb-2">
        <strong>ID:</strong> {complaint.id}
      </p>
      <p className="mb-2">
        <strong>Title:</strong> {complaint.title}
      </p>
      <p className="mb-2">
        <strong>Description:</strong> {complaint.description}
      </p>
      <p className="mb-2">
        <strong>Category:</strong> {complaint.category}
      </p>
      <p className="mb-2">
        <strong>Status:</strong>{" "}
        <span
          className={`font-semibold ${
            complaint.status === "Resolved"
              ? "text-green-600"
              : "text-yellow-600"
          }`}
        >
          {complaint.status}
        </span>
      </p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Update Status</h3>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={() => handleStatusChange("In Progress")}
          >
            Mark In Progress
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => handleStatusChange("Resolved")}
          >
            Mark Resolved
          </button>
        </div>
      </div>
    </div>
  );
}
