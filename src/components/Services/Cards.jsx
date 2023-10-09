import Card from "./Card";

const Cards = ({ events_data }) => {
  return (
    <div>
      <div data-aos="fade-down">
        <h2 className="font-semibold text-3xl md:text-4xl text-center pb-8 text-primary">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
        {events_data.map((data) => (
          <Card key={data.id} event_data={data} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
