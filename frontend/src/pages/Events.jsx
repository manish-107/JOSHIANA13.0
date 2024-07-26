import React from "react";
import Nav from "../components/Nav.jsx";
import { ThreeDCardDemo } from "../components/ThreeDCardDemo.jsx";
import Footer from "../components/Footer.jsx";
import dance from "../assets/dance-min.jpg";
import hackathon from "../assets/Hackathon-min.jpg";
import productlunch from "../assets/productlunch-min.jpg";
import quizid from "../assets/quizid-min.jpg";
import treamenent from "../assets/reamenent-min.jpg";
import supriseevent from "../assets/supriseevent-min.jpg";
import TreasureHunt from "../assets/TreasureHunt-min.jpg";
import itmanager from "../assets/itmanager-min.jpg";
import vlogging from "../assets/vlogging-min.jpg";
import webdev from "../assets/webdev-min.jpg";

const eventCards = [
  {
    imageSrc: hackathon,
    category: "Hackathon",
    title: "Code Sprint",
    details: [
      "1. Teams of up to 4 members.",
      "2. Build a working prototype in 24 hours.",
      "3. Judging based on creativity, functionality, and impact.",
      "4. Prizes for top 3 teams.",
    ],
    coordinators: [
      { name: "Raj", phone: "+91 99887 66554" },
      { name: "Simran", phone: "+91 99988 11223" },
    ],
  },
  {
    imageSrc: itmanager,
    category: "IT Manager",
    title: "Tech Management",
    details: [
      "1. Panel discussion with industry leaders.",
      "2. Topics include team management and project delivery.",
      "3. Q&A session included.",
      "4. Networking opportunities with professionals.",
    ],
    coordinators: [
      { name: "Ravi", phone: "+91 99876 54321" },
      { name: "Anita", phone: "+91 99987 65432" },
    ],
  },
  {
    imageSrc: quizid,
    category: "IT Quiz",
    title: "Tech Trivia",
    details: [
      "1. Individual or team participation.",
      "2. Questions based on IT and technology.",
      "3. Prizes for top scorers.",
      "4. Fun and educational experience.",
    ],
    coordinators: [
      { name: "Nithin", phone: "+91 99007 73161" },
      { name: "Akash", phone: "+91 96630 90880" },
    ],
  },
  {
    imageSrc: webdev,
    category: "Web Designing",
    title: "Design Challenge",
    details: [
      "1. Create a web design mockup in 4 hours.",
      "2. Use the latest web technologies.",
      "3. Judged on creativity and user experience.",
      "4. Prizes for the best designs.",
    ],
    coordinators: [
      { name: "Pooja", phone: "+91 99123 45678" },
      { name: "Sandeep", phone: "+91 99234 56789" },
    ],
  },
  {
    imageSrc: productlunch,
    category: "Product Launch",
    title: "New Tech Unveiling",
    details: [
      "1. Introduction to the latest tech products.",
      "2. Live demonstrations and interactive sessions.",
      "3. Meet and greet with product developers.",
      "4. Exclusive offers for attendees.",
    ],
    coordinators: [
      { name: "Amit", phone: "+91 99345 67890" },
      { name: "Sonia", phone: "+91 99456 78901" },
    ],
  },
  {
    imageSrc: TreasureHunt,
    category: "Treasure Hunt",
    title: "Hidden Treasures",
    details: [
      "1. Teams solve clues to find hidden treasures.",
      "2. Exciting locations and challenges.",
      "3. Prizes for the team that finds the most treasures.",
      "4. Fun and adventure guaranteed.",
    ],
    coordinators: [
      { name: "Deepak", phone: "+91 99567 89012" },
      { name: "Maya", phone: "+91 99678 90123" },
    ],
  },
  {
    imageSrc: dance,
    category: "Dance",
    title: "Dance Fiesta",
    details: [
      "1. Solo and group dance performances.",
      "2. Various dance genres including contemporary and traditional.",
      "3. Judged by renowned choreographers.",
      "4. Audience participation and engagement.",
    ],
    coordinators: [
      { name: "Neha", phone: "+91 99789 01234" },
      { name: "Rohit", phone: "+91 99890 12345" },
    ],
  },
  {
    imageSrc: supriseevent,
    category: "Surprise Event",
    title: "Mystery Event",
    details: [
      "1. A surprise event with a unique theme.",
      "2. Activities and challenges will be revealed on the spot.",
      "3. Open to all participants.",
      "4. Exciting and unexpected experience.",
    ],
    coordinators: [
      { name: "Kiran", phone: "+91 99801 23456" },
      { name: "Simran", phone: "+91 99912 34567" },
    ],
  },
  {
    imageSrc: vlogging,
    category: "Vlogging",
    title: "Vlog Competition",
    details: [
      "1. Create and submit a vlog on a given topic.",
      "2. Judged on creativity, content, and presentation.",
      "3. Prizes for the top vlogs.",
      "4. Chance to showcase your vlogging skills.",
    ],
    coordinators: [
      { name: "Vikram", phone: "+91 99811 22334" },
      { name: "Sneha", phone: "+91 99922 33445" },
    ],
  },
  {
    imageSrc: treamenent,
    category: "Team Event",
    title: "Team Building Activities",
    details: [
      "1. Fun and engaging activities for teams.",
      "2. Focus on teamwork and collaboration.",
      "3. Activities designed to build team spirit.",
      "4. Prizes for the best performing teams.",
    ],
    coordinators: [
      { name: "Ravi", phone: "+91 99012 34567" },
      { name: "Anita", phone: "+91 99123 45678" },
    ],
  },
];

const Events = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-black text-white min-h-screen">
      <Nav />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <div className="container mx-auto p-4">
          <div className="flex justify-center">
            <h2 className="text-5xl pt-10 mb-5">Events</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventCards.map((event, index) => (
              <ThreeDCardDemo
                key={index}
                imageSrc={event.imageSrc}
                category={event.category}
                title={event.title}
                details={event.details}
                coordinators={event.coordinators}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
