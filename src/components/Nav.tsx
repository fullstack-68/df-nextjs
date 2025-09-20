import { type FC } from "react";
import Link from "next/link";

import Clock from "./Clock";
const Nav: FC = () => {
  return (
    <header style={{ padding: "1rem 0" }}>
      <nav>
        <ul>
          <li>
            <Link href="/" className="custom-icon">
              <i className="fa-solid fa-xl fa-home"></i>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Clock />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
