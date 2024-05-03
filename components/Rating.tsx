import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-3 items-center">
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index} style={{ cursor: "pointer" }}>
            {index + 1 > rating && index < rating ? (
              <FaStarHalf className="text-yellow-400"></FaStarHalf>
            ) : index + 1 <= rating ? (
              <FaStar className="text-yellow-400"></FaStar>
            ) : (
              <FaRegStar></FaRegStar>
            )}
          </span>
        );
      })}
    </div>
  );
}
