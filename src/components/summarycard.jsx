import React from "react";
import Phone from "../assets/frontend_assets/phone.svg";
import mobile_store from "../assets/frontend_assets/Mobile app store badge(1).svg";
import mobile_app from "../assets/frontend_assets/Mobile app store badge.svg";
import Frame from "../assets/frontend_assets/Frame 2608999.svg";
import vector from "../assets/frontend_assets/Vector.svg";
import wire from "../assets/frontend_assets/wire.svg";

const Summary = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row border bg-[#101011] mt-[300px] rounded-[20px]"
        style={{
          backgroundImage: `url(${wire}), url(${wire}), url(${wire})`,
          backgroundSize: "cover",
          backgroundPosition: "top left, center, bottom right",
          backgroundRepeat: "repeat",
          gap: "5px",
        }}
      >
        <div className="w-full sm:w-1/2 flex items-center justify-center py-5 sm:py-0 " style={{ padding: "10px 30px" }}>
          <div className="text-white">
            <button className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              🔥 Download Our App
            </button>
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-bold">
              Get Our App : Your <br />
              Health Just a Tap Away!
            </h1>
            <p className="text-lg sm:text-lg">
              Download now to explore medicines ,upload <br />
              perticipations, and enjoy seamless doorstep delivery <br />
              anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
              <img
                src={mobile_store}
                alt="Icon 1"
                className="w-[100px] sm:w-[150px] h-auto"
              />
              <img
                src={mobile_app}
                alt="Icon 2"
                className="w-[100px] sm:w-[150px] h-auto"
              />
              <div className="flex">
                <img src={Frame} alt="Frame" className="w-[30px] sm:w-[40px] h-auto" />
                <div>
                  <img
                    src={vector}
                    alt="vector"
                    className="w-[40px] sm:w-[50px] h-auto self-start"
                  />
                  <h5 className="ml-3">
                    <b>Watch Video</b>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="w-full sm:w-1/3 mt-[-200px]" src={Phone} alt="Phone" />
      </div>
    </>
  );
};

export default Summary;