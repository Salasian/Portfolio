import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import heroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <div className="bg-blue-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-12">
        <article>
          <h1 className="text-5xl font-bold tracking-wider">
            I&rsquo;m Ian Salas
          </h1>

          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 ">
            Design and creativity brought to the web.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Salasian">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/ian-salas-l%C3%B3pez-612b76238/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
