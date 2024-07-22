import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Define variants for card animations
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

const Card = ({
  color,
  title,
  team,
  timeLeft,
  progress,
  members,
  icon,
  index,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = ref.current.getBoundingClientRect();
      const isInView = top < window.innerHeight && bottom >= 0;
      if (isInView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

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
              {members.map((member, index) => (
                <img
                  key={index}
                  src={member}
                  className="w-6 h-6 rounded-full"
                  alt="Team Member"
                />
              ))}
            </div>
          </div>
          <div className="my-2">
            <p className="font-semibold text-base mb-2">Progress</p>
            <div className="text-base text-gray-400 font-semibold">
              <p>{progress}</p>
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
          title="App Development"
          team="Marketing Team"
          timeLeft="1 Week Left"
          progress="34%"
          members={[
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU",
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
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          }
          index={0}
        />
        <Card
          color="bg-blue-500"
          title="UI/UX Design"
          team="Design Team"
          timeLeft="2 Weeks Left"
          progress="58%"
          members={[
            "https://images.pexels.com/photos/1461742/pexels-photo-1461742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/722911/pexels-photo-722911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1181242/pexels-photo-1181242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          }
          index={1}
        />
        <Card
          color="bg-green-500"
          title="Marketing Campaign"
          team="Marketing Team"
          timeLeft="3 Weeks Left"
          progress="72%"
          members={[
            "https://images.pexels.com/photos/1161397/pexels-photo-1161397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/3991604/pexels-photo-3991604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
                d="M3 10h4l3-7 3 7h4l-3 7-3-7-3 7-3-7z"
              />
            </svg>
          }
          index={2}
        />
        <Card
          color="bg-yellow-500"
          title="Content Creation"
          team="Content Team"
          timeLeft="4 Weeks Left"
          progress="90%"
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
          index={3}
        />
      </div>
    </motion.div>
  );
};

export default CardGrid;
