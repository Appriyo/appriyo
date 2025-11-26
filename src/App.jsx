import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Home />
    </div>
  );
}