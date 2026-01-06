import SocialIcons from "./SocialIcons.tsx";
import "./App.css";
import Link from "./Link.tsx";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-brand-section">
        <p className="footer-tagline">Your Style, Your Story</p>
        <div className="footer-brand">Blonmmvlies"</div>
      </div>
     
<div className="footer-quick-links">
  <h3>Quick Links</h3>
  <ul>
    <li><Link href="#" text="Home" className="footer-link" /></li> {/* Add class if you want footer-specific styles */}
    <li><Link href="#" text="About" className="footer-link" /></li>
    <li><Link href="#" text="Services" className="footer-link" /></li>
    <li><Link href="#" text="Contact" className="footer-link" /></li>
  </ul>
</div>

      <div className="footer-paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="footer-join">
        <h3>Join Our Culture</h3>
        <button className="footer-btn" onClick={() => alert("Subscribed! Thank you.")}>Subscribe</button>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">© 2025 Blonmmvlies. All rights reserved.</div>
        <div className="footer-social">
          <span>Here are our social media pages</span>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;