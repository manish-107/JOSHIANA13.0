import React from "react";

const Card = ({ color, title, team, timeLeft, progress, members }) => (
  <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
    <div
      className={`text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl ${color} left-4 -top-6`}
    >
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
  </div>
);

const CardGrid = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <Card
          color="bg-pink-500"
          title="App Development"
          team="Marketing Team"
          timeLeft="1 Weeks Left"
          progress="34%"
          members={[
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU",
          ]}
        />
        <Card
          color="bg-green-500"
          title="Web Design"
          team="Core UI Team"
          timeLeft="3 Weeks Left"
          progress="76%"
          members={[
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ]}
        />
        <Card
          color="bg-blue-500"
          title="Leading Page"
          team="Marketing Team"
          timeLeft="2 Days Left"
          progress="4%"
          members={[
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU",
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
          ]}
        />
        <Card
          color="bg-yellow-500"
          title="Business Compare"
          team="Marketing Team"
          timeLeft="1 Month Left"
          progress="90%"
          members={[
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
          ]}
        />
        <Card
          color="bg-yellow-500"
          title="Business Compare"
          team="Marketing Team"
          timeLeft="1 Month Left"
          progress="90%"
          members={[
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
          ]}
        />
        <Card
          color="bg-yellow-500"
          title="Business Compare"
          team="Marketing Team"
          timeLeft="1 Month Left"
          progress="90%"
          members={[
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
          ]}
        />
        <Card
          color="bg-yellow-500"
          title="Business Compare"
          team="Marketing Team"
          timeLeft="1 Month Left"
          progress="90%"
          members={[
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
          ]}
        />
        <Card
          color="bg-yellow-500"
          title="Business Compare"
          team="Marketing Team"
          timeLeft="1 Month Left"
          progress="90%"
          members={[
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
          ]}
        />
        <Card
          color="bg-yellow-500"
          title="Business Compare"
          team="Marketing Team"
          timeLeft="1 Month Left"
          progress="90%"
          members={[
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg",
          ]}
        />
      </div>
    </div>
  );
};

export default CardGrid;
