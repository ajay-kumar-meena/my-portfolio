import React from "react";

import adminDashboard from '../assets/project/morax-shop/admin_dashboard.png'
import adminOrder from '../assets/project/morax-shop/admin_order.png'
import cart from '../assets/project/morax-shop/cart.png'
import home from '../assets/project/morax-shop/home.png'
import myOrder from '../assets/project/morax-shop/my_order.png'
import searchPage from '../assets/project/morax-shop/search_page.png'


import heroSection from '../assets/project/portfolio/herosection.png'
import project from '../assets/project/portfolio/portfolio_project.png'
import skill from '../assets/project/portfolio/portfolio_skill.png'

import CustomUnageSlider from "../components/CustomImageSlider"


function Projects() {
  const cardItem = [
    {
      id: 1,
      name: "Morax Shop",
      description: "This is ecommerce website to shop electric and fashion clothes",
      images: [home,searchPage,myOrder,cart,adminDashboard, adminOrder,],
      redirect: "https://github.com/ajay-kumar-meena/morax-shop",
    },
    {
      id: 2,
      name: "My Portfolio",
      description: "This my portfolio to show the skills and projects",
      images: [heroSection, project, skill],
      redirect: "https://github.com/ajay-kumar-meena/my-portfolio",
    },
    
  ];

  const redirectHandler = (redirect) => {
    if (redirect) {
      window.location.replace(redirect);
    } else {
      alert("No redirect URL available for this project.");
    }
   };

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto p-10 md:px-20 mt-10 my-10"
    >
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cardItem.map(({ id, name, images, description, redirect}) => (
          <div
            className="border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transform transition duration-300"
            key={id}
          >
            <CustomUnageSlider images={images} />

            {/* Heading and About */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl mt-5 font-bold mb-4">{name}</h2>
              <p className="text-lg">{description}...</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col  w-full sm:flex-row justify-center items-center gap-4">
              <button 
              onClick={()=>redirectHandler(redirect)}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 w-full space-x-2 sm:w-auto">Source code</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
