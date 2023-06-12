import Image from "next/image";
import "./header.scss"

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, i´m Robson!👋</h1>
        <h2>Software Engineer</h2>
      </div>
      <Image
        src="/eu.jpeg"
        alt="Next.js Logo"
        width={325}
        height={310}
        priority
      />
    </div>
  );
}
