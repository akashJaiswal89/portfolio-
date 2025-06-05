"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="text-white py-12 ">
      <div className="mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
        <div className="space-y-6 sm:space-y-0 text-lg sm:flex items-center justify-between">
          <div className="flex items-center justify-center gap-3">
            <EnvelopeIcon className="w-6 h-6 text-blue-400" />
            <a href="mailto:your.email@example.com" className="hover:underline">
              your.email@example.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <PhoneIcon className="w-6 h-6 text-green-400" />
            <a href="tel:+911234567890" className="hover:underline">
              +91 12345 67890
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
          <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-8 h-8" />
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/your-profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
