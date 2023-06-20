import Image from "next/image";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Robson de Jesus 👋</h1>
        <h2>Engenheiro de Software</h2>
        <h2 className="apresentacao">
          Sou um desenvolvedor Full-Stack entusiasta e apaixonado nas melhores
          tecnologias de desenvolvimento. Cada fez mais apaixonado pelas maiores
          tecnologias como Java, Python, ReactJS & NextJS.{" "}
        </h2>
        <h1><a href="https://github.com/robsondejesus1996" target="_blank" rel="noopener noreferrer">*Projetos no Github</a></h1>
        
      </div>
      <Image
        src="/eu.jpeg"
        alt="Vercel Logo"
        width={325}
        height={310}
        priority
      />
    </div>
  );
}
