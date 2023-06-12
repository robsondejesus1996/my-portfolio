import { Experience } from "./components/experience/Experience";
import { Header } from "./components/header/Header";
import "./components/styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience/>
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
    </main>
  );
}
