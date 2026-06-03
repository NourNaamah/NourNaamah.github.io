import { LoaderLayout } from "@layouts";
import { IntroSection, TabFactory, FloatingSparkles } from "@components";
import "../assets/me.css";
import { useState } from "react";
import { IoArrowRedoOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Me = () => {
  const [tab, setTab] = useState("Experience");

  return (
    <div className="about-page w-full relative">
      <FloatingSparkles />
      <LoaderLayout>
        <div className="container mx-auto about-shell">
          <div className="about-heading">
            <span className="about-kicker">About my approach</span>
            <h2 className="about-title">
              Frontend thinking shaped by product clarity, QA discipline, and
              communication.
            </h2>
          </div>

          <div className="about-grid">
            <IntroSection />

            <div className="about-panel tabs">
              <div className="about-tabs">
                <button
                  type="button"
                  className={`tab ${tab === "Experience" ? "active" : ""}`}
                  onClick={() => setTab("Experience")}
                >
                  Experience
                </button>
              </div>
              <div className="about-tab-content">
                <TabFactory tab={tab} />
              </div>
            </div>
          </div>

          <div className="about-cta-row">
            <p className="about-cta-copy">
              Want to see how this experience translates into real product work?
              Explore the frontend systems, dashboards, and interfaces I have
              built.
            </p>

            <NavLink to="skills#me" className="about-cta-link">
              <span>Visit My Skills</span>
              <IoArrowRedoOutline />
            </NavLink>
          </div>
        </div>
      </LoaderLayout>
    </div>
  );
};

export default Me;
