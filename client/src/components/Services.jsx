import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md p-6 m-4 w-full sm:w-72 h-72 cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className={`w-16 h-16 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white text-base font-light">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services py-16">
    <div className="flex flex-col items-center w-full md:w-4/5 lg:w-3/4 mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
          Our Premium Services
          <br />
          Designed for You
        </h1>
        <p className="mt-4 text-white font-light text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          Explore our top-tier services tailored to enhance your experience in the crypto world. From robust security features to competitive exchange rates, and swift transactions, we offer a seamless and secure way to manage and trade your assets.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Uncompromising Security"
          icon={<BsShieldFillCheck fontSize={36} className="text-white" />}
          subtitle="Our platform guarantees top-notch security to protect your assets with advanced encryption and protocols."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Competitive Exchange Rates"
          icon={<BiSearchAlt fontSize={36} className="text-white" />}
          subtitle="Benefit from the best exchange rates available, powered by cutting-edge technology and market analysis."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Swift Transactions"
          icon={<RiHeart2Fill fontSize={36} className="text-white" />}
          subtitle="Experience lightning-fast transactions, allowing you to capitalize on market opportunities without delay."
        />
      </div>
      
      {/* Additional Content Section */}
      <div className="flex flex-col items-center mt-16">
        <h2 className="text-white text-2xl font-bold mb-4">
          Why Choose Us?
        </h2>
        <p className="text-white text-base font-medium text-center max-w-2xl mb-8">
          Our services are designed with your needs in mind, offering unparalleled security, the best rates, and quick transactions. We continually enhance our platform to provide you with the most reliable and efficient crypto management experience.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 font-medium">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default Services;
