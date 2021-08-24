import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      alt="profile_pic"
      className={`h-10 rounded-full cursor-pointer hover:scale-110 transition-all ${className}`}
      src={url}
    ></img>
  );
};

export default Avatar;
