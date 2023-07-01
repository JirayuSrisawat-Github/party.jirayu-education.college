"use client";

import { useState, useEffect } from "react";
import { policies, description } from "./config";
import Footer from "./components/Footer";
import AOS from "aos";

const HomePage = () => {
  const [activePolicy, setActivePolicy] = useState(null);

  const handleMenuClick = (index) => {
    if (activePolicy === index) {
      setActivePolicy(null);
    } else {
      setActivePolicy(index);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-orange-500 to-blue-500 min-h-screen flex items-start">
        <div className="max-w-md mx-auto p-6">
          <h1 className="text-4xl mb-4 text-white" data-aos="fade-up">
            พรรคเพื่อเธอ<span className="text-white"> | </span>For you Party
          </h1>
          <p data-aos="fade-up" className="text-lg mb-6 text-white">
            พรรคเพื่อเธอ - สร้างอนาคตที่ดีให้กับคุณ
          </p>
          <p data-aos="fade-up" className="text-base mb-6 text-white">
            {description}
          </p>
          <ul className="space-y-4" data-aos="fade-up">
            {policies.map((policy, index) => (
              <li
                key={index}
                onClick={() => handleMenuClick(index)}
                className="border rounded-lg p-4 cursor-pointer text-white"
              >
                <h2 className="text-xl font-medium">{policy.title}</h2>
                <p className={`${activePolicy === index ? "mt-2" : "hidden"}`}>
                  {policy.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
