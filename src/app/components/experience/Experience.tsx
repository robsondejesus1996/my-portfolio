import Image from "next/image";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import "./Experience.scss";
import { Skill } from "../skill/skill";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="*Experiências" />
      <p>Unidavi - Programador Full Stack(2 Anos)</p>
      <p>UDESC - Estágio (2 anos)</p>
      <p>IPM Sistemas - Programador(2 Anos)</p>
      <p> Casa do Computador- Técnico (2 Anos)</p>
      <div className="experience-time">
        <div>
          <Skill image="/react.png" measure={2} years="2 years" />
          <Skill image="/ts.png" measure={3} years="3 years" />
          <Skill image="/js.png" measure={3} years="3 years" />
          <Skill image="/java.png" measure={1} years="1 year" />
        </div>
      </div>
    </div>
  );
}
