import React, { useMemo } from "react";
import "./certification.scss";
import Certificatelogo from "../Images/Certificates/certificatelogo.png";
import { certificatePageData } from "../Data/CertificatePageData";

const Certifications = React.memo(() => {
  const tagCount = 100;
  const tags = useMemo(
    () => Array.from({ length: tagCount }, (_, index) => index + 1),
    []
  );
  const certificates = useMemo(
    () => certificatePageData.certificates || [],
    []
  );

  return (
    <div id="certification" className="certificationcls">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <section id="crtcls" className="crtcls" aria-label="Certifications section">
              <div className="container">
                <div className="section-title">
                  <span>{certificatePageData.sectionTitleSpan}</span>
                  <h2>{certificatePageData.sectionTitleHeading}</h2>
                  <p>{certificatePageData.sectionTitleParagraph}</p>
                </div>
              </div>
            </section>

            <section id="header1" className="d-flex align-items-center">
              <div className="container-fluid nav_bg">
                <div className="row firstele">
                  <div className="col-10 mx-auto">
                    <div className="row srvccls">
                      <div
                        className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                        data-aos="fade-right"
                        data-aos-delay="100"
                      >
                        <h1>{certificatePageData.sectionTitleSpan}</h1>
                        <h2 className="my-3">
                          {certificatePageData.certificateDescription}
                        </h2>
                      </div>

                      <div
                        className="col-lg-6 order-1 order-lg-2 header-img imgabtcls prjctdesc image"
                        data-aos="fade-left"
                        data-aos-delay="200"
                      >
                        <img
                          src={Certificatelogo}
                          className="img-fluid imgabt"
                          alt="Certifications showcase"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="product_section layout_padding">
              <div className="container">
                <div className="row">
                  {certificates.map((item, index) => (
                    <div
                      key={`certificate-${index}-${item.technology}`}
                      className="col-sm-6 col-lg-4 product-mediaquery"
                    >
                      <div
                        className="box"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <div id="crt1" className="img-box">
                          <div className="reflection-container-1">
                            {tags.map((tag) => (
                              <div
                                key={`reflection-${index}-${tag}`}
                                className={`reflection-grid-cell reflection-grid-cell-${tag}`}
                              ></div>
                            ))}
                            <div
                              className="reflection-content"
                              style={item.reflectionContent}
                            ></div>
                          </div>
                        </div>
                        <div className="detail-box chead">
                          <h1>{item.technology}</h1>
                          <div className="product_info cbody">
                            <h1>{item.platform}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
});

Certifications.displayName = "Certifications";

export default Certifications;
