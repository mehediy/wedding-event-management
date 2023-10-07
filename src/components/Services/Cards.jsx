import Card from "./Card";

const Cards = ({ events_data }) => {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-4xl text-center pb-8">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {events_data.map((data) => (
          <Card key={data.id} event_data={data} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
