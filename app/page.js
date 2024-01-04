import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="Home">
        <div className="container">
          <div className="obj">
            <div className="left">
              <p className="p1">
                My Name is Azizbek I'm <strong> Frontend Developer</strong>
              </p>
              <p className="p2">
                I'm interested in web development. I have good knowledge of
                front-end technologies.
              </p>

              <a href="https://drive.google.com/uc?export=download&id=1Zpr03usUXGjpL_00PEBsIzxu7aUJQAJU">
                <button className="resume">Download Resume</button>
              </a>
            </div>
            <div className="right">
              <Image
                className="img1"
                src={"/img1.png"}
                width={400}
                height={400}
                alt="my img"
              />
            </div>
          </div>
          <div className="about">
            <h1 className="ab1">About me</h1>
            <p className="p3">
              My name is Aziz. I live in Uzbekistan. I am interested in
              programmer. I study in <strong> Najot talim.</strong> I chose
              <strong> Frontend </strong> because I am interested with design. I
              am very <strong>patient</strong> and{" "}
              <strong> hard working</strong> and of course I know 3 languages
              one of them is English my level is B1.
            </p>{" "}
            <p className="p4">My skills</p>
            <div className="work">
              <p className="p11">html</p>
              <p className="p11">css</p>
              <p className="p11">javascript</p>
              <p className="p11">React</p>
              <p className="p11">nextjs</p>
              <p className="p11">github</p>
              <p className="p11">vercel</p>
              <p className="p11">netlify</p>
              <p className="p11">bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
