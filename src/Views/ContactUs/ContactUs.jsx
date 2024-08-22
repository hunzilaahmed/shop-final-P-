import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all the fields.");
      return;
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Contact Us
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        We value your feedback and inquiries. Please fill out the form below to
        get in touch with us. Whether you have a question, concern, or just want
        to say hello, we're here to help!
      </p>
      {submitted ? (
        <div className="text-center text-green-600">
          Thank you for your message! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                rows="5"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-4 rounded-lg transition hover:scale-105 hover:bg-slate-100 hover:text-zinc-900 duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
