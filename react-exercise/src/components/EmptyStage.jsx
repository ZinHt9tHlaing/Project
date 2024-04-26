import React from "react";
import EmptyImg from "../img/empty.svg";

const EmptyStage = () => {
  return (
    <div className="hidden last:flex flex-col items-center py-10">
      <img width={150} className="mb-5" src={EmptyImg} alt="empty img" />
      <p className="text-sm text-red-600 font-bold">There is no list.</p>
    </div>
  );
};

export default EmptyStage;
