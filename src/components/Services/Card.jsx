const Card = ({ event_data }) => {
  const { id, title, cover_photo, short_description, price } = event_data;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={cover_photo} />
        </figure>
        <div className="card-body">
          <div className="bg-gray-100 p-1 px-2 rounded self-start">
            <span>Price: {price}</span>
          </div>
          <h2 className="card-title">{title}</h2>
          <p>{short_description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
