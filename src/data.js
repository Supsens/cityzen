// src/data.js
export function getComplaints() {
    return JSON.parse(localStorage.getItem("complaints") || "[]");
  }
  
  export function saveComplaint(complaint) {
    const complaints = getComplaints();
    const newComplaint = {
      ...complaint,
      id: Date.now(),
      status: "Pending",
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(
      "complaints",
      JSON.stringify([...complaints, newComplaint])
    );
  }
  
  export function getComplaintById(id) {
    return getComplaints().find((c) => c.id === Number(id));
  }
  
  export function updateComplaintStatus(id, status) {
    const complaints = getComplaints().map((c) =>
      c.id === Number(id) ? { ...c, status } : c
    );
    localStorage.setItem("complaints", JSON.stringify(complaints));
  }
  