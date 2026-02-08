import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+8801521527446"; 
  const message = "Hello! I am interested in your services."; 

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 motion-safe:animate-bounce"
    >
      <button className="btn btn-circle btn-success btn-lg shadow-lg border-none text-white">
        <FaWhatsapp  size={32} />
      </button>
    </a>
  );
};

export default WhatsAppButton;