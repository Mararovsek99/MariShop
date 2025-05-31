import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>
      </header>

      <section className="contact-content">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Type your message..."
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>Email: support@marishop.com</p>
          <p>Phone: +386 41 123 456</p>
          <p>Address: Celje, Slovenia</p>
          <h3>Why Contact Us?</h3>
          <p>
            We're here to help with any questions or feedback. We aim to respond
            within 24 hours.
          </p>
          <p>Thank you for choosing MariShop!</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
