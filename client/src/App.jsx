import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useSearchParams,
} from "react-router-dom";
import { logo } from "./assets/";
import { Home, CreatePost } from "./pages/index";

const App = () => {
  const [home, setHome] = useState(true);
  function handleClick (){
    setHome(!home)
  }
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <h1 className="font-bold text-2xl">
            Stunn<span className="text-[#9951D1]">ing</span>
          </h1>
        </Link>

        {home ? (
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#9951D1] text-white px-4 py-2 rounded-md" onClick={handleClick}>
            Create Images
          </Link>
        ) : (
          <Link
            to="/"
            className="font-inter font-medium bg-[#9951D1] text-white px-4 py-2 rounded-md" onClick={handleClick}>
            Go back
          </Link>
        )}
      </header>

      <main className="sm:p-8 px-4 py-8 w-full rounded-2xl bg-[#111111] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
