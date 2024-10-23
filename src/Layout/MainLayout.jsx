/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { DotLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";


const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#10a15b");
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <Helmet prioritizeSeoTags>
        <title>
          Triogen Exports | Innovating for a greener, sustainable future in all
          climates
        </title>
        <meta
          property="og:title"
          content="Triogen Exports | Innovating for a greener, sustainable future in all climates"
        />
        <meta
          property="og:description"
          content="Triogen is a coir manufacturing & trading company, pioneering innovative deals eco-friendly 
          coir based products to provide eco-friendly solutions and efficient agricultural practices."
        />
        <meta property="og:url" content="https://www.triogenexports.com/" />
        <link rel="canonical" href="https://www.triogenexports.com/" />
        <meta
          property="og:image"
          content="https://i.ibb.co.com/Xjw2hM1/triogenblack.png"
        />
      </Helmet> */}

      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-brown-50">
          <div className="relative flex items-center justify-center">
            <DotLoader
              color={color}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />{" "}
            {/* <div className="absolute text-brown-700 font-bold text-lg mt-40 animate-pulse">
              Loading...
            </div> */}
          </div>
        </div>
      ) : (
        <>

          <Navbar />
          
          <Outlet />

       
        </>
      )}
    </>
  );
};

export default MainLayout;
