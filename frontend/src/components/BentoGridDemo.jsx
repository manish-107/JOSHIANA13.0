import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid.jsx"; // Adjust the path if needed
import itmanager from "../assets/itmanager-min.jpg";
import vlogging from "../assets/vlogging-min.jpg";

// Data for different sections with only two image sources
const sections = [
  {
    title: "Faculty Coordinators",
    items: [
      {
        title: "Ms Sumangala N",
        description: "HOD - MCA",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Mr Gururaja S",
        description: "Convener",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Mr Sathyendra Bhat J",
        description: "Co - Convener",
        image: itmanager, // Randomly assigned image
      },
    ],
  },
  {
    title: "Student Coordinators",
    items: [
      {
        title: "Nikhil B",
        description: "Student Coordinator (President)",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Jeevitha Pai",
        description: "Student Coordinator",
        image: itmanager, // Randomly assigned image
      },
    ],
  },
  {
    title: "Technocrats",
    items: [
      {
        title: "Deepak Boniface Cardoza",
        description: "Secretary",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Shreeshma",
        description: "Treasurer",
        image: itmanager, // Randomly assigned image
      },
    ],
  },
  {
    title: "Faculty In-Charge",
    items: [
      {
        title: "Mr Gururaja S",
        description: "Food, Transportation & Accommodation",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Mr Ragesh Raju",
        description: "Stage & Decoration",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Ms Sadhana Kumble",
        description: "Registration & Certificates",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Ms Sumangala N",
        description: "Publicity & Sponsorship",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Dr Hareesh B",
        description: "Scores & Results",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Mr Sunith Kumar T",
        description: "Website & Design",
        image: itmanager, // Randomly assigned image
      },
    ],
  },
  {
    title: "Event Heads",
    items: [
      {
        title: "Sarath",
        description: "CODEBLANCA",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Ankitha",
        description: "CODEBLANCA",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Yashaswi",
        description: "DORTWEB",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Shraddha",
        description: "DORTWEB",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Manisha",
        description: "HARLEM SHAKE",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Preethi",
        description: "HARLEM SHAKE",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Nithin",
        description: "SEOUL",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Akash",
        description: "SEOUL",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Pratul",
        description: "L'OBJECTIF",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Sanath",
        description: "L'OBJECTIF",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Sannidhi",
        description: "CAIRO CONFLICTS",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Harishree",
        description: "CAIRO CONFLICTS",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Varshitha",
        description: "IT PHARAOH",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Mahima",
        description: "IT PHARAOH",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Abhishek",
        description: "NUKETOWN",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Nishan",
        description: "NUKETOWN",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Lia",
        description: "VLOG OF FAME",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Suraksha",
        description: "VLOG OF FAME",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Gowtham",
        description: "TAKESHI'S CASTLE",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Prajna",
        description: "TAKESHI'S CASTLE",
        image: itmanager, // Randomly assigned image
      },
    ],
  },
  {
    title: "Committee Heads",
    items: [
      {
        title: "Sarath",
        description: "CODEBLANCA",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Ankitha",
        description: "CODEBLANCA",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Yashaswi",
        description: "DORTWEB",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Shraddha",
        description: "DORTWEB",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Manisha",
        description: "HARLEM SHAKE",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Preethi",
        description: "HARLEM SHAKE",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Nithin",
        description: "SEOUL",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Akash",
        description: "SEOUL",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Pratul",
        description: "L'OBJECTIF",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Sanath",
        description: "L'OBJECTIF",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Sannidhi",
        description: "CAIRO CONFLICTS",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Harishree",
        description: "CAIRO CONFLICTS",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Varshitha",
        description: "IT PHARAOH",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Mahima",
        description: "IT PHARAOH",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Abhishek",
        description: "NUKETOWN",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Nishan",
        description: "NUKETOWN",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Lia",
        description: "VLOG OF FAME",
        image: itmanager, // Randomly assigned image
      },
      {
        title: "Suraksha",
        description: "VLOG OF FAME",
        image: vlogging, // Randomly assigned image
      },
    ],
  },
  {
    title: "Design Team",
    items: [
      {
        title: "Deepak Boniface Cardoza",
        description: "Secretary",
        image: vlogging, // Randomly assigned image
      },
      {
        title: "Shreeshma",
        description: "Treasurer",
        image: itmanager, // Randomly assigned image
      },
    ],
  },
];

export function BentoGridDemo() {
  return (
    <div className="bg-black min-h-screen text-gray-100">
      <div className="pt-16 max-w-7xl mx-auto px-4">
        {sections.map((section, index) => (
          <section key={index} className="mb-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white">{section.title}</h1>
            </div>
            <BentoGrid>
              {section.items.map((item, idx) => (
                <BentoGridItem
                  key={idx}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </BentoGrid>
          </section>
        ))}
      </div>
    </div>
  );
}
