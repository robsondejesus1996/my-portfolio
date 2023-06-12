import { SectionTitle } from "../sectionTitle/SectionTitle"
import "./Information.scss"

export function Info() {
  return (
    <div className="infos">
      <h3>Languages</h3>
      <SectionTitle text="Languages"/>
      <div className="languages-info">
        <span>🇺🇸 EN- Fluent</span>
        <span>🇧🇷 PT-Br - Native Speaker</span>
      </div>
      <SectionTitle text="Education"/>
      <div className="education-info">
        <span>🎓</span>
        <span>
          Software Engineer Degree - UDESC - Universidade do Estado de Santa
          Catarina
        </span>
      </div>
    </div>
  );
}
