import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <div>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-28 object-contain" />
        </NavLink>
        <NavLink
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2  rounded-md"
        >
          Create
        </NavLink>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
