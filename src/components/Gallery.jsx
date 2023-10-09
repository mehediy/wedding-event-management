const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      imageUrl: "https://i.ibb.co/nDNQWy7/wedding-planning-cover.jpg",
    },
    {
      id: 2,
      imageUrl: "https://i.ibb.co/WPjjKgq/wedding-photography-cover.jpg",
    },
    {
      id: 3,
      imageUrl: "https://i.ibb.co/pLdBVH5/wedding-decor-cover.jpg",
    },
    {
      id: 4,
      imageUrl: "https://i.ibb.co/D9DvtfD/bride-grooming-cover.jpg",
    },
    {
      id: 5,
      imageUrl: "https://i.ibb.co/brF6V6Y/catering-services-cover.jpg",
    },
    {
      id: 6,
      imageUrl: "https://i.ibb.co/NnyKnjQ/kids-birthday-party-cover.jpg",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              className="overflow-hidden rounded-lg shadow-md"
              key={image.id}
            >
              <img
                src={image.imageUrl}
                className="w-full h-auto scale-100 hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
