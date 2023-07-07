import React, { useState } from "react";

const FORM_ENDPOINT = "/";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  };

  return (
    <>
        <div className="py-20 w-4/12 m-auto text-center" id="contact">
            <h1 className="text-4xl font-bold mb-10 text-orange-600" id="about">Contact Us</h1>
            <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            >
                <div className="mb-3 pt-3">
                    <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="px-3 h-12 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 h-12 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                    placeholder="Your message"
                    name="message"
                    className="px-3 py-3 h-40 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-4">
                    <button
                    className="bg-orange-600 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    >
                    Send a message
                    </button>
                </div>
            </form>
        </div>
    </>
  );
};

export default Contact;