import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div>
      <div className="">
        <div className="container">
          <h1 className="pr-p1">My projects</h1>
          <div className="all1">
            <Link
              href="https://taupe-frangollo-661719.netlify.app"
              target="_blank"
            >
              {" "}
              <Image
                src={"/project1.png"}
                width={900}
                height={400}
                alt="my img"
              />
            </Link>

            <p className="pr-p2"> Project</p>
          </div>
          <div className="all1">
            <p className="pr-p2"> Project</p>
            <Link href="https://homepage8lesonaa.netlify.app" target="_blank">
              {" "}
              <Image
                src={"/project2.png"}
                width={900}
                height={400}
                alt="my img"
              />
            </Link>
          </div>
          <div className="all1">
            <Link
              href="https://superb-medovik-cac12c.netlify.app"
              target="_blank"
            >
              {" "}
              <Image
                src={"/project3.png"}
                width={900}
                height={400}
                alt="my img"
              />
            </Link>
            <p className="pr-p2"> Project</p>
          </div>
          <div className="all1">
            <p className="pr-p2"> Project</p>
            <Link href="https://react-homewrok3.vercel.app" target="_blank">
              {" "}
              <Image
                src={"/project4.png"}
                width={900}
                height={400}
                alt="my img"
              />
            </Link>
          </div>
          <div className="all1">
            <Link href="https://month5homework3.netlify.app" target="_blank">
              {" "}
              <Image
                src={"/project5.png"}
                width={900}
                height={400}
                alt="my img"
              />
            </Link>

            <p className="pr-p2"> Project</p>
          </div>
          <div className="all1">
            <p className="pr-p2"> Project</p>
            <Link
              href="https://grouprojecthomework7.netlify.app"
              target="_blank"
            >
              {" "}
              <Image
                src={"/project6.png"}
                width={900}
                height={400}
                alt="my img"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
