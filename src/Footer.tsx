import SocialIcons from "./SocialIcons.tsx";
import "./App.css";

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
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
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
        <button className="footer-btn">Subscribe</button>
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