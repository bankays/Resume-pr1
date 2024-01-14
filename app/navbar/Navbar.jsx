import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <h1 className="logo">AZIZ</h1>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>

            <Link href="/project">
              <li>Project</li>
            </Link>

            <Link href="/contact">
              <li>
                <p>Contact</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>{" "}
    </div>
  );
};

export default Navbar;
