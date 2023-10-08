import React from "react";
import Slider from "../components/Header/Slider";
import Cards from "../components/Services/Cards";
import { useLoaderData } from "react-router-dom";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const { events_data } = useLoaderData();
  return (
    <div>
      <Slider />
      <div className="container mx-auto py-12">
        <Cards events_data={events_data} />
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
