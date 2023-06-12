import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div>
          <h1>Hi, i´m Robson!</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
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
