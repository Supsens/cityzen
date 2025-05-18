import { useEffect, useState } from "react";
import { getComplaints } from "../data";
import ComplaintCard from "./ComplaintCard";
export default function Complaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    setComplaints(getComplaints());
  }, []);

  if (complaints.length === 0) {
    return <p className="text-center text-gray-600">No complaints yet.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {complaints.map((c) => (
        <ComplaintCard key={c.id} complaint={c} />
      ))}
    </div>
  );
}
