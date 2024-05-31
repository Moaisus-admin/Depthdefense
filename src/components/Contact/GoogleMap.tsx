"use client";
  
import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="map-area">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96573.31103674119!2d-73.91097366523668!3d40.85176866829554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b553a697cb1%3A0x556e43a78ff15c77!2sThe%20Bronx%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1600202608808!5m2!1sen!2sbd"></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
