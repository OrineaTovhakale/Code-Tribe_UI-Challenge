
import Navbar from "./Navbar";
import heroImage from "./assets/image1.png";
import CardSection from "./CardSection";
import pictureImage from "./assets/image4.png";
import ImageContentSection from "./ImageContentSection";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ImageContentSection
        image={heroImage}
        subtitle="Your Style, Your Story"
        title="Welcome to Blonmmvlies"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, nisl vel fermentum venenatis, erat urna luctus neque, at facilisis magna orci nec mi."
        buttonText="Shop Now"
        buttonClass="hero-btn"
      />
      <CardSection />
      <ImageContentSection
        image={pictureImage}
        title="Utforsk vår kolleksjon – flere ting du kanskje vil elske når du oppdager dem."
        buttonText="Discover"
        buttonClass="picture-btn"
      />
      <Footer />
    </>
  );
}

export default App;