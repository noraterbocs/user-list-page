import React from "react";
import { MdBloodtype } from "react-icons/md";
import { GiBodyHeight, GiWeightScale } from "react-icons/gi";
import { BsFillEyeFill } from "react-icons/bs";
const Characteristics = ({ height, weight, eyeColor, bloodGroup }) => {
  return (
    <div className="user-characteristics">
      <div className="user-characteristic">
        <GiBodyHeight />
        <p>{height}</p>
      </div>
      <div className="user-characteristic">
        <GiWeightScale />
        <p> {weight} </p>
      </div>
      <div className="user-characteristic">
        <BsFillEyeFill />
        <p> {eyeColor} </p>
      </div>
      <div className="user-characteristic">
        <MdBloodtype /> <p>{bloodGroup} </p>
      </div>
    </div>
  );
};

export default Characteristics;
