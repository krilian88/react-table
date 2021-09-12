import React from "react";

export const InfoCard = ({ description }) => {

  const { firstName, lastName, email, phone } = description;
  
  return (
    <div className="description">
      <h2>Profile Info:</h2>
      <h3>
        Selected profile: {firstName} {lastName}
      </h3>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
    </div>
  );
};
