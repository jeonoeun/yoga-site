import React from "react";

export default function Gallery() {
  return (
    <div className="gallery page">
      <h3>Vinyasa Yoga - Cardio Yoga Sequence</h3>
      <div className="flex">
        <img src={process.env.PUBLIC_URL + "./images/vanyasa1.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/vanyasa2.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/vanyasa3.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/vanyasa4.png"} alt="" />
      </div>
      <div className="flex">
        <img src={process.env.PUBLIC_URL + "./images/vanyasa2.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/vanyasa6.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/vanyasa7.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/vanyasa8.png"} alt="" />
      </div>
      <h3 className="acro">Acro Yoga - Yoga Sequence For Teens With Partners</h3>
      <div className="flex">
        <img src={process.env.PUBLIC_URL + "./images/acro1.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/acro2.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/acro3.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/acro4.png"} alt="" />
      </div>
      <div className="flex">
        <img src={process.env.PUBLIC_URL + "./images/acro5.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/acro6.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/acro7.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "./images/acro8.png"} alt="" />
      </div>
    </div>
  );
}
