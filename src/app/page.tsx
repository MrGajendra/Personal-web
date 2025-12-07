import Herosec from "../blocks/Herosec";

import About from "../blocks/About";
import Services from "../blocks/Services";
import Newsletter from "../blocks/Newsletter";
import Workshops from "../blocks/Workshops";
import Community from "../blocks/Community";
import Projects from "../blocks/Projects";
import Books from "../blocks/Books";
import SocialContent from "../blocks/SocialContent";
import Contact from "../blocks/Contact";
import Footer from "../blocks/Footer";
import Startups from "../blocks/Startups";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div>
            <div className="">
              <Herosec />

              <About />
              <Services />
              <Newsletter />
              <Workshops />
              <Community />
              <Projects />
              <Startups />
              <Books />
              <SocialContent />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
