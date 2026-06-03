import "../assets/skills.css";
import { CSSProperties } from "react";
import { LoaderLayout } from "@layouts";
import Slide from "react-reveal/Slide";
import { skillsPage } from "@db";
import { FloatingSparkles } from "@components";

const Skills = () => {
  return (
    <LoaderLayout>
      <FloatingSparkles />
      <section className="skills-page w-full relative">
        <div className="container mx-auto skills-shell page-enter">
          <div className="skills-heading">
            <Slide bottom>
              <span className="skills-kicker">Core toolkit</span>
            </Slide>
            <Slide bottom>
              <h2 className="skills-title">
                The frontend technologies and workflow tools I use to build
                reliable, polished products.
              </h2>
            </Slide>
            <Slide bottom>
              <p className="skills-intro">
                A balanced toolkit across interface development, styling, product
                implementation, and day-to-day collaboration. I care about clean
                code, maintainable systems, and smooth delivery.
              </p>
            </Slide>
          </div>

          <div className="skills-grid">
            {skillsPage.map((item, index) => (
              <Slide key={item.name} left={index % 3 === 0} right={index % 3 !== 0}>
                <article
                  className="skill-card"
                  style={{ "--clr": item.color } as CSSProperties}
                >
                  <div className="skill-ring-wrap">
                    <div
                      className="skill-ring"
                      style={
                        {
                          "--percent": `${item.rate}%`,
                          "--clr": item.color,
                        } as CSSProperties
                      }
                    >
                      <div className="skill-ring-inner">
                        <span className="skill-value">
                          {item.rate}
                          <span>%</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="skill-copy">
                    <h3>{item.name}</h3>
                    <p>
                      Practical experience using {item.name} to build polished,
                      maintainable interfaces and support reliable product delivery.
                    </p>
                  </div>
                </article>
              </Slide>
            ))}
          </div>
        </div>
      </section>
    </LoaderLayout>
  );
};

export default Skills;
