import React from "react";

const NavbarDiv = () => {
  return (
    <div className=" flex items-center justify-center w-auto h-[100px]">
      <div className="flex items-center justify-between  w-[93%]">
        <div>logo</div>

        <div className="flex items-center justify-between list-none gap-[50px] text-[19px]">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Socials</li>
          <li>Contacts</li>
        </div>
        <div className="register">Register Now</div>
      </div>
    </div>
  );
};

export default NavbarDiv;
