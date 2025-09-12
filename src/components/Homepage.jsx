import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import HomeNav from "./HomeNav";
import Music from "./Music";
import Exercise from "./Exercise";
import Resources from "./Resources";
import Support from "./Support";
import { Outlet } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      {/* Sub-navbar always on top inside /home */}
      <HomeNav />

      {/* Nested routes */}
      <div className="mt-6">
        <Outlet/>
      </div>
    </div>
  );
}
