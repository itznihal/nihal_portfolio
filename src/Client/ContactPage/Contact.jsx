import React, { useState, useCallback, useMemo } from "react";
import { contactPageData } from "../Data/ContactPageData";
import "./contactfile.scss";
import contactImage from "../Images/Contact/imageTransparent.png";
import { CgMail } from "react-icons/cg";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

const FIREBASE_URL =
  process.env.REACT_APP_FIREBASE_DATABASE_URL ||
  "https://nihalparmarportfolio-default-rtdb.firebaseio.com/reactcontactform.json";

const MAX_MESSAGE_LENGTH = 2000;

const Contact = React.memo(() => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  
  const messageLength = user.message.length;
  const remainingChars = MAX_MESSAGE_LENGTH - messageLength;

  // Real-time validation functions
  const validateName = useCallback((name) => {
    return name.trim().length >= 2;
  }, []);

  const validateEmail = useCallback((email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, []);

  const validateSubject = useCallback((subject) => {
    return subject.trim().length >= 3;
  }, []);

  const validateMessage = useCallback((message) => {
    return message.trim().length >= 10 && message.length <= MAX_MESSAGE_LENGTH;
  }, []);

  // Validation status for each field
  const fieldValidation = useMemo(() => {
    return {
      name: touched.name ? validateName(user.name) : null,
      email: touched.email ? validateEmail(user.email) : null,
      subject: touched.subject ? validateSubject(user.subject) : null,
      message: touched.message ? validateMessage(user.message) : null,
    };
  }, [user, touched, validateName, validateEmail, validateSubject, validateMessage]);

  const getUserData = useCallback((e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    
    // Mark field as touched when user starts typing
    if (!touched[name]) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
    
    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: null, message: "" });
    }
  }, [status.type, touched]);

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
    if (message.length > MAX_MESSAGE_LENGTH) {
      setStatus({
        type: "error",
        message: `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`,
      });
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
          setTouched({
            name: false,
            email: false,
            subject: false,
            message: false,
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
                          <div className="input-wrapper">
                            <input
                              type="text"
                              name="name"
                              className={`form-control ${
                                fieldValidation.name === true ? "is-valid" : ""
                              } ${fieldValidation.name === false ? "is-invalid" : ""}`}
                              id="name"
                              placeholder="Your Name"
                              value={user.name}
                              onChange={getUserData}
                              required
                              aria-required="true"
                              disabled={isLoading}
                              aria-invalid={fieldValidation.name === false}
                              aria-describedby="name-validation"
                            />
                            {fieldValidation.name === true && (
                              <FaCheckCircle
                                className="validation-icon valid-icon"
                                aria-hidden="true"
                                aria-label="Name is valid"
                              />
                            )}
                            <span id="name-validation" className="visually-hidden">
                              {fieldValidation.name === true
                                ? "Name is valid"
                                : fieldValidation.name === false
                                ? "Name must be at least 2 characters"
                                : ""}
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <label htmlFor="email" className="visually-hidden">
                            Your Email
                          </label>
                          <div className="input-wrapper">
                            <input
                              type="email"
                              className={`form-control ${
                                fieldValidation.email === true ? "is-valid" : ""
                              } ${fieldValidation.email === false ? "is-invalid" : ""}`}
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              value={user.email}
                              onChange={getUserData}
                              required
                              aria-required="true"
                              disabled={isLoading}
                              aria-invalid={fieldValidation.email === false}
                              aria-describedby="email-validation"
                            />
                            {fieldValidation.email === true && (
                              <FaCheckCircle
                                className="validation-icon valid-icon"
                                aria-hidden="true"
                                aria-label="Email is valid"
                              />
                            )}
                            <span id="email-validation" className="visually-hidden">
                              {fieldValidation.email === true
                                ? "Email is valid"
                                : fieldValidation.email === false
                                ? "Please enter a valid email address"
                                : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <label htmlFor="subject" className="visually-hidden">
                          Subject
                        </label>
                        <div className="input-wrapper">
                          <input
                            type="text"
                            className={`form-control ${
                              fieldValidation.subject === true ? "is-valid" : ""
                            } ${fieldValidation.subject === false ? "is-invalid" : ""}`}
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            value={user.subject}
                            onChange={getUserData}
                            required
                            aria-required="true"
                            disabled={isLoading}
                            aria-invalid={fieldValidation.subject === false}
                            aria-describedby="subject-validation"
                          />
                          {fieldValidation.subject === true && (
                            <FaCheckCircle
                              className="validation-icon valid-icon"
                              aria-hidden="true"
                              aria-label="Subject is valid"
                            />
                          )}
                          <span id="subject-validation" className="visually-hidden">
                            {fieldValidation.subject === true
                              ? "Subject is valid"
                              : fieldValidation.subject === false
                              ? "Subject must be at least 3 characters"
                              : ""}
                          </span>
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <label htmlFor="message" className="visually-hidden">
                          Message
                        </label>
                        <div className="input-wrapper">
                          <textarea
                            className={`form-control ${
                              fieldValidation.message === true ? "is-valid" : ""
                            } ${fieldValidation.message === false ? "is-invalid" : ""}`}
                            name="message"
                            id="message"
                            rows="6"
                            placeholder="Message"
                            value={user.message}
                            onChange={getUserData}
                            maxLength={MAX_MESSAGE_LENGTH}
                            required
                            aria-required="true"
                            disabled={isLoading}
                            aria-invalid={fieldValidation.message === false}
                            aria-describedby="message-counter message-validation"
                          ></textarea>
                          {fieldValidation.message === true && (
                            <FaCheckCircle
                              className="validation-icon valid-icon textarea-icon"
                              aria-hidden="true"
                              aria-label="Message is valid"
                            />
                          )}
                          <span id="message-validation" className="visually-hidden">
                            {fieldValidation.message === true
                              ? "Message is valid"
                              : fieldValidation.message === false
                              ? "Message must be at least 10 characters"
                              : ""}
                          </span>
                        </div>
                        <div
                          id="message-counter"
                          className={`character-counter ${
                            remainingChars <= 50 && remainingChars > 0
                              ? "warning"
                              : ""
                          } ${remainingChars === 0 ? "error" : ""}`}
                          role="status"
                          aria-live="polite"
                        >
                          <span className="char-count">
                            {messageLength} / {MAX_MESSAGE_LENGTH}
                          </span>
                          {remainingChars > 0 && (
                            <span className="char-remaining">
                              {" "}
                              ({remainingChars} remaining)
                            </span>
                          )}
                          {remainingChars === 0 && (
                            <span className="char-overflow">
                              {" "}
                              (Character limit reached)
                            </span>
                          )}
                        </div>
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
