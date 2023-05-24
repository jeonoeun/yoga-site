import React from "react";
import { Link } from "react-router-dom";

export default function Gallery({ vinyasa, setVinyasa, acro, setAcro }) {
  const handleVinyasa = () => {
    setVinyasa(true);
  };
  const handleAcro = () => {
    setAcro(true);
  };
  return (
    <section className="gallery page">
      <h3>Vinyasa Yoga - Cardio Yoga Sequence</h3>
      <p className={`link ${vinyasa ? "vinyasa" : ""}`} onClick={handleVinyasa}>
        <Link
          to="https://www.tummee.com/yoga-sequences/15-minute-yoga-sequence-cardio-yoga-sequence"
          target="_blank"
        >
          More info about Cardio Yoga Sequence
        </Link>
        <span className="icon">
          <i className="xi-arrow-right"></i>
        </span>
      </p>
      <div className="flex">
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/vanyasa1.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa1.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/vanyasa2.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa2.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/vanyasa3.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa3.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/vanyasa4.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa4.png"}
            alt=""
          />
        </figure>
      </div>
      <div className="flex">
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/vanyasa2.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa2.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/vanyasa6.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa6.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/vanyasa7.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa7.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/vanyasa8.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/vanyasa8.png"}
            alt=""
          />
        </figure>
      </div>
      <h3 className="acro">
        Acro Yoga - Yoga Sequence For Teens With Partners
      </h3>
      <p className={`link ${acro ? "acrolink" : ""}`} onClick={handleAcro}>
        <Link
          to="https://www.tummee.com/yoga-sequences/yoga-sequence-for-teens-with-partners"
          target="_blank"
        >
          More info about Yoga Sequence For Teens With Partners
        </Link>
        <span className="icon">
          <i className="xi-arrow-right"></i>
        </span>
      </p>
      <div className="flex">
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/acro1.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/acro1.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/acro2.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/acro2.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/acro3.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/acro3.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/acro4.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/acro4.png"}
            alt=""
          />
        </figure>
      </div>
      <div className="flex">
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/acro5.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/acro5.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/acro6.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/acro6.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/acro7.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/acro7.png"}
            alt=""
          />
        </figure>
        <figure className="img">
          <img
            onClick={() => {
              window.open(
                "https://lustrous-starburst-306d02.netlify.app/images/acro8.png"
              );
            }}
            src={process.env.PUBLIC_URL + "./images/acro8.png"}
            alt=""
          />
        </figure>
      </div>
    </section>
  );
}
