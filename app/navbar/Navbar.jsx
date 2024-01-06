import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <h1 className="logo">LOGO</h1>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link  href="/projects">
            <li>Projects</li>
            </Link>
            <Link href="/project">
              <li>project</li>
            </Link>

            <Link href="/contact">
              <li>
                <p>contact</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>{" "}
    </div>
  );
};

export default Navbar;
