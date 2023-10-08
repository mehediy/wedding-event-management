import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { events_data } = useLoaderData();
  const { id } = useParams();

  const findData = events_data.find((data) => data.id == id);
  const { title, cover_photo, long_description, services_list, price } =
    findData;

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="overflow-hidden rounded">
        <img className="w-full" src={cover_photo} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="py-6">
          <h1 className="text-4xl pb-2 font-bold">{title}</h1>
          <p>{long_description}</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold pb-2">Features</h2>
          <ul className="flex flex-col gap-2">
            {services_list.map((service, index) => (
              <li key={index}>✔ {service}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 py-6 px-6 bg-slate-100 rounded-lg">
          <span className="font-medium text-xl">Price: {price}</span>
          <button className="btn self-start btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;