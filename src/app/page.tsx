import Image from "next/image";
import { Header } from "./components/header/Header";

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="experience">
        <h3>Experience</h3>
        <p>
          3 years working as a Software Developer, in companys such as Itaú,
          Stone and Aftersale.
        </p>
        <div className="experience-time"></div>

        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🇺🇸 EN- Fluent</span>
            <span>🇧🇷 PT-Br - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="education-info">
            <span>🎓</span>
            <span>
              Software Engineer Degree - UDESC - Universidade do Estado de Santa
              Catarina
            </span>
          </div>
        </div>
        <div className="buttons">
          <div className="social"></div>
          <button>Contact me</button>
        </div>
      </div>
    </main>
  );
}
