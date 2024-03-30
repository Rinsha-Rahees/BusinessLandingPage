import React from "react";
import Home from "./pages/Home";
import Header from "./containers/Header";

function App() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-screen bg-[#f0eeeb] overflow-x-hidden">
      <Header />
      <Home />
    </div>
  );
}

export default App;
