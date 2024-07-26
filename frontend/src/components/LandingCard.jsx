import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import itmanager from "../assets/itmanager-min.jpg";
import vlogging from "../assets/vlogging-min.jpg";
import webdev from "../assets/webdev-min.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // Staggering animation
      duration: 0.5,
    },
  }),
};

const Card = ({ color, title, team, timeLeft, members, icon, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top, bottom } = ref.current.getBoundingClientRect();
      const isInView = top < window.innerHeight && bottom >= 0;
      if (isInView && !hasAnimated) {
        controls.start("visible");
        setHasAnimated(true); // Set to true to prevent further animations
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="relative bg-white text-black py-6 px-6 rounded-3xl w-64 my-4 shadow-xl"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      custom={index} // Pass index for staggering
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl ${color} left-4 -top-6`}
      >
        {icon}
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">{title}</p>
        <div className="flex space-x-2 text-gray-400 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p>{team}</p>
        </div>
        <div className="flex space-x-2 text-gray-400 text-sm my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p>{timeLeft}</p>
        </div>
        <div className="border-t-2"></div>

        <div className="flex justify-between">
          <div className="my-2">
            <p className="font-semibold text-base mb-2">Team Member</p>
            <div className="flex space-x-2">
              {members.map((member, idx) => (
                <img
                  key={idx}
                  src={member}
                  className="w-6 h-6 rounded-full"
                  alt="Team Member"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const CardGrid = () => {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }, // Staggering children
        },
      }}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <Card
          color="bg-pink-500"
          title="IT Manager"
          team="Tech Management"
          timeLeft="Ravi: +91 99876 54321"
          members={[itmanager, vlogging, webdev]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          }
          index={0}
        />
        <Card
          color="bg-blue-500"
          title="IT Quiz"
          team="Tech Trivi"
          timeLeft="Ravi: +91 99876 54321"
          members={[itmanager, vlogging, webdev]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          }
          index={1}
        />
        <Card
          color="bg-green-500"
          title="Web Designing"
          team="Design Challenge"
          timeLeft="Pooja: +91 99123 45678"
          members={[itmanager, vlogging, webdev]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h4l3-7 3 7h4l-3 7-3-7-3 7-3-7z"
              />
            </svg>
          }
          index={2}
        />
        <Card
          color=" bg-red-500"
          title="Hackathon"
          team="Code Sprin"
          timeLeft="Neha: +91 99789 01234"
          members={[itmanager, vlogging, webdev]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h4l3-7 3 7h4l-3 7-3-7-3 7-3-7z"
              />
            </svg>
          }
          index={3}
        />
        <Card
          color="bg-sky-500"
          title="Product Launch"
          team="New Tech Unveiling"
          timeLeft="Amit: +91 99345 67890"
          members={[itmanager, vlogging, webdev]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6l4 2"
              />
            </svg>
          }
          index={4}
        />
        <Card
          color="bg-pink-500"
          title="Treasure Hunt"
          team="Hidden Treasures"
          timeLeft="Deepak: +91 99567 89012"
          members={[itmanager, vlogging, webdev]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h4l3-7 3 7h4l-3 7-3-7-3 7-3-7z"
              />
            </svg>
          }
          index={5}
        />
        <Card
          color="bg-blue-500"
          title="Dance"
          team="Dance Fiesta"
          timeLeft="Neha: +91 99789 01234"
          members={[itmanager, vlogging, webdev]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          }
          index={6}
        />
        <Card
          color="bg-green-500"
          title="Surprise Event"
          team="Mystery Event"
          timeLeft="Kiran: +91 99801 23456"
          members={[itmanager, vlogging, webdev]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          }
          index={7}
        />
        <Card
          color="bg-yellow-500"
          title="Vlogging"
          team="Vlog Competition"
          timeLeft="Vikram: +91 99811 22334"
          members={[itmanager, vlogging, webdev]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6l4 2"
              />
            </svg>
          }
          index={8}
        />
        <Card
          color="bg-red-500"
          title="Team Event"
          team="Team Building Activities"
          timeLeft="Ravi: +91 99012 34567"
          members={[
            "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/416492/pexels-photo-416492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1542082/pexels-photo-1542082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6l4 2"
              />
            </svg>
          }
          index={9}
        />
      </div>
    </motion.div>
  );
};

export default CardGrid;
