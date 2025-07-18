import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "@/components/ui/navigationBar";
import LandingPage from "@/pages/landingPage";
import Login from "@/pages/login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/Dashboard";
import Contact from "@/pages/contact";
import ProtectedRoute from "@/utils/protectedRoute";
import { Toaster } from "sonner";

const Community = lazy(() => import('./pages/community'));

export default function App() {
    const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <div className="bg-gray-100 dark:bg-zinc-900">
        <header className="bg-white dark:bg-zinc-800 shadow">
         <NavigationBar />
        </header>
      </div>
    <Toaster richColors position="top-right" />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
             
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
         <Route path="/community" element={user ? <Community user={user} /> : <Signup setUser={setUser} /> }/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}