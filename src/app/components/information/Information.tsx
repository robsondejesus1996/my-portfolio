import { SectionTitle } from "../sectionTitle/SectionTitle"
import "./Information.scss"

export function Info(){
  return(
      <div className="infos">
      <SectionTitle text="Languages"/>
      <div className="languages-info">
        <span>🇺🇸 EN - Fluent</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education"/>
      <div className="educational-info">
        <span>🎓</span>
        <span>Engineer software Degree - UDESC - Universidade do Estado de Santa Catarina</span>
      </div>
    </div>
  )
}