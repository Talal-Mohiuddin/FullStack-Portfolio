import React from "react";

const ContactMeSection = () => {
  return (
    <section className="py-10" id="contact">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <form className="mt-8 flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-700 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-700 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-700 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMeSection;
