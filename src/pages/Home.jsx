import React from "react";
import MainPage from "./MainPage";
import Footer from "../containers/Footer";

function Home() {
  return (
    <div className="flex flex-col items-center w-full h-fit">
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default Home;
