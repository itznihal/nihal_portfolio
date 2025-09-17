import React, { useState } from "react";
import { contactPageData } from "../Data/ContactPageData";
import "./contactfile.scss";
import contactImage from "../Images/Contact/imageTransparent.png";
// icons
import { CgMail } from "react-icons/cg";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // for storing data in states
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // POST DATA TO BACKEND
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = user;

    if (name && email && subject && message) {
      const res = await fetch(
        "https://nihalparmarportfolio-default-rtdb.firebaseio.com/reactcontactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );

      const data = await res.json();

      if (!data) {
        console.log(`message not send `);
      } else {
        // Message Send Success
        setUser({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Message Sent");
        setUser({ ...user, message: "", subject: "" });
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div id="contact" className="contactcls">
        <div className="container-fluid nav_bg prjtcls">
          <div className="row">
            <div className="col-10 mx-auto">
              {/* Heading */}
              <section id="prjtcls" className="prjtcls">
                <div className="container">
                  <div className="section-title">
                    <span>{contactPageData.sectionTitleSpan}</span>
                    <h2>{contactPageData.sectionTitleHeading}</h2>
                    <p>{contactPageData.sectionTitleParagraph}</p>
                  </div>
                </div>
              </section>

              {/* <div className="imageClass">
                <img src={contactImage} className="contact-img" alt="Contact" />
              </div> */}

              <section id="contact" className="contact contactfrmcontainercls">
                <div className="container">
                  <div className="imageClass">
                    <img
                      src={contactImage}
                      className="contact-img"
                      alt="Contact"
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="info-box">
                            {/* <i className="bx bx-share-alt"></i> */}
                            <div className="maincontactcls">
                              <a href="#contact" className="githubicn">
                                <AiOutlineShareAlt className="githubicn" />
                              </a>
                              <h3>{contactPageData.socialProfile}</h3>
                            </div>
                            <div className="social-links">
                              {contactPageData.contactSocialArray.map(
                                (item) => (
                                  <a href={item.link} className="githubicn">
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
                                href="mailto:itznihal143@gmail.com"
                                className="githubicn"
                              >
                                <CgMail className="githubicn" />
                              </a>
                              <h3>{contactPageData.emailMe}</h3>
                              <p>{contactPageData.emailId}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="info-box mt-4">
                            <div className="maincontactcls">
                              <a
                                href="mailto:itznihal143@gmail.com"
                                className="githubicn"
                              >
                                <BiPhoneCall className="githubicn" />
                              </a>
                              <h3>{contactPageData.callMe}</h3>
                              <p>{contactPageData.phoneNo}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <form
                        method="POST"
                        role="form"
                        className="react-email-form"
                      >
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              value={user.name}
                              onChange={getUserData}
                              required
                            />
                          </div>
                          <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              value={user.email}
                              onChange={getUserData}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mt-3">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            value={user.subject}
                            onChange={getUserData}
                            required
                          />
                        </div>
                        <div className="form-group mt-3">
                          <textarea
                            className="form-control"
                            name="message"
                            rows="6"
                            placeholder="Message"
                            value={user.message}
                            onChange={getUserData}
                            required
                          ></textarea>
                        </div>
                        <div className="my-3">
                          <div className="loading">Loading</div>
                          <div className="error-message"></div>
                          <div className="sent-message">
                            Your message has been sent. Thank you!
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" onClick={postData}>
                            {contactPageData.sendMessagebtn}
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
    </>
  );
};

export default Contact;
