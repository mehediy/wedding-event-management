import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { events_data } = useLoaderData();
  const { id } = useParams();

  const findData = events_data.find((data) => data.id == id);
  const { title, cover_photo, long_description, services_list, price } =
    findData;

  // local storage save
  const saveToLocalStorage = () => {
    const bookedItems = [];
    const localBookedItems = JSON.parse(localStorage.getItem("booking"));
    const isBooked = localBookedItems?.find((item) => item.id == id);

    if (!localBookedItems) {
      bookedItems.push(findData);
      localStorage.setItem("booking", JSON.stringify(bookedItems));
      toast.success("Thanks for booking. We'll contact you soon!");
    } else {
      if (!isBooked) {
        bookedItems.push(...localBookedItems, findData);
        localStorage.setItem("booking", JSON.stringify(bookedItems));
        toast.success("Thanks for booking. We'll contact you soon!");
      } else {
        toast.error("You've already booked!");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-2 pb-12 px-4">
      <div className="overflow-hidden rounded">
        <img className="w-full" src={cover_photo} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="py-6">
          <h1 className="text-2xl md:text-4xl pb-2 font-bold text-primary">
            {title}
          </h1>
          <p className="text-base md:text-lg">{long_description}</p>
        </div>
        <div>
          <h2 className="text-xl md:text-3xl font-semibold pb-2">Features</h2>
          <ul className="flex flex-col gap-2">
            {services_list.map((service, index) => (
              <li className="text-base md:text-lg" key={index}>
                ✔ {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 py-6 px-6 bg-slate-100 rounded-lg">
          <span className="font-medium text-lg md:text-xl">Price: {price}</span>
          <button
            className="btn self-start btn-primary"
            onClick={() => saveToLocalStorage()}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
