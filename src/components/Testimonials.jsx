const Testimonials = () => {
  // testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Nusrat Imroz Tisha",
      title: "Bride",
      content:
        "Dream Wedding Planners made our special day truly magical. They paid attention to every detail and turned our vision into reality. We couldn't be happier!",
    },
    {
      id: 2,
      name: "Mehedi Hasan",
      title: "Groom",
      content:
        "From the moment we met with Dream Wedding Planners, we knew we were in good hands. Their team's professionalism and creativity exceeded our expectations.",
    },
    {
      id: 3,
      name: "Farooki",
      title: "Father of the Bride",
      content:
        "I was worried about the stress of planning my daughter's wedding, but Dream Wedding Planners made it a seamless and joyful experience. Highly recommend!",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="font-semibold text-primary">
                {testimonial.name}
              </div>
              <div className="text-gray-500">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
