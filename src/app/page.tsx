import Image from "next/image";
import { Experience } from "./components/experience/Experience";
import { Header } from "./components/header/Header";
import { Info } from "./components/information/Information";
import "./components/styles/home.scss";
import { EmailIcos } from "./components/Icons/EmailIcos";
import { SocialBtns } from "./components/SocialBtns/SocialBtns";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <button className="btn-primary">
          Contact me
          <EmailIcos />
        </button>
      </div>
    </main>
  );
}
