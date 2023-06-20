import { SectionTitle } from "../sectionTitle/SectionTitle"
import "./Information.scss"

export function Info(){
  return(
      <div className="infos">
      <SectionTitle text="Languages"/>
      <div className="languages-info">
        <span>🇧🇷Português- Falante nativo</span>
        <span>🇺🇸Inglês- Intermediário</span>
        <span>🇪🇸espanhol - Intermediário</span>
      </div>
      <SectionTitle text="Education"/>
      <div className="educational-info">
        <span>🖥️</span>
        <span>Engenharia de Software Graduação - UDESC - Universidade do Estado de Santa Catarina</span>
        <br/>
        <hr/>
        <span>🎓</span>
        <span>Desenvolvimento Full Stack- PUC - Pontifícia Universidade Católica de Minas Gerais</span>
        <br/>
        <hr/>
        <span>🖥️</span>
        <span>Engineer software Degree - PUC - Pontifícia Universidade Católica de Minas Gerais</span>
        <br/>
        <hr/>
        <span>🎓</span>
        <span>Técnico em Informática - Senai - Serviço Nacional de Aprendizagem Industrial</span>
        <br/>
        <hr/>
      </div>
    </div>
  )
}