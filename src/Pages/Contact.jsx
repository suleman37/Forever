import React from "react";
import Title from "../components/Title";
import contact_img from "../assets/frontend_assets/contact_img.png";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={contact_img}
          alt="contact_img"
        />
        <div className="flex flex-col justify-center gap-4 mb-28">
          <p className="font-semibold text-xl text-gray-600">Our Story</p>
          <p className="text-gray-500">
            54804 Willms Station <br /> Wah Cantt , Punjab , Pakistan
          </p>
          <p className="text-gray-500">
            Tel : (051) 555-0123<br /> Email: suleman@forever.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
