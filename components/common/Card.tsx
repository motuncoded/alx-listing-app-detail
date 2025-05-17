import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  price,
  children,
}) => (
  <div className="bg-white rounded-lg shadow p-4 flex flex-col">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 mb-4 flex-1">{description}</p>
    <div className="flex items-center justify-between">
      <span className="text-lg font-bold">${price} / night</span>
      {children}
    </div>
  </div>
);

export default Card;
