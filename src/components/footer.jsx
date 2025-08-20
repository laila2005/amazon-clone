import React from "react";
import amazonLogo from "../assets/Amazon.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* HomepageFooter section */}
      <footer style={{ marginTop: "0px" }}>
        {/* Back to Top Button */}
        <div
          onClick={scrollToTop}
          style={{
            background: "#37475A",
            color: "white",
            textAlign: "center",
            padding: "15px",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Back to Top
        </div>

        {/* Top Links Section */}
        <div
          style={{
            background: "#232F3E",
            color: "white",
            padding: "40px 60px",
            fontSize: "0.9rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            <div>
              <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Get to Know Us
              </h4>
              <p>About Us</p>
              <p>Careers</p>
              <p>Press Releases</p>
              <p>Amazon Science</p>
            </div>

            <div>
              <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Connect with Us
              </h4>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>

            <div>
              <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Make Money with Us
              </h4>
              <p>Sell on Amazon</p>
              <p>Sell under Amazon Accelerator</p>
              <p>Protect and Build Your Brand</p>
              <p>Amazon Global Selling</p>
              <p>Supply to Amazon</p>
              <p>Become an Affiliate</p>
              <p>Fulfilment by Amazon</p>
              <p>Advertise Your Products</p>
              <p>Amazon Pay on Merchants</p>
            </div>

            <div>
              <h4 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Let Us Help You
              </h4>
              <p>Your Account</p>
              <p>Returns Center</p>
              <p>Recalls and Product Safety Alerts</p>
              <p>100% Purchase Protection</p>
              <p>Amazon App Download</p>
              <p>Help</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div
            style={{
              borderTop: "1px solid #3a4553",
              paddingTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            <img
              src={amazonLogo}
              alt="Amazon"
              style={{ height: "30px", marginBottom: "0px", marginRight: "32px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", border: "1px solid #888", borderRadius: "4px", padding: "6px 18px", background: "#232F3E", color: "#fff", fontSize: "1rem", gap: "8px" }}>
                <span style={{ fontSize: "1.2rem" }}>🌐</span>
                <span>English</span>
                <span style={{ fontSize: "0.8rem", marginLeft: "6px" }}>▼</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", border: "1px solid #888", borderRadius: "4px", padding: "6px 18px", background: "#232F3E", color: "#fff", fontSize: "1rem", gap: "8px" }}>
                <img src="https://img.icons8.com/color/48/india.png" alt="India" style={{ width: "24px", height: "24px", marginRight: "8px" }} />
                <span>India</span>
                <span style={{ fontSize: "0.8rem", marginLeft: "6px" }}>▼</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer section (from merged footer.jsx) */}
      <footer style={{ backgroundColor: 'rgba(19, 26, 34, 1)', color: '#fff', padding: '32px 0 0 0', fontSize: '16px', textAlign: 'center', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'left',
          padding: '0 40px',
        }}>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#fff', fontSize: '14.67px' }}>AbeBooks</div>
            <div style={{ color: '#b3b3b3', fontSize: '14.67px', marginBottom: '16px' }}>Books, art<br />& collectibles</div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#fff', fontSize: '14.67px' }}>Shop bop</div>
            <div style={{ color: '#b3b3b3', fontSize: '14.67px' }}>Designer<br />Fashion Brands</div>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#fff', fontSize: '14.67px' }}>Amazon web Services</div>
            <div style={{ color: '#b3b3b3', fontSize: '14.67px', marginBottom: '16px' }}>Scalable Cloud<br />Computing Services</div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#fff', fontSize: '14.67px' }}>Amazon Business</div>
            <div style={{ color: '#b3b3b3', fontSize: '14.67px' }}>Everything For<br />Your Business</div>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#fff', fontSize: '14.67px' }}>Audible</div>
            <div style={{ color: '#b3b3b3', fontSize: '14.67px', marginBottom: '16px' }}>Download<br />Audio Books</div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#fff', fontSize: '14.67px' }}>Prime Now</div>
            <div style={{ color: '#b3b3b3', fontSize: '14.67px' }}>2-Hour Delivery<br />on Everyday Items</div>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#fff', fontSize: '14.67px' }}>IMDb</div>
            <div style={{ color: '#b3b3b3', fontSize: '14.67px', marginBottom: '16px' }}>Movies, TV<br />& Celebrities</div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#fff', fontSize: '14.67px' }}>Amazon Prime Music</div>
            <div style={{ color: '#b3b3b3', fontSize: '14.67px' }}>100 million sings, ad-free<br />Over 15 million podcast episodes</div>
          </div>
        </div>
        <div style={{ marginTop: '40px', color: '#ccc', fontSize: '12.4px', textAlign: 'center' }}>
          <span style={{ margin: '0 16px' }}>Conditions of Use & Sale</span>
          <span style={{ margin: '0 16px' }}>Privacy Notice</span>
          <span style={{ margin: '0 16px' }}>Interset-Based Ads</span><br />
          <span style={{ margin: '0 16px' }}>1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;