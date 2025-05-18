// src/pages/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { getComplaints } from "../data";
import ComplaintCard from "./ComplaintCard";

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setComplaints(getComplaints());
  }, []);

  const stats = {
    total: complaints.length,
    pending: complaints.filter(c => c.status==="Pending").length,
    inProgress: complaints.filter(c => c.status==="In Progress").length,
    resolved: complaints.filter(c => c.status==="Resolved").length,
  };

  const displayed = complaints.filter(c =>
    c.title.toLowerCase().includes(filter.toLowerCase()) ||
    c.department.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow">Total: {stats.total}</div>
        <div className="p-4 bg-white rounded shadow">Pending: {stats.pending}</div>
        <div className="p-4 bg-white rounded shadow">In Progress: {stats.inProgress}</div>
        <div className="p-4 bg-white rounded shadow">Resolved: {stats.resolved}</div>
      </div>
      <input
        type="text"
        placeholder="Search complaints..."
        className="w-full mb-4 p-2 border rounded"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map(c => (
          <ComplaintCard key={c.id} complaint={c} adminView />
        ))}
      </div>
    </>
  );
}
