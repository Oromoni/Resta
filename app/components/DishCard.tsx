"use client";
import Image from "next/image";
import React from "react";
import { StaticImageData } from 'next/image';

type Dish = {
  id: number;
  image: StaticImageData; // Update this line
  title: string;
  description: string;
};

const DishCard: React.FC<{ project: Dish }> = ({ project }) => {
  const handleClick = () => {
    console.log(project.id);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <Image
        src={project.image}
        alt={project.title}
        priority
        className="rounded-3xl p-2"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold -tracking-tighter">{project.title}</h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default DishCard;
