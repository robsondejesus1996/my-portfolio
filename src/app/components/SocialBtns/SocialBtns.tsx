import { GitIcons } from "../Icons/GitIcons";
import { InstalIcons } from "../Icons/InstalIcons";
import { LinkedinIcons } from "../Icons/LinkedinIcons";
import { TwitterIcons } from "../Icons/TwitterIcons";

import "./socilaBtns.scss"

export function SocialBtns() {
  return (
    <div className="social">
      <a target="_blank" href="https://www.instagram.com/">
        <InstalIcons />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/robson-jesus-88a2a351/">
        <LinkedinIcons />
      </a>
      <a target="_blank" href="https://twitter.com/">
        <TwitterIcons />
      </a>
      <a target="_blank" href="https://github.com/robsondejesus1996">
        <GitIcons />
      </a>
    </div>
  );
}
