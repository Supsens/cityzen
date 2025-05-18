import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Complaints from "./pages/Complaints";
import ComplaintDetails from "./pages/ComplaintDetails";
import AdminDashboard from "./pages/AdminDashboard"; // if separate detail page

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AdminComplaintDetails from "./pages/AdminComplaintDetails";

function AppLayout({ children }) {
  const { user } = useContext(AuthContext);
  if (!user) return children; // no layout if not logged in (Landing/Login)

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 flex-grow">{children}</main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      
      <Routes>
      <Route
  path="/admin/complaints/:id"
  element={
    <AppLayout>
      <AdminComplaintDetails />
    </AppLayout>
  }
/>

        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Protected User Routes */}
        <Route element={<ProtectedRoute role="user" />}>
          <Route
            path="/"
            element={
              <AppLayout>
                <Home />
              </AppLayout>
            }
          />
          <Route
            path="/report"
            element={
              <AppLayout>
                <Report />
              </AppLayout>
            }
          />
          <Route
            path="/complaints"
            element={
              <AppLayout>
                <Complaints />
              </AppLayout>
            }
          />
          <Route
            path="/complaints/:id"
            element={
              <AppLayout>
                <ComplaintDetails />
              </AppLayout>
            }
          />
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute role="admin" />}>
          <Route
            path="/admin"
            element={
              <AppLayout>
                <AdminDashboard />
              </AppLayout>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
