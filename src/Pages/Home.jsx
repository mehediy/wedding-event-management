import React from "react";
import Slider from "../components/Header/Slider";
import Cards from "../components/Services/Cards";
import { useLoaderData } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";

const Home = () => {
  const { events_data } = useLoaderData();
  return (
    <div>
      <Slider />
      <div className="container mx-auto py-16">
        <Cards events_data={events_data} />
      </div>
      <Testimonials />
      <Gallery />
    </div>
  );
};

export default Home;
