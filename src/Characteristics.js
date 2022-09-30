import React from "react";
import { MdBloodtype } from "react-icons/md";
import { GiBodyHeight, GiWeightScale } from "react-icons/gi";
import { BsFillEyeFill } from "react-icons/bs";
const Characteristics = (props) => {
  return (
    <div className="characteristics-wrap">
      <div className="characteristics">
        <GiBodyHeight />
        <p>{props.height}</p>
      </div>
      <div className="characteristics">
        <GiWeightScale />
        <p> {props.weight} </p>
      </div>
      <div className="characteristics">
        <BsFillEyeFill />
        <p> {props.eyeColor} </p>
      </div>
      <div className="characteristics">
        <MdBloodtype /> <p>{props.bloodGroup} </p>
      </div>
    </div>
  );
};

export default Characteristics;
