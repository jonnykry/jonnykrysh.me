import { ReactElement } from "react";
import "./Home.css";
import imgUrl from "../assets/jonny.png";
import resumeUrl from "../assets/resume.pdf";

type Link = {
  url: string;
  title: string;
};

const Home = () => {
  const nameLetters = ["j", "o", "n", "n", "y", "gap", "k", "r", "y", "s", "h"];
  const links: Link[] = [
    { url: "mailto:jonnykry93@gmail.com", title: "E-mail" },
    { url: resumeUrl, title: "Resume" },
    { url: "https://www.linkedin.com/in/jonnykry/", title: "LinkedIn" },
    { url: "https://github.com/jonnykry", title: "GitHub" },
  ];

  let delay = 0;
  const nameElements: ReactElement[] = nameLetters.map((letter: string) => {
    // Add a delay to each letter to stagger animation start time
    delay += 0.12;
    return letter === "gap" ? (
      <span className="gap"></span>
    ) : (
      <span style={{ animationDelay: `${delay}s` }}>{letter}</span>
    );
  });

  const linkElements: ReactElement[] = links.map((link: Link) => {
    return (
      <div className="link-container">
        <a href={link.url} target="_blank">
          {link.title}
        </a>
      </div>
    );
  });

  return (
    <>
      <section className="hero-container">
        <div className="header wavy">{nameElements}</div>
        <div className="img-container">
          <img src={imgUrl} alt="A portrait of Jonny Krysh" />
        </div>
        <div className="hero">
          <div>
            Software engineer with over 6-years of professional experience
          </div>
          <div className="haiku">
            Keen eye for pixels
            <br />
            Passion for frontend web tech
            <br />
            Searching for next role
          </div>
          <div className="links-container">{linkElements}</div>
        </div>
      </section>
    </>
  );
};

export default Home;
