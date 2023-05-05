import React from "react";

export default function Gallery() {
  return (
    <div className="gallery page">
      <h3>Vinyasa Yoga - Cardio Yoga Sequence</h3>
      <div className="flex">
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/vanyasa1.png");
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa1.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/vanyasa2.png");
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa2.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/vanyasa3.png");
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa3.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/vanyasa4.png");
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa4.png"}
            alt=""
          />
        </div>
      </div>
      <div className="flex">
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/vanyasa2.png");
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa2.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/vanyasa6.png");
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa6.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/vanyasa7.png");
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa7.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/vanyasa8.png");
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa8.png"}
            alt=""
          />
        </div>
      </div>
      <h3 className="acro">
        Acro Yoga - Yoga Sequence For Teens With Partners
      </h3>
      <div className="flex">
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/acro1.png");
            }}
            src={process.env.PUBLIC_URL + "./images/acro1.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/acro2.png");
            }}
            src={process.env.PUBLIC_URL + "./images/acro2.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/acro3.png");
            }}
            src={process.env.PUBLIC_URL + "./images/acro3.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/acro4.png");
            }}
            src={process.env.PUBLIC_URL + "./images/acro4.png"}
            alt=""
          />
        </div>
      </div>
      <div className="flex">
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/acro5.png");
            }}
            src={process.env.PUBLIC_URL + "./images/acro5.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/acro6.png");
            }}
            src={process.env.PUBLIC_URL + "./images/acro6.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/acro7.png");
            }}
            src={process.env.PUBLIC_URL + "./images/acro7.png"}
            alt=""
          />
        </div>
        <div className="img">
          <img
            onClick={() => {
              window.open("https://lustrous-starburst-306d02.netlify.app/images/acro8.png");
            }}
            src={process.env.PUBLIC_URL + "./images/acro8.png"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
