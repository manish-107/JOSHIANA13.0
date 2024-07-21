import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid.jsx"; // Adjust the path if needed

// Data for different sections with dummy image URLs
const sections = [
  {
    title: "Faculty Coordinators",
    items: [
      {
        title: "Ms Sumangala N",
        description: "HOD - MCA",
        image: "images/team-1.jpg",
      },
      {
        title: "Mr Gururaja S",
        description: "Convener",
        image: "images/team-3.jpg",
      },
      {
        title: "Mr Sathyendra Bhat J",
        description: "Co - Convener",
        image: "images/team-4.jpg",
      },
    ],
  },
  {
    title: "Student Coordinators",
    items: [
      {
        title: "Nikhil B",
        description: "Student Coordinator (President)",
        image: "images/nikhil.jpg",
      },
      {
        title: "Jeevitha Pai",
        description: "Student Coordinator",
        image: "images/Jeevitha.JPG",
      },
    ],
  },
  {
    title: "Technocrats",
    items: [
      {
        title: "Deepak Boniface Cardoza",
        description: "Secretary",
        image: "images/Deepak Boniface Cardoza-min.jpg",
      },
      {
        title: "Shreeshma",
        description: "Treasurer",
        image: "images/Shreeshma-min.jpg",
      },
    ],
  },
  {
    title: "Faculty In-Charge",
    items: [
      {
        title: "Mr Gururaja S",
        description: "Food, Transportation & Accommodation",
        image: "images/team-3.jpg",
      },
      {
        title: "Mr Ragesh Raju",
        description: "Stage & Decoration",
        image: "images/ragesh.jpg",
      },
      {
        title: "Ms Sadhana Kumble",
        description: "Registration & Certificates",
        image: "images/sadana.jpg",
      },
      {
        title: "Ms Sumangala N",
        description: "Publicity & Sponsorship",
        image: "images/team-1.jpg",
      },
      {
        title: "Dr Hareesh B",
        description: "Scores & Results",
        image: "images/hareesh.jpg",
      },
      {
        title: "Mr Sunith Kumar T",
        description: "Website & Design",
        image: "images/sunith.jpg",
      },
    ],
  },
  {
    title: "Event Heads",
    items: [
      {
        title: "Sarath",
        description: "CODEBLANCA",
        image: "images/sarath-min.jpg",
      },
      {
        title: "Ankitha",
        description: "CODEBLANCA",
        image: "images/ankitha1-min.jpg",
      },
      {
        title: "Yashaswi",
        description: "DORTWEB",
        image: "images/Yashswi-min.jpg",
      },
      {
        title: "Shraddha",
        description: "DORTWEB",
        image: "images/shraddha-min.jpg",
      },
      {
        title: "Manisha",
        description: "HARLEM SHAKE",
        image: "images/manisha-min.jpg",
      },
      {
        title: "Preethi",
        description: "HARLEM SHAKE",
        image: "images/preeti-min.jpg",
      },
      {
        title: "Nithin",
        description: "SEOUL",
        image: "images/Nithin-min.jpg",
      },
      {
        title: "Akash",
        description: "SEOUL",
        image: "images/1649077972336_Mr Akash.jpg",
      },
      {
        title: "Pratul",
        description: "L'OBJECTIF",
        image: "images/pratul.jpeg",
      },
      {
        title: "Sanath",
        description: "L'OBJECTIF",
        image: "images/sanath final.png",
      },
      {
        title: "Sannidhi",
        description: "CAIRO CONFLICTS",
        image: "images/sannidhi-min.jpg",
      },
      {
        title: "Harishree",
        description: "CAIRO CONFLICTS",
        image: "images/harishri-min.jpg",
      },
      {
        title: "Varshitha",
        description: "IT PHARAOH",
        image: "images/varshitha.jpeg",
      },
      {
        title: "Mahima",
        description: "IT PHARAOH",
        image: "images/mahima_itmanagaer-min.jpg",
      },
      {
        title: "Abhishek",
        description: "NUKETOWN",
        image: "images/abhishek_gaming-min.jpg",
      },
      {
        title: "Nishan",
        description: "NUKETOWN",
        image: "images/nishan_gaming-min.jpg",
      },
      {
        title: "Lia",
        description: "VLOG OF FAME",
        image: "images/lia-min.jpg",
      },
      {
        title: "Suraksha",
        description: "VLOG OF FAME",
        image: "images/suraksha-min.jpg",
      },
      {
        title: "Gowtham",
        description: "TAKESHI'S CASTLE",
        image: "images/GOWTHAM G K-min.jpg",
      },
      {
        title: "Prajna",
        description: "TAKESHI'S CASTLE",
        image: "images/Prajna-min.JPG",
      },
    ],
  },
  {
    title: "Committee Heads",
    items: [
      {
        title: "Sarath",
        description: "CODEBLANCA",
        image: "images/sarath-min.jpg",
      },
      {
        title: "Ankitha",
        description: "CODEBLANCA",
        image: "images/ankitha1-min.jpg",
      },
      {
        title: "Yashaswi",
        description: "DORTWEB",
        image: "images/Yashswi-min.jpg",
      },
      {
        title: "Shraddha",
        description: "DORTWEB",
        image: "images/shraddha-min.jpg",
      },
      {
        title: "Manisha",
        description: "HARLEM SHAKE",
        image: "images/manisha-min.jpg",
      },
      {
        title: "Preethi",
        description: "HARLEM SHAKE",
        image: "images/preeti-min.jpg",
      },
      {
        title: "Nithin",
        description: "SEOUL",
        image: "images/Nithin-min.jpg",
      },
      {
        title: "Akash",
        description: "SEOUL",
        image: "images/1649077972336_Mr Akash.jpg",
      },
      {
        title: "Pratul",
        description: "L'OBJECTIF",
        image: "images/pratul.jpeg",
      },
      {
        title: "Sanath",
        description: "L'OBJECTIF",
        image: "images/sanath final.png",
      },
      {
        title: "Sannidhi",
        description: "CAIRO CONFLICTS",
        image: "images/sannidhi-min.jpg",
      },
      {
        title: "Harishree",
        description: "CAIRO CONFLICTS",
        image: "images/harishri-min.jpg",
      },
      {
        title: "Varshitha",
        description: "IT PHARAOH",
        image: "images/varshitha.jpeg",
      },
      {
        title: "Mahima",
        description: "IT PHARAOH",
        image: "images/mahima_itmanagaer-min.jpg",
      },
      {
        title: "Abhishek",
        description: "NUKETOWN",
        image: "images/abhishek_gaming-min.jpg",
      },
      {
        title: "Nishan",
        description: "NUKETOWN",
        image: "images/nishan_gaming-min.jpg",
      },
      {
        title: "Lia",
        description: "VLOG OF FAME",
        image: "images/lia-min.jpg",
      },
      {
        title: "Suraksha",
        description: "VLOG OF FAME",
        image: "images/suraksha-min.jpg",
      },
    ],
  },
  {
    title: "Design Team",
    items: [
      {
        title: "Deepak Boniface Cardoza",
        description: "Secretary",
        image: "images/Deepak Boniface Cardoza-min.jpg",
      },
      {
        title: "Shreeshma",
        description: "Treasurer",
        image: "images/Shreeshma-min.jpg",
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
