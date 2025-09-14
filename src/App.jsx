import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Exercise from "./components/Exercise";
import Music from "./components/Music";
import Dashboard from "./components/Dashboard";
import Resources from "./components/Resources";
import Support from "./components/support";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // document.body.style.background = "linear-gradient(135deg, #a8e6cf, #dcedc1)";
    // document.body.style.background = "linear-gradient(135deg, #b7e4c7, #e9f5db)";
    document.body.style.background = "linear-gradient(135deg, #d9f99d, #86efac)";
  }, []);
  
  return (
    <div className="min-h-screen ">
      {/* Global navbar (always visible) */}
      <Navbar />

      <main className="pt-20 text-center">
        <Routes>
          <Route path="/" element={<Homepage />} >
            {/* Parent Route */}
              <Route index element={<Dashboard />} />
              <Route path="exercise" element={<Exercise />} />
              <Route path="music" element={<Music />} />
              <Route path="resources" element={<Resources />} />
              <Route path="support" element={<Support />} />
            {/* Nested Routes */} 
          </Route>

          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
