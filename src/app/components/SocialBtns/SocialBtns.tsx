import { GitIcons } from "../Icons/GitIcons";
import { InstalIcons } from "../Icons/InstalIcons";
import { LinkedinIcons } from "../Icons/LinkedinIcons";
import { TwitterIcons } from "../Icons/TwitterIcons";

import "./socilaBtns.scss"

export function SocialBtns() {
  return (
    <div className="social">
      <a href="">
        <InstalIcons />
      </a>
      <a href="">
        <LinkedinIcons />
      </a>
      <a href="">
        <TwitterIcons />
      </a>
      <a href="">
        <GitIcons />
      </a>
    </div>
  );
}
