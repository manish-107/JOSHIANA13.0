import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../components/ui/3d-card.jsx";

export function ThreeDCardDemo({
  imageSrc,
  category,
  title,
  details,
  coordinators,
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card bg-black dark:border-gray-700 border-gray-700 w-auto sm:w-[25rem] h-auto rounded-xl p-4 border">
        <CardItem translateZ={50} className="text-xl font-bold text-white">
          {category}
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-300 text-sm max-w-sm mt-2"
        >
          {title}
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src={imageSrc}
            height="800"
            width="800"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-4 text-neutral-300 text-sm">
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
        <div className="mt-4">
          <p className="font-semibold">Event Coordinators:</p>
          {coordinators.map((coordinator, index) => (
            <p key={index}>
              {coordinator.name}:{" "}
              <a
                href={`tel:${coordinator.phone}`}
                className="text-blue-300 "
                title="author"
              >
                {coordinator.phone}
              </a>
            </p>
          ))}
        </div>
      </CardBody>
    </CardContainer>
  );
}
