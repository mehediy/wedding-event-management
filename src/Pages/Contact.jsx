import { toast } from "react-toastify";

const Contact = () => {
  return (
    <div className="bg-white p-8 sm:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Contact Dream Wedding Planners
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          We'd love to hear from you!
        </p>
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700">
            Reach out to us using the following contact details:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@dreamweddingplanners.com"
                className="text-blue-500"
              >
                info@dreamweddingplanners.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +880 123456-7890
            </li>
            <li>
              <strong>Address:</strong> 12/A Dhanmondi, Dhaka 1209
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-700">
            Have a question or need assistance? Use the contact form below to
            send us a message:
          </p>
          <form
            className="mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message sent! We'll contact you soon.");
            }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
