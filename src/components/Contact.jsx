import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa"; // Import react-icons for social media links
import { CopyToClipboard } from "react-copy-to-clipboard"; // To handle phone number copying

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Show the dock when the section is in view
        } else {
          setIsVisible(false); // Hide the dock when the section is out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const section = document.getElementById("contact");
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const phoneNumber = "+1 (519) 860 7340 "; // Add your phone number here

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-xl mb-8">
          Feel free to reach out to me through any of the following channels:
        </p>

        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex space-x-8">
            <a
              href="https://github.com/YibeAseffa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/yibeltal-aseffa-4850191b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="mailto:yibeltalnetsanet2006@gmail.com"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <FaEnvelope size={30} />
              <span>yibeltalnetsanet2006@gmail.com</span>
            </a>

            {/* Phone Number with Copy Feature */}
            <CopyToClipboard text={phoneNumber}>
              <button className="flex items-center space-x-2 cursor-pointer">
                <FaPhone size={30} />
                <span>{phoneNumber}</span>
              </button>
            </CopyToClipboard>
            <a
              href="https://maps.google.com/?q=Your%20Address"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
