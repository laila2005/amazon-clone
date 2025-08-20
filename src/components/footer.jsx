import React from "react";
import amazonLogo from "../assets/Amazon.png";
import "./footer-responsive.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* HomepageFooter section */}
      <footer className="primary-footer">
        {/* Back to Top Button */}
        <div
          onClick={scrollToTop}
          className="back-to-top"
        >
          Back to Top
        </div>

        {/* Top Links Section */}
        <div className="footer-links-container">
          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h4 className="footer-links-heading">
                Get to Know Us
              </h4>
              <p className="footer-link">About Us</p>
              <p className="footer-link">Careers</p>
              <p className="footer-link">Press Releases</p>
              <p className="footer-link">Amazon Science</p>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-heading">
                Connect with Us
              </h4>
              <p className="footer-link">Facebook</p>
              <p className="footer-link">Twitter</p>
              <p className="footer-link">Instagram</p>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-heading">
                Make Money with Us
              </h4>
              <p className="footer-link">Sell on Amazon</p>
              <p className="footer-link">Sell under Amazon Accelerator</p>
              <p className="footer-link">Protect and Build Your Brand</p>
              <p className="footer-link">Amazon Global Selling</p>
              <p className="footer-link">Supply to Amazon</p>
              <p className="footer-link">Become an Affiliate</p>
              <p className="footer-link">Fulfilment by Amazon</p>
              <p className="footer-link">Advertise Your Products</p>
              <p className="footer-link">Amazon Pay on Merchants</p>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-heading">
                Let Us Help You
              </h4>
              <p className="footer-link">Your Account</p>
              <p className="footer-link">Returns Center</p>
              <p className="footer-link">Recalls and Product Safety Alerts</p>
              <p className="footer-link">100% Purchase Protection</p>
              <p className="footer-link">Amazon App Download</p>
              <p className="footer-link">Help</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom-section">
            <img
              src={amazonLogo}
              alt="Amazon"
              className="footer-logo"
            />
            <div className="footer-selectors">
              <div className="footer-selector">
                <span className="icon">🌐</span>
                <span>English</span>
                <span style={{ fontSize: "0.8rem", marginLeft: "4px" }}>▼</span>
              </div>
              <div className="footer-selector">
                <img 
                  src="https://img.icons8.com/color/48/india.png" 
                  alt="India" 
                  className="flag-icon"
                />
                <span>India</span>
                <span style={{ fontSize: "0.8rem", marginLeft: "4px" }}>▼</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer section (from merged footer.jsx) */}
      <footer className="secondary-footer">
        <div className="footer-services-grid">
          <div className="footer-service-item">
            <div className="footer-service-title">AbeBooks</div>
            <div className="footer-service-description">Books, art<br />& collectibles</div>
            <div className="footer-service-title">Shop bop</div>
            <div className="footer-service-description">Designer<br />Fashion Brands</div>
          </div>
          <div className="footer-service-item">
            <div className="footer-service-title">Amazon Web Services</div>
            <div className="footer-service-description">Scalable Cloud<br />Computing Services</div>
            <div className="footer-service-title">Amazon Business</div>
            <div className="footer-service-description">Everything For<br />Your Business</div>
          </div>
          <div className="footer-service-item">
            <div className="footer-service-title">Audible</div>
            <div className="footer-service-description">Download<br />Audio Books</div>
            <div className="footer-service-title">Prime Now</div>
            <div className="footer-service-description">2-Hour Delivery<br />on Everyday Items</div>
          </div>
          <div className="footer-service-item">
            <div className="footer-service-title">IMDb</div>
            <div className="footer-service-description">Movies, TV<br />& Celebrities</div>
            <div className="footer-service-title">Amazon Prime Music</div>
            <div className="footer-service-description">100 million songs, ad-free<br />Over 15 million podcast episodes</div>
          </div>
        </div>
        <div className="footer-legal">
          <span className="footer-legal-link">Conditions of Use & Sale</span>
          <span className="footer-legal-link">Privacy Notice</span>
          <span className="footer-legal-link">Interest-Based Ads</span>
          <div className="footer-copyright">© 1996-2024, Amazon.com, Inc. or its affiliates</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;