import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  flex justify-center items-center p-4 pt-10 md:pt-[200px]"
    >
      <form
        method="POST"
        action="https://getform.io/f/4041ecb4-e5a9-43bd-b10b-368f9d5720fc"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4  ">Submit the Form</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded"
          name="messaage"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 rounded b-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let us Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;