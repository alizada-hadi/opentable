import React from "react";
import NavBar from "../components/NavBar";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const fetchRestaurantByCity = async (city: string | undefined) => {
  if (!city) return await prisma.restaurant.findMany();
  return await prisma.restaurant.findMany({
    where: {
      location: {
        name: city.toLowerCase(),
      },
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      price: true,
      location: true,
    },
  });
};

const Search = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const restaurants = await fetchRestaurantByCity(searchParams.query);

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <SearchSideBar />
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          {restaurants.length ? (
            <RestaurantCard />
          ) : (
            <p>There is no restaurant found in {searchParams.query} city</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
