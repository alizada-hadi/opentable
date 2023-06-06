import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import RestaurantMenu from "../components/RestaurantMenu";

const Menu = () => {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar />
        <RestaurantMenu />
      </div>
    </>
  );
};

export default Menu;
