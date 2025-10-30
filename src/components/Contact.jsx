import React from "react";
import "../components/Style/index.css";

function Contact() {
  return (
    <section id="contact">
      <h4>Contact</h4>
      <p>
        <i className="fas fa-envelope"></i>
        <a href="mailto:isabelfeltman99@gmail.com">isabelfeltman99@gmail.com</a>
        <br />
        <i className="fas fa-phone"></i>
        <a href="tel:+46763093076">+46763093076</a>
      </p>
    </section>
  );
}

export default Contact;