import Link from "next/link";
import Image from "next/image";
import { courses } from "../lib/data";
import { GoArrowRight } from "react-icons/go";

const Teaching = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-[80%]">
      <h2>Courses</h2>
      <p className="text-center subtitle">
        I teach data science at Polytechnique and Dauphine.
        <br />
        You can find below courses content and exercices.
      </p>
      <div className="w-full flex flex-col md:flex-row justify-center gap-5">
        {courses.map((l) => (
          <div className="bg-black w-full rounded-[15px] md:w-[45%]">
            <Link
              key={l.title}
              href={l.url}
              className="card bg-background border border-black h-full"
            >
              <Image alt={l.title} src={l.img} width={170} height={170} />
              <div>
                <h3>{l.title}</h3>
                <p>{l.school}</p>
              </div>
              <p>{l.desc}</p>
              <button className="button bg-[#a78ce4] flex justify-between gap-3 items-center">
                See course <GoArrowRight />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teaching;
