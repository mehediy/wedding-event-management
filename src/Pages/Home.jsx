import React from "react";
import Slider from "../components/Header/Slider";
import Cards from "../components/Services/Cards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { events_data } = useLoaderData();
  return (
    <div>
      <Slider />
      <div className="container mx-auto py-12">
        <Cards events_data={events_data} />
      </div>
    </div>
  );
};

export default Home;
