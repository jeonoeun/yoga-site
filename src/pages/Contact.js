import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [radioOne, setRadioOne] = useState(false);
  const [radioTwo, setRadioTwo] = useState(false);
  const [radioThree, setRadioThree] = useState(false);
  const [radioFour, setRadioFour] = useState(false);
  const [radioFive, setRadioFive] = useState(false);
  const handleReset = () => {
    setEmail("");
    setMessage("");
    setConsent(false);
    setRadioOne(false);
    setRadioTwo(false);
    setRadioThree(false);
    setRadioFour(false);
    setRadioFive(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_46b2p8g",
        "template_tzl2nck",
        form.current,
        "fhCw8wY31pgfi0m-0"
      )
      .then(
        (result) => {
          alert("전송되었습니다.");
          setEmail("");
          setMessage("");
          setConsent(false);
          setRadioOne(false);
          setRadioTwo(false);
          setRadioThree(false);
          setRadioFour(false);
          setRadioFive(false);
        },
        (error) => {
          alert("전송을 실패했습니다.");
        }
      );
  };

  return (
    <div className="contact page">
      <form ref={form} onSubmit={sendEmail} className="email-form">
        <input
          className="input-email"
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter your email!"
        />
        <div className="rating">
          <p className="rating_title">Please rate our site!</p>
          <label>
            <input
              type="radio"
              name="rating"
              value="1, ★"
              checked={radioOne}
              onClick={() => {
                setRadioOne(!radioOne);
              }}
            />
            ★
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="2, ★★"
              checked={radioTwo}
              onClick={() => {
                setRadioTwo(!radioTwo);
              }}
            />
            ★★
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="3, ★★★"
              checked={radioThree}
              onClick={() => {
                setRadioThree(!radioThree);
              }}
            />
            ★★★
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="4, ★★★★"
              checked={radioFour}
              onClick={() => {
                setRadioFour(!radioFour);
              }}
            />
            ★★★★
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value="5, ★★★★★"
              checked={radioFive}
              onClick={() => {
                setRadioFive(!radioFive);
              }}
            />
            ★★★★★
          </label>
        </div>
        <textarea
          className="textarea"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Text area (Comment)"
        />
        <div className="info">
          <p>Do you agree to provide information?</p>
          <div className="checkbox">
            <input
              id="consent"
              type="checkbox"
              text="Consent"
              checked={consent}
              onClick={() => {
                setConsent(!consent);
              }}
            />
            <label htmlFor="consent">Consent</label>
          </div>
        </div>
        <div className="btn-area">
          <div className="reset-btn" onClick={handleReset}>
            Reset
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
