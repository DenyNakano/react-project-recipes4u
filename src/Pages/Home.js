import React from "react";
import { CardCarousel } from "../Components/CardCarousel";
import { Destaques } from "../Components/Destaques";

export const Home = () => {
  return (
    <div style={{backgroundColor: "#d9d9db",padding: "10px 0"}} >
      <CardCarousel />
      <Destaques />
    </div>
  );
};
