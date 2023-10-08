import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white p-8 sm:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          About Dream Wedding Planners
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Welcome to Dream Wedding Planners!
        </p>
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700">
            At Dream Wedding Planners, we specialize in turning dreams into
            reality. Founded in 2018, we've been on a journey to create
            unforgettable wedding experiences ever since.
          </p>
          <p className="text-gray-700 mt-4">
            Our story began with a small team of dedicated event planners who
            shared a common vision - to make every couple's wedding day truly
            magical. Over the years, we've grown into a thriving company,
            renowned for our expertise in wedding management and event
            coordination.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-gray-700">
            Behind Dream Wedding Planners is a passionate and experienced team
            of professionals, each with a unique talent for creating exceptional
            weddings. We believe in bringing your vision to life, one detail at
            a time. Meet the faces behind our success:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              <strong>Mehedi Hasan (Founder/Lead Planner):</strong> With over 6
              years of experience in wedding planning, Mehedi has a talent for
              crafting unique and personalized weddings.
            </li>
            <li>
              <strong>Michael Rodriguez (Creative Director):</strong> Michael's
              creative flair adds a touch of elegance and style to every event
              he designs.
            </li>
            <li>
              <strong>Emily Davis (Logistics Coordinator):</strong> Emily's
              meticulous planning ensures that every wedding goes off without a
              hitch.
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-gray-700">
            At Dream Wedding Planners, our core values are at the heart of
            everything we do:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              <strong>Personalization:</strong> We believe in tailoring each
              wedding to reflect the couple's unique love story and style.
            </li>
            <li>
              <strong>Excellence:</strong> Our commitment to excellence ensures
              that every detail is executed flawlessly.
            </li>
            <li>
              <strong>Joy:</strong> We take pride in creating joyful and
              memorable moments for our couples and their guests.
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-700">
            We are committed to making your dream wedding a reality. Our
            dedication to perfection and our unwavering attention to detail set
            us apart in the world of wedding management.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Join Us on Your Wedding Journey
          </h2>
          <p className="text-gray-700">
            We invite you to embark on this incredible journey with us. Whether
            you're a bride and groom-to-be, a vendor, or someone interested in
            our work, we're thrilled to have you as a part of our wedding
            community.
          </p>
          <p className="text-gray-700 mt-4">
            Thank you for visiting us and learning more about Dream Wedding
            Planners. If you have any questions or would like to connect with
            us, please don't hesitate to <Link to={"/contact"} />
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
