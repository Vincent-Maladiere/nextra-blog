import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { notebooks } from "../lib/data";

const Notebook = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-[80%] pb-40">
      <h2>Notebooks</h2>
      <p>Tips and tricks on computer vision, audio and geo-clustering.</p>
      <div className="w-full flex flex-col md:flex-row justify-center gap-5">
        {notebooks.map((l) => (
          <div className="bg-black w-full rounded-[15px] lg:w-[33%]">
            <Link key={l.title} href={l.url} className="notebook-card bg-background">
              <Image alt={l.title} src={l.img} width={400} height={250} />
              <div>
                <p className="font-bold">{l.title}</p>
                <p>{l.model}</p>
              </div>
              <button className="button bg-[#a78ce4] flex justify-between gap-3 items-center">
                See notebook <GoArrowRight />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notebook;
