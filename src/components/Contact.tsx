"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
      // Create a new form element
      const form = document.createElement("form");
      form.action = "https://docs.google.com/forms/d/e/1FAIpQLSdgcXqSvs8N5k6o_F4Y81DXRmV719DhvKfP-MzimkhHtbdtFg/formResponse";
      form.method = "POST";
      form.target = "_self";

      // Create input elements for each field
      const nameInput = document.createElement("input");
      nameInput.type = "hidden";
      nameInput.name = "entry.904271370"; // Replace with your entry ID
      nameInput.value = formData.name.value;
      form.appendChild(nameInput);

      const emailInput = document.createElement("input");
      emailInput.type = "hidden";
      emailInput.name = "entry.925914791"; // Replace with your entry ID
      emailInput.value = formData.email.value;
      form.appendChild(emailInput);

      const messageInput = document.createElement("input");
      messageInput.type = "hidden";
      messageInput.name = "entry.580039710"; // Replace with your entry ID
      messageInput.value = formData.message.value;
      form.appendChild(messageInput);

      // Append and submit the form
      document.body.appendChild(form);
      form.submit();
  };
  console.log(formData);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );
};
