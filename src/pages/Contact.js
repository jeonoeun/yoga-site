import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

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
          placeholder="Please enter your email!"
        />

        <textarea
          className="textarea"
          name="message"
          placeholder="Text area (Comment)"
        />
        <div className="info">
          <p>Do you agree to provide information?</p>
          <div className="checkbox">
            <input id="consent" type="checkbox" text="Consent" />
            <label htmlFor="consent">Consent</label>
          </div>
        </div>
        <div className="btn-area">
          <button className="reset-btn">Reset</button>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
