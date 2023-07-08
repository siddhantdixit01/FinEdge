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
        <div className="py-20 text-center bg-black text-white" id="contact">
            <div className="md:flex justify-center">
                <div className="ms:w-2/5 md:p-32">
                    <h1 className="text-6xl font-bold mb-10 text-orange-600">Contact Us</h1>
                </div>
                <div className="text-base md:w-2/6 w-10/12 text-justify md:mr-44 md:ml-28 m-auto pt-8">
                    <form className=" m-auto"
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    >
                        <div className="mb-3 pt-3">
                            <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            className="px-3 h-14 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                            />
                        </div>
                        <div className="mb-3 pt-0">
                            <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="px-3 py-3 h-14 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                            />
                        </div>
                        <div className="mb-3 pt-0">
                            <textarea
                            placeholder="Your message"
                            name="message"
                            className="px-3 py-3 h-44 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                            />
                        </div>
                        <div className="mb-3 pt-4 text-right">
                            <button
                            className="bg-orange-600 text-white active:bg-white active:text-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            >
                            Send a message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;