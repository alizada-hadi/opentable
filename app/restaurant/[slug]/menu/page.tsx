import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import RestaurantMenu from "../components/RestaurantMenu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
};

const Menu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantItems(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        <RestaurantMenu menu={menu} />
      </div>
    </>
  );
};

export default Menu;
