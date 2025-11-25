import React, { useState, useCallback } from "react";
import { contactPageData } from "../Data/ContactPageData";
import "./contactfile.scss";
import contactImage from "../Images/Contact/imageTransparent.png";
import { CgMail } from "react-icons/cg";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const FIREBASE_URL =
  process.env.REACT_APP_FIREBASE_DATABASE_URL ||
  "https://nihalparmarportfolio-default-rtdb.firebaseio.com/reactcontactform.json";

const Contact = React.memo(() => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const getUserData = useCallback((e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: null, message: "" });
    }
  }, [status.type]);

  const validateForm = useCallback(() => {
    const { name, email, subject, message } = user;
    
    if (!name.trim()) {
      setStatus({ type: "error", message: "Name is required" });
      return false;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", message: "Valid email is required" });
      return false;
    }
    if (!subject.trim()) {
      setStatus({ type: "error", message: "Subject is required" });
      return false;
    }
    if (!message.trim()) {
      setStatus({ type: "error", message: "Message is required" });
      return false;
    }
    return true;
  }, [user]);

  const postData = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsLoading(true);
      setStatus({ type: null, message: "" });

      try {
        const { name, email, subject, message } = user;
        const res = await fetch(FIREBASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
            timestamp: new Date().toISOString(),
          }),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (data) {
          setUser({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
          });
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [user, validateForm]
  );

  const email = process.env.REACT_APP_EMAIL || contactPageData.emailId;
  const phone = process.env.REACT_APP_PHONE || contactPageData.phoneNo;

  return (
    <div id="contact" className="contactcls">
      <div className="container-fluid nav_bg prjtcls">
        <div className="row">
          <div className="col-10 mx-auto">
            <section id="prjtcls" className="prjtcls" aria-label="Contact section">
              <div className="container">
                <div className="section-title">
                  <span>{contactPageData.sectionTitleSpan}</span>
                  <h2>{contactPageData.sectionTitleHeading}</h2>
                  <p>{contactPageData.sectionTitleParagraph}</p>
                </div>
              </div>
            </section>

            <section className="contact contactfrmcontainercls">
              <div className="container">
                <div className="imageClass">
                  <img
                    src={contactImage}
                    className="contact-img"
                    alt="Contact illustration"
                    loading="lazy"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="info-box">
                          <div className="maincontactcls">
                            <AiOutlineShareAlt className="githubicn" aria-hidden="true" />
                            <h3>{contactPageData.socialProfile}</h3>
                          </div>
                          <div className="social-links" role="list">
                            {contactPageData.contactSocialArray.map(
                              (item, index) => (
                                <a
                                  key={`social-${index}`}
                                  href={item.link}
                                  className="githubicn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`Visit ${item.link}`}
                                >
                                  {item.logo}
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-box mt-4">
                          <div className="maincontactcls">
                            <a
                              href={`mailto:${email}`}
                              className="githubicn"
                              aria-label={`Send email to ${email}`}
                            >
                              <CgMail className="githubicn" aria-hidden="true" />
                            </a>
                            <h3>{contactPageData.emailMe}</h3>
                            <p>{email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-box mt-4">
                          <div className="maincontactcls">
                            <a
                              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                              className="githubicn"
                              aria-label={`Call ${phone}`}
                            >
                              <BiPhoneCall className="githubicn" aria-hidden="true" />
                            </a>
                            <h3>{contactPageData.callMe}</h3>
                            <p>{phone}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <form
                      onSubmit={postData}
                      className="react-email-form"
                      noValidate
                    >
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="name" className="visually-hidden">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            value={user.name}
                            onChange={getUserData}
                            required
                            aria-required="true"
                            disabled={isLoading}
                          />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <label htmlFor="email" className="visually-hidden">
                            Your Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            value={user.email}
                            onChange={getUserData}
                            required
                            aria-required="true"
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <label htmlFor="subject" className="visually-hidden">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          value={user.subject}
                          onChange={getUserData}
                          required
                          aria-required="true"
                          disabled={isLoading}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label htmlFor="message" className="visually-hidden">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          rows="6"
                          placeholder="Message"
                          value={user.message}
                          onChange={getUserData}
                          required
                          aria-required="true"
                          disabled={isLoading}
                        ></textarea>
                      </div>
                      {status.message && (
                        <div
                          className={`alert ${
                            status.type === "success"
                              ? "alert-success"
                              : "alert-danger"
                          } mt-3`}
                          role="alert"
                        >
                          {status.message}
                        </div>
                      )}
                      <div className="text-center mt-3">
                        <button
                          type="submit"
                          disabled={isLoading}
                          aria-busy={isLoading}
                        >
                          {isLoading
                            ? "Sending..."
                            : contactPageData.sendMessagebtn}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
