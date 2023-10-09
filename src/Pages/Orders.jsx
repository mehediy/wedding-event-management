import React, { useEffect, useState } from "react";
import Card from "../components/Services/Card";

const Orders = () => {
  const [bookedData, setBookedData] = useState();
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("booking"));
    if (localData) setBookedData(localData);
  }, []);

  return (
    <div className="container mx-auto px-4 pt-4 pb-12 min-h-[80vh]">
      <h1 className="font-semibold text-3xl md:text-4xl text-center pb-8 text-primary">
        {bookedData ? "Your Booked Services" : "Try booking a service"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookedData?.map((item) => (
          <Card key={item.id} event_data={item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
