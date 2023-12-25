import { Project } from "../../components/Project";
import {
  firstProject,
  secondProject,
  thirdProject,
} from "../../helpers/constants";
import "./Projects.scss";

export const Projects = () => {
  return (
    <section className="section projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="projects__content">
          <div className="projects__item">
            <Project projectsItem={firstProject} direction="row" />
          </div>
          <div className="projects__item">
            <Project projectsItem={secondProject} direction="row-reverse" />
          </div>
          <div className="projects__item">
            <Project projectsItem={thirdProject} direction="row" />
          </div>
        </div>
      </div>
    </section>
  );
};
