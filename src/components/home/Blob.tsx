import { TypeWriter } from ".";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils";
import { NavLink } from "react-router-dom";
import { homePage } from "@db";

const Blob = () => {
  return (
    <div className="home-hero">
      <motion.div
        className="home-copy"
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <TypeWriter />
        <p className="home-summary">
          I design and build clean, responsive interfaces for dashboards,
          platforms, and business products. My frontend work is guided by strong
          attention to detail, a QA mindset, and a love for polished user
          experiences.
        </p>

        <div className="home-stack">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
          <span>Frontend Architecture</span>
          <span>QA-Aware Delivery</span>
        </div>

        <div className="home-actions">
          <NavLink to="/projects#projects" className="primary-link">
            View Featured Projects
          </NavLink>
          <NavLink to="/me#me" className="secondary-link">
            About My Approach
          </NavLink>
        </div>
      </motion.div>

      <motion.div
        className="home-visual"
        variants={fadeIn("left", 0.15)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <div className="hero-portrait-shell">
          <div className="hero-portrait">
            <img src={homePage.personal_image} alt="Nour portrait" />

            <div className="hero-badge top">
              <span className="hero-badge-label">Focus</span>
              <span className="hero-badge-value">Frontend engineering for real products</span>
            </div>

            <div className="hero-badge bottom">
              <span className="hero-badge-label">Strength</span>
              <span className="hero-badge-value">UI clarity, QA discipline, product ownership</span>
            </div>

            <NavLink to="/projects#projects" className="hero-project-link group">
              <img
                src="/rounded-text.png"
                alt="My projects"
                width={141}
                height={148}
                className="hero-project-ring"
              />
              <span>
                <IoArrowForward />
              </span>
            </NavLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blob;
